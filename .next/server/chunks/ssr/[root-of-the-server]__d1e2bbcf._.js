module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TEMPORARY DATA
__turbopack_context__.s([
    "DepartmentsData",
    ()=>DepartmentsData,
    "TeacherCalendarEvents",
    ()=>TeacherCalendarEvents,
    "announcementsData",
    ()=>announcementsData,
    "assignmentsData",
    ()=>assignmentsData,
    "calendarEvents",
    ()=>calendarEvents,
    "eventsData",
    ()=>eventsData,
    "examsData",
    ()=>examsData,
    "lessonsData",
    ()=>lessonsData,
    "parentsData",
    ()=>parentsData,
    "resultsData",
    ()=>resultsData,
    "role",
    ()=>role,
    "studentsData",
    ()=>studentsData,
    "subjectsData",
    ()=>subjectsData,
    "teachersData",
    ()=>teachersData
]);
let role = "admin";
const teachersData = [
    {
        id: 1,
        teacherId: "1234567890",
        name: "John Doe",
        email: "john@doe.com",
        photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Math",
            "Geometry"
        ],
        classes: [
            "1B",
            "2A",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 2,
        teacherId: "1234567890",
        name: "Jane Doe",
        email: "jane@doe.com",
        photo: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Physics",
            "Chemistry"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 3,
        teacherId: "1234567890",
        name: "Mike Geller",
        email: "mike@geller.com",
        photo: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Biology"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 4,
        teacherId: "1234567890",
        name: "Jay French",
        email: "jay@gmail.com",
        photo: "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "History"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 5,
        teacherId: "1234567890",
        name: "Jane Smith",
        email: "jane@gmail.com",
        photo: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Music",
            "History"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 6,
        teacherId: "1234567890",
        name: "Anna Santiago",
        email: "anna@gmail.com",
        photo: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Physics"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 7,
        teacherId: "1234567890",
        name: "Allen Black",
        email: "allen@black.com",
        photo: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "English",
            "Spanish"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 8,
        teacherId: "1234567890",
        name: "Ophelia Castro",
        email: "ophelia@castro.com",
        photo: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Math",
            "Geometry"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 9,
        teacherId: "1234567890",
        name: "Derek Briggs",
        email: "derek@briggs.com",
        photo: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Literature",
            "English"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 10,
        teacherId: "1234567890",
        name: "John Glover",
        email: "john@glover.com",
        photo: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Biology"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    }
];
const studentsData = [
    {
        id: 1,
        studentId: "1234567890",
        name: "John Doe",
        email: "john@doe.com",
        photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "1B",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 2,
        studentId: "1234567890",
        name: "Jane Doe",
        email: "jane@doe.com",
        photo: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 3,
        studentId: "1234567890",
        name: "Mike Geller",
        email: "mike@geller.com",
        photo: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 4,
        studentId: "1234567890",
        name: "Jay French",
        email: "jay@gmail.com",
        photo: "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 5,
        studentId: "1234567890",
        name: "Jane Smith",
        email: "jane@gmail.com",
        photo: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 6,
        studentId: "1234567890",
        name: "Anna Santiago",
        email: "anna@gmail.com",
        photo: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 7,
        studentId: "1234567890",
        name: "Allen Black",
        email: "allen@black.com",
        photo: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 8,
        studentId: "1234567890",
        name: "Ophelia Castro",
        email: "ophelia@castro.com",
        photo: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 9,
        studentId: "1234567890",
        name: "Derek Briggs",
        email: "derek@briggs.com",
        photo: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 10,
        studentId: "1234567890",
        name: "John Glover",
        email: "john@glover.com",
        photo: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    }
];
const parentsData = [
    {
        id: 1,
        name: "Johns Doe",
        students: [
            "Sarah Brewer"
        ],
        email: "john@doe.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 2,
        name: "Jane Doe",
        students: [
            "Cecilia Bradley"
        ],
        email: "jane@doe.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 3,
        name: "Mike Geller",
        students: [
            "Fanny Caldwell"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 4,
        name: "Jay French",
        students: [
            "Mollie Fitzgerald",
            "Ian Bryant"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 5,
        name: "Jane Smith",
        students: [
            "Mable Harvey"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 6,
        name: "Anna Santiago",
        students: [
            "Joel Lambert"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 7,
        name: "Allen Black",
        students: [
            "Carrie Tucker",
            "Lilly Underwood"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 8,
        name: "Ophelia Castro",
        students: [
            "Alexander Blair"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 9,
        name: "Derek Briggs",
        students: [
            "Susan Webster",
            "Maude Stone"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 10,
        name: "John Glover",
        students: [
            "Stella Scott"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    }
];
const subjectsData = [
    {
        id: 1,
        name: "Math",
        teachers: [
            "Alice Phelps",
            "Russell Davidson"
        ]
    },
    {
        id: 2,
        name: "English",
        teachers: [
            "Manuel Becker",
            "Eddie Chavez"
        ]
    },
    {
        id: 3,
        name: "Physics",
        teachers: [
            "Lola Newman",
            "Darrell Delgado"
        ]
    },
    {
        id: 4,
        name: "Chemistry",
        teachers: [
            "Nathan Kelly",
            "Benjamin Snyder"
        ]
    },
    {
        id: 5,
        name: "Biology",
        teachers: [
            "Alma Benson",
            "Lina Collier"
        ]
    },
    {
        id: 6,
        name: "History",
        teachers: [
            "Hannah Bowman",
            "Betty Obrien"
        ]
    },
    {
        id: 7,
        name: "Geography",
        teachers: [
            "Lora French",
            "Sue Brady"
        ]
    },
    {
        id: 8,
        name: "Art",
        teachers: [
            "Harriet Alvarado",
            "Mayme Keller"
        ]
    },
    {
        id: 9,
        name: "Music",
        teachers: [
            "Gertrude Roy",
            "Rosa Singleton"
        ]
    },
    {
        id: 10,
        name: "Literature",
        teachers: [
            "Effie Lynch",
            "Brett Flowers"
        ]
    }
];
const DepartmentsData = [
    {
        id: 1,
        name: "Accountancy",
        courses: 20,
        supervisor: "Joseph Padilla"
    },
    {
        id: 2,
        name: "Business Studies",
        courses: 25,
        supervisor: "Blake Joseph"
    },
    {
        id: 3,
        name: "Banking and Finance",
        courses: 20,
        supervisor: "Tom Bennett"
    },
    {
        id: 4,
        name: "Marketing",
        courses: 18,
        supervisor: "Aaron Collins"
    },
    {
        id: 5,
        name: "Management",
        courses: 16,
        supervisor: "Iva Frank"
    },
    {
        id: 6,
        name: "Public Services and Administration",
        courses: 20,
        supervisor: "Leila Santos"
    },
    {
        id: 7,
        name: "Software Engineering and Computing",
        courses: 48,
        supervisor: "Carrie Walton"
    },
    {
        id: 8,
        name: "Hardware Maintenance",
        courses: 22,
        supervisor: "Christopher Butler"
    },
    {
        id: 9,
        name: "E-commerce and Digital Marketing",
        courses: 18,
        supervisor: "Marc Miller"
    },
    {
        id: 10,
        name: "Networks and Security",
        courses: 20,
        supervisor: "Ophelia Marsh"
    }
];
const lessonsData = [
    {
        id: 1,
        subject: "Math",
        class: "1A",
        teacher: "Tommy Wise"
    },
    {
        id: 2,
        subject: "English",
        class: "2A",
        teacher: "Rhoda Frank"
    },
    {
        id: 3,
        subject: "Science",
        class: "3A",
        teacher: "Della Dunn"
    },
    {
        id: 4,
        subject: "Social Studies",
        class: "1B",
        teacher: "Bruce Rodriguez"
    },
    {
        id: 5,
        subject: "Art",
        class: "4A",
        teacher: "Birdie Butler"
    },
    {
        id: 6,
        subject: "Music",
        class: "5A",
        teacher: "Bettie Oliver"
    },
    {
        id: 7,
        subject: "History",
        class: "6A",
        teacher: "Herman Howard"
    },
    {
        id: 8,
        subject: "Geography",
        class: "6B",
        teacher: "Lucinda Thomas"
    },
    {
        id: 9,
        subject: "Physics",
        class: "6C",
        teacher: "Ronald Roberts"
    },
    {
        id: 10,
        subject: "Chemistry",
        class: "4B",
        teacher: "Julia Pittman"
    }
];
const examsData = [
    {
        id: 1,
        subject: "Math",
        class: "1A",
        time: "10:00 AM",
        teacher: "Martha Morris",
        date: "2025-01-01"
    },
    {
        id: 2,
        subject: "English",
        class: "2A",
        time: "11:00 AM",
        teacher: "Randall Garcia",
        date: "2025-01-01"
    },
    {
        id: 3,
        subject: "Science",
        class: "3A",
        time: "12:00 PM",
        teacher: "Myrtie Scott",
        date: "2025-01-01"
    },
    {
        id: 4,
        subject: "Social Studies",
        class: "1B",
        time: "01:00 PM",
        teacher: "Alvin Swanson",
        date: "2025-01-01"
    },
    {
        id: 5,
        subject: "Art",
        class: "4A",
        time: "02:00 PM",
        teacher: "Mabelle Wallace",
        date: "2025-01-01"
    },
    {
        id: 6,
        subject: "Music",
        class: "5A",
        time: "03:00 PM",
        teacher: "Dale Thompson",
        date: "2025-01-01"
    },
    {
        id: 7,
        subject: "History",
        class: "6A",
        time: "04:00 PM",
        teacher: "Allie Conner",
        date: "2025-01-01"
    },
    {
        id: 8,
        subject: "Geography",
        class: "6B",
        time: "05:00 PM",
        teacher: "Hunter Fuller",
        date: "2025-01-01"
    },
    {
        id: 9,
        subject: "Physics",
        class: "7A",
        time: "06:00 PM",
        teacher: "Lois Lindsey",
        date: "2025-01-01"
    },
    {
        id: 10,
        subject: "Chemistry",
        class: "8A",
        time: "07:00 PM",
        teacher: "Vera Soto",
        date: "2025-01-01"
    }
];
const assignmentsData = [
    {
        id: 1,
        subject: "Math",
        class: "1A",
        teacher: "Anthony Boone",
        dueDate: "2025-01-01"
    },
    {
        id: 2,
        subject: "English",
        class: "2A",
        teacher: "Clifford Bowen",
        dueDate: "2025-01-01"
    },
    {
        id: 3,
        subject: "Science",
        class: "3A",
        teacher: "Catherine Malone",
        dueDate: "2025-01-01"
    },
    {
        id: 4,
        subject: "Social Studies",
        class: "1B",
        teacher: "Willie Medina",
        dueDate: "2025-01-01"
    },
    {
        id: 5,
        subject: "Art",
        class: "4A",
        teacher: "Jose Ruiz",
        dueDate: "2025-01-01"
    },
    {
        id: 6,
        subject: "Music",
        class: "5A",
        teacher: "Katharine Owens",
        dueDate: "2025-01-01"
    },
    {
        id: 7,
        subject: "History",
        class: "6A",
        teacher: "Shawn Norman",
        dueDate: "2025-01-01"
    },
    {
        id: 8,
        subject: "Geography",
        class: "6B",
        teacher: "Don Holloway",
        dueDate: "2025-01-01"
    },
    {
        id: 9,
        subject: "Physics",
        class: "7A",
        teacher: "Franklin Gregory",
        dueDate: "2025-01-01"
    },
    {
        id: 10,
        subject: "Chemistry",
        class: "8A",
        teacher: "Danny Nguyen",
        dueDate: "2025-01-01"
    }
];
const resultsData = [
    {
        id: 1,
        subject: "Math",
        class: "1A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 2,
        subject: "English",
        class: "2A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 3,
        subject: "Science",
        class: "3A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 4,
        subject: "Social Studies",
        class: "1B",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 5,
        subject: "Art",
        class: "4A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 6,
        subject: "Music",
        class: "5A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 7,
        subject: "History",
        class: "6A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 8,
        subject: "Geography",
        class: "6B",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 9,
        subject: "Physics",
        class: "7A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 10,
        subject: "Chemistry",
        class: "8A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    }
];
const eventsData = [
    {
        id: 1,
        title: "Lake Trip",
        class: "1A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 2,
        title: "Picnic",
        class: "2A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 3,
        title: "Beach Trip",
        class: "3A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 4,
        title: "Museum Trip",
        class: "4A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 5,
        title: "Music Concert",
        class: "5A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 6,
        title: "Magician Show",
        class: "1B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 7,
        title: "Lake Trip",
        class: "2B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 8,
        title: "Cycling Race",
        class: "3B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 9,
        title: "Art Exhibition",
        class: "4B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 10,
        title: "Sports Tournament",
        class: "5B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    }
];
const announcementsData = [
    {
        id: 1,
        title: "About 4A Math Test",
        class: "4A",
        date: "2025-01-01"
    },
    {
        id: 2,
        title: "About 3A Math Test",
        class: "3A",
        date: "2025-01-01"
    },
    {
        id: 3,
        title: "About 3B Math Test",
        class: "3B",
        date: "2025-01-01"
    },
    {
        id: 4,
        title: "About 6A Math Test",
        class: "6A",
        date: "2025-01-01"
    },
    {
        id: 5,
        title: "About 8C Math Test",
        class: "8C",
        date: "2025-01-01"
    },
    {
        id: 6,
        title: "About 2A Math Test",
        class: "2A",
        date: "2025-01-01"
    },
    {
        id: 7,
        title: "About 4C Math Test",
        class: "4C",
        date: "2025-01-01"
    },
    {
        id: 8,
        title: "About 4B Math Test",
        class: "4B",
        date: "2025-01-01"
    },
    {
        id: 9,
        title: "About 3C Math Test",
        class: "3C",
        date: "2025-01-01"
    },
    {
        id: 10,
        title: "About 1C Math Test",
        class: "1C",
        date: "2025-01-01"
    }
];
const calendarEvents = [
    /* || Monday (day 1) */ {
        id: 1,
        title: "Math",
        day: 1,
        startHour: 8,
        endHour: 10
    },
    {
        id: 2,
        title: "Programming",
        day: 1,
        startHour: 11,
        endHour: 13
    },
    {
        id: 3,
        title: "General computer science",
        day: 1,
        startHour: 14,
        endHour: 15
    },
    {
        id: 4,
        title: "Physics",
        day: 1,
        startHour: 15,
        endHour: 17
    },
    /* || end Monday */ /* || Tuesday (day 2) */ {
        id: 5,
        title: "Math",
        day: 2,
        startHour: 8,
        endHour: 11
    },
    {
        id: 6,
        title: "Programming",
        day: 2,
        startHour: 11,
        endHour: 13
    },
    {
        id: 7,
        title: "General computer science",
        day: 2,
        startHour: 14,
        endHour: 15
    },
    {
        id: 8,
        title: "Physics",
        day: 2,
        startHour: 15,
        endHour: 17
    },
    /* || end Tuesday */ /* || Wednesday (day 3) */ {
        id: 9,
        title: "Math",
        day: 3,
        startHour: 8,
        endHour: 11
    },
    {
        id: 10,
        title: "Programming",
        day: 3,
        startHour: 11,
        endHour: 13
    },
    {
        id: 11,
        title: "General computer science",
        day: 3,
        startHour: 14,
        endHour: 15
    },
    {
        id: 12,
        title: "Physics",
        day: 3,
        startHour: 15,
        endHour: 17
    },
    /* || end Wednesday */ /* || Thursday (day 4) */ {
        id: 13,
        title: "Math",
        day: 4,
        startHour: 8,
        endHour: 11
    },
    {
        id: 14,
        title: "Programming",
        day: 4,
        startHour: 11,
        endHour: 13
    },
    {
        id: 15,
        title: "General computer science",
        day: 4,
        startHour: 14,
        endHour: 15
    },
    {
        id: 16,
        title: "Physics",
        day: 4,
        startHour: 15,
        endHour: 17
    },
    /* || end Thursday */ /* || Friday (day 5) */ {
        id: 17,
        title: "Math",
        day: 5,
        startHour: 8,
        endHour: 11
    },
    {
        id: 18,
        title: "Programming",
        day: 5,
        startHour: 11,
        endHour: 13
    },
    {
        id: 19,
        title: "General computer science",
        day: 5,
        startHour: 14,
        endHour: 15
    },
    {
        id: 20,
        title: "Physics",
        day: 5,
        startHour: 15,
        endHour: 17
    }
];
const TeacherCalendarEvents = [
    /* || Monday (day 1) */ {
        id: 1,
        title: "Math",
        day: 1,
        startHour: 8,
        endHour: 10,
        level: "level-100"
    },
    {
        id: 2,
        title: "Programming",
        day: 1,
        startHour: 11,
        endHour: 13,
        level: "level-200"
    },
    {
        id: 3,
        title: "General computer science",
        day: 1,
        startHour: 14,
        endHour: 15,
        level: "level-300"
    },
    {
        id: 4,
        title: "Physics",
        day: 1,
        startHour: 15,
        endHour: 17,
        level: "level-400"
    },
    /* || end Monday */ /* || Tuesday (day 2) */ {
        id: 5,
        title: "Math",
        day: 2,
        startHour: 8,
        endHour: 11,
        level: "level-100"
    },
    {
        id: 6,
        title: "Programming",
        day: 2,
        startHour: 11,
        endHour: 13,
        level: "level-200"
    },
    {
        id: 7,
        title: "General computer science",
        day: 2,
        startHour: 14,
        endHour: 15,
        level: "level-300"
    },
    {
        id: 8,
        title: "Physics",
        day: 2,
        startHour: 15,
        endHour: 17,
        level: "level-400"
    },
    /* || end Tuesday */ /* || Wednesday (day 3) */ {
        id: 9,
        title: "Math",
        day: 3,
        startHour: 8,
        endHour: 11,
        level: "level-100"
    },
    {
        id: 10,
        title: "Programming",
        day: 3,
        startHour: 11,
        endHour: 13,
        level: "level-200"
    },
    {
        id: 11,
        title: "General computer science",
        day: 3,
        startHour: 14,
        endHour: 15,
        level: "level-300"
    },
    {
        id: 12,
        title: "Physics",
        day: 3,
        startHour: 15,
        endHour: 17,
        level: "level-400"
    },
    /* || end Wednesday */ /* || Thursday (day 4) */ {
        id: 13,
        title: "Math",
        day: 4,
        startHour: 8,
        endHour: 11,
        level: "level-100"
    },
    {
        id: 14,
        title: "Programming",
        day: 4,
        startHour: 11,
        endHour: 13,
        level: "level-200"
    },
    {
        id: 15,
        title: "General computer science",
        day: 4,
        startHour: 14,
        endHour: 15,
        level: "level-300"
    },
    {
        id: 16,
        title: "Physics",
        day: 4,
        startHour: 15,
        endHour: 17,
        level: "level-400"
    },
    /* || end Thursday */ /* || Friday (day 5) */ {
        id: 17,
        title: "Math",
        day: 5,
        startHour: 8,
        endHour: 11,
        level: "level-100"
    },
    {
        id: 18,
        title: "Programming",
        day: 5,
        startHour: 11,
        endHour: 13,
        level: "level-200"
    },
    {
        id: 19,
        title: "General computer science",
        day: 5,
        startHour: 14,
        endHour: 15,
        level: "level-300"
    },
    {
        id: 20,
        title: "Physics",
        day: 5,
        startHour: 15,
        endHour: 17,
        level: "level-400"
    }
];
}),
"[project]/src/components/Menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Home",
                href: "/",
                visible: [
                    "admin",
                    "teacher",
                    "student",
                    "parent"
                ]
            },
            {
                icon: "/teacher.png",
                label: "Teachers",
                href: "/list/teachers",
                visible: [
                    "admin",
                    "teacher ",
                    "student"
                ]
            },
            {
                icon: "/student.png",
                label: "Students",
                href: "/list/students",
                visible: [
                    "admin",
                    "teacher"
                ]
            },
            {
                icon: "/parent.png",
                label: "Parents",
                href: "/list/parents",
                visible: [
                    "admin",
                    "teacher"
                ]
            },
            {
                icon: "/subject.png",
                label: "Courses",
                href: "/list/courses",
                visible: [
                    "admin"
                ]
            },
            {
                icon: "/class.png",
                label: "Departments",
                href: "/list/Departments",
                visible: [
                    "admin",
                    "teacher"
                ]
            },
            {
                icon: "/lesson.png",
                label: "Lessons",
                href: "/list/lessons",
                visible: [
                    "admin",
                    "teacher"
                ]
            },
            {
                icon: "/exam.png",
                label: "Exams",
                href: "/list/exams",
                visible: [
                    "admin",
                    "teacher",
                    "student",
                    "parent"
                ]
            },
            {
                icon: "/assignment.png",
                label: "Assignments",
                href: "/list/assignments",
                visible: [
                    "admin",
                    "teacher",
                    "student",
                    "parent"
                ]
            },
            {
                icon: "/result.png",
                label: "Results",
                href: "/list/results",
                visible: [
                    "admin",
                    "teacher",
                    "student",
                    "parent"
                ]
            },
            {
                icon: "/attendance.png",
                label: "Attendance",
                href: "/list/attendance",
                visible: [
                    "admin",
                    "teacher",
                    "student",
                    "parent"
                ]
            },
            {
                icon: "/calendar.png",
                label: "Events",
                href: "/list/events",
                visible: [
                    "admin",
                    "teacher",
                    "student",
                    "parent"
                ]
            },
            {
                icon: "/message.png",
                label: "Messages",
                href: "/list/messages",
                visible: [
                    "admin",
                    "teacher",
                    "student",
                    "parent"
                ]
            },
            {
                icon: "/announcement.png",
                label: "Announcements",
                href: "/list/announcements",
                visible: [
                    "admin",
                    "teacher",
                    "student",
                    "parent"
                ]
            }
        ]
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/profile",
                visible: [
                    "admin",
                    "teacher",
                    "student",
                    "parent"
                ]
            },
            {
                icon: "/setting.png",
                label: "Settings",
                href: "/settings",
                visible: [
                    "admin",
                    "teacher",
                    "student",
                    "parent"
                ]
            },
            {
                icon: "/logout.png",
                label: "Logout",
                href: "/logout",
                visible: [
                    "admin",
                    "teacher",
                    "student",
                    "parent"
                ]
            }
        ]
    }
];
function Menu() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 text-sm w-full",
        children: menuItems.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden lg:block text-gray-400 font-light my-2",
                        children: e.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    e.items.map((item)=>{
                        if (item.visible.includes(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["role"])) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "flex gap-2 focus:bg-gray-200 pl-3 items-center w-full lg:justify-start text-gray-500 py-2 lg:py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: item.icon,
                                        alt: "",
                                        width: 20,
                                        height: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Menu.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: " lg:block",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Menu.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/src/components/Menu.tsx",
                                lineNumber: 130,
                                columnNumber: 14
                            }, this);
                        }
                    })
                ]
            }, e.title, true, {
                fileName: "[project]/src/components/Menu.tsx",
                lineNumber: 124,
                columnNumber: 10
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Menu.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navber",
    ()=>Navber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
function Navber() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex text-center justify-between w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " hidden md:flex items-center justify-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-500 px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/search.png",
                        alt: " ",
                        width: 14,
                        height: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 8,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search... ",
                        className: "w-[200px] p-2 bg-transperent outline-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 9,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar.tsx",
                lineNumber: 7,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-end w-full gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "rounded-full w-7 h-7 flex  items-center justify-center cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/message.png",
                            alt: "User Profile",
                            width: 20,
                            height: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar.tsx",
                            lineNumber: 15,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "rounded-full w-7 h-7 flex  items-center justify-center cursor-pointer relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/announcement.png",
                                alt: "User Profile",
                                width: 20,
                                height: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar.tsx",
                                lineNumber: 18,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs ",
                                children: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar.tsx",
                                lineNumber: 19,
                                columnNumber: 8
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 17,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs leading-3 font-medium",
                                children: "Danti Tech"
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar.tsx",
                                lineNumber: 22,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-gray-500 text-right",
                                children: "Admin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar.tsx",
                                lineNumber: 23,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 21,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/avatar.png",
                        alt: "",
                        width: 36,
                        height: 36,
                        className: "rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 25,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navbar.tsx",
        lineNumber: 5,
        columnNumber: 2
    }, this);
}
}),
"[project]/src/components/NavbarButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
const NavButton = ({ setIsMenuOpen })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lg:hidden h-[40px] w-[40px] p-2 bg-blue-600 rounded-xl border-2 border-b-amber-300",
        onClick: ()=>setIsMenuOpen((prev)=>!prev),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: "/menu.png",
            alt: "logo",
            width: 32,
            height: 32
        }, void 0, false, {
            fileName: "[project]/src/components/NavbarButton.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/NavbarButton.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NavButton;
}),
"[project]/src/app/(dashboard)/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavbarButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavbarButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function RootLayout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close menu if user clicks outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex lg:pl-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:w-[8%] lg:w-[16%] flex flex-col lg:items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "",
                        className: "hidden lg:flex items-center justify-center lg:justify-start gap-2 pt-3 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "logo",
                                width: 32,
                                height: 32
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/layout.tsx",
                                lineNumber: 43,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden lg:block",
                                children: "LAHIBA"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/layout.tsx",
                                lineNumber: 44,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/layout.tsx",
                        lineNumber: 39,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: menuRef,
                        className: `absolute z-50  bg-white w-[200px] lg:sticky h-full transition-all duration-500 
            ${isMenuOpen ? "left-0" : "-left-[1000px]"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"], {}, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/layout.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/layout.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/layout.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[100%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center w-full py-4 px-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavbarButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                setIsMenuOpen: setIsMenuOpen
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/layout.tsx",
                                lineNumber: 60,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navber"], {}, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/layout.tsx",
                                lineNumber: 61,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/layout.tsx",
                        lineNumber: 59,
                        columnNumber: 7
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/layout.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/layout.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d1e2bbcf._.js.map