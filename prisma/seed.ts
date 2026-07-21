import { PrismaClient, Usersex } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding started...");

  // 1. Grade
  const grade1 = await prisma.grade.upsert({
    where: { name: "Grade 1" },
    update: {},
    create: { name: "Grade 1" },
  });

  // 2. Level
  const level1 = await prisma.level.upsert({
    where: { LevelName: "Level 100" },
    update: {},
    create: { LevelName: "Level 100" },
  });

  // 3. Teacher (created before Department, since Department.teacherId points to Teacher)
  const teacher1 = await prisma.teacher.upsert({
    where: { email: "teacher1@lahiba.com" },
    update: {},
    create: {
      username: "teacher1",
      email: "teacher1@lahiba.com",
      address: "Bamenda, Cameroon",
      phoneNumber: "677000001",
      firstName: "John",
      lastName: "Doe",
      sex: Usersex.Male,
      teachersId: "T-0001",
    },
  });

  // 4. Department
  const department1 = await prisma.department.upsert({
    where: { name: "Computer Science" },
    update: {},
    create: {
      name: "Computer Science",
      teacherId: teacher1.id,
    },
  });

  // 5. Subject
  const subject1 = await prisma.subject.upsert({
    where: { name: "Web Development" },
    update: {},
    create: {
      name: "Web Development",
      gradeId: grade1.id,
      levelId: level1.id,
      department: { connect: [{ id: department1.id }] },
      teachers: { connect: [{ id: teacher1.id }] },
    },
  });

  // 6. Classroom
  const classroom1 = await prisma.classroom.upsert({
    where: { name: "Room A1" },
    update: {},
    create: {
      name: "Room A1",
      course: { connect: [{ id: subject1.id }] },
    },
  });

  // 7. Parent
  const parent1 = await prisma.parent.upsert({
    where: { email: "parent1@lahiba.com" },
    update: {},
    create: {
      username: "parent1",
      email: "parent1@lahiba.com",
      sex: Usersex.Female,
      address: "Bamenda, Cameroon",
      phoneNumber: "677000002",
      firstName: "Jane",
      lastName: "Doe",
    },
  });

  // 8. Student
  const student1 = await prisma.student.upsert({
    where: { email: "student1@lahiba.com" },
    update: {},
    create: {
      username: "student1",
      email: "student1@lahiba.com",
      age: 20,
      address: "Bamenda, Cameroon",
      phoneNumber: "677000003",
      firstName: "Sam",
      lastName: "Smith",
      sex: Usersex.Male,
      parentId: parent1.id,
      departmentId: department1.id,
      gradeId: grade1.id,
      levelId: level1.id,
      matricule: "MAT-0001",
    },
  });

  // 9. Admin — IMPORTANT: replace the id below with your OWN Clerk user ID
  const admin1 = await prisma.admin.upsert({
    where: { email: "lesley@example.com" },
    update: {},
    create: {
      id: "user_36pzu2n81gxlSIFYN47x0MyxeGD",
      userName: "Lesley",
      email: "lesley@example.com",
    },
  });

  // 10. School — parent grouping for departments
  const school1 = await prisma.school.upsert({
    where: { name: "School of Computer Engineering" },
    update: {},
    create: { name: "School of Computer Engineering" },
  });

  // Link department1 to the school
  await prisma.department.update({
    where: { id: department1.id },
    data: { schoolId: school1.id },
  });

  // 11. Department chat room — auto-created, everyone in the department joins
  const deptRoom = await prisma.chatRoom.upsert({
    where: { id: `dept-room-${department1.id}` },
    update: {},
    create: {
      id: `dept-room-${department1.id}`,
      type: "DEPARTMENT",
      name: `${department1.name} Community`,
      departmentId: department1.id,
    },
  });

  // 12. Add the seeded teacher and student as participants
  await prisma.chatParticipant.upsert({
    where: { roomId_participantId: { roomId: deptRoom.id, participantId: teacher1.id } },
    update: {},
    create: {
      roomId: deptRoom.id,
      participantId: teacher1.id,
      participantType: "TEACHER",
    },
  });

  await prisma.chatParticipant.upsert({
    where: { roomId_participantId: { roomId: deptRoom.id, participantId: student1.id } },
    update: {},
    create: {
      roomId: deptRoom.id,
      participantId: student1.id,
      participantType: "STUDENT",
    },
  });

  // 13. One test message in the department room
  await prisma.chatMessage.create({
    data: {
      roomId: deptRoom.id,
      senderId: teacher1.id,
      senderName: `${teacher1.firstName} ${teacher1.lastName}`,
      content: "Welcome to the department chat!",
    },
  });

  console.log("Seeding finished.");
  console.log({
    grade1: grade1.id,
    level1: level1.id,
    teacher1: teacher1.id,
    department1: department1.id,
    subject1: subject1.id,
    classroom1: classroom1.id,
    parent1: parent1.id,
    student1: student1.id,
    admin1: admin1.id,
    school1: school1.id,
    deptRoom: deptRoom.id,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
