import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { advanceCohortWithResits } from "@/lib/utlity/promotion";
import { getCurrentAcademicYearString, getNextYearString } from "@/lib/utlity/Settings";

export async function GET(request: Request) {
  // Security: Verify secret header from cron service (Vercel, GitHub Actions, etc.)
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const currentYearStr = getCurrentAcademicYearString();
    const nextYearStr = getNextYearString(currentYearStr);

    // Fetch active academic year and next academic year records
    const currentYear = await prisma.academicYear.findUnique({
      where: { year: currentYearStr },
    });
    const nextYear = await prisma.academicYear.upsert({
      where: { year: nextYearStr },
      update: { isCurrent: true },
      create: { year: nextYearStr, isCurrent: true },
    });

    if (!currentYear) {
      return NextResponse.json({ error: "Current academic year not found." }, { status: 400 });
    }

    // Sequence through level progressions (Level 100 -> 200, Level 200 -> 300, etc.)
    const levels = await prisma.level.findMany({ orderBy: { id: "asc" } });
    const results = [];

    for (let i = 0; i < levels.length - 1; i++) {
      const fromLevel = levels[i];
      const toLevel = levels[i + 1];

      const res = await advanceCohortWithResits(
        currentYear.id,
        nextYear.id,
        fromLevel.id,
        toLevel.id
      );
      results.push({ level: fromLevel.LevelName, ...res });
    }

    return NextResponse.json({ success: true, summary: results });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}