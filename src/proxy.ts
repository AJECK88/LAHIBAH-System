import {
  clerkMiddleware,
  createRouteMatcher,
  clerkClient,
} from "@clerk/nextjs/server";
import { routeAccessMap } from "./app/(dashboard)/Settings";
import { NextResponse } from "next/server";

const MatcherRole = Object.entries(routeAccessMap).map(
  ([route, allowedRoles]) => ({
    Matcher: createRouteMatcher([`/${route}(.*)`]),
    allowedRoles,
  }),
);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  let role: string | undefined;
  if (userId) {
    const user = await (await clerkClient()).users.getUser(userId);
    role = user?.publicMetadata?.role as string | undefined;
  }

  // adding a temporarry debugging log to check the role and request URL

  for (const { Matcher, allowedRoles } of MatcherRole) {
    if (Matcher(req) && !allowedRoles.includes(role!)) {
      console.log('MIDDLEWARE REDIRECT:', { path: req.nextUrl.pathname, userId, role, allowedRoles });
      if (role) {
        return NextResponse.redirect(new URL(`/${role}`, req.url));
      } else {
        return NextResponse.redirect(new URL(`/sign-in`, req.url));
      }
    }
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
