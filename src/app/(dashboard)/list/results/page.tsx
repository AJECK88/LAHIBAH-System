import Image from 'next/image';
import Pagination from '@/components/pagination'
import Table from '@/components/table'
import Link from 'next/link';
 import TablesearchBar from '@/components/TablesearchBar'
import { examsData, resultsData,} from '@/lib/data';
import React from 'react';
import { R } from 'node_modules/@clerk/elements/dist/index-BT_Jj2MC.mjs';
import SeedfileInput from '@/components/Forms/SeedfileInput';
   type results = {
        id: string;
        subject: string;
        class: string;
        teacher: string;
        score?: number;
        date: string;
       
   }
    const results = [
  {Levels:100, 
 deperments: [ 
 { depermentName: "Computer Science",
    results:[{
    matricule: "CSN240201",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
       englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },
  { 
    matricule: "CSN240202",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
       englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },
  { 
    matricule: "CSN240284",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: "", exam: "", total: "", grade: "" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
    
  },  { 
    matricule: "CSN240234",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  }, 
 ]} , { depermentName: "Information Technology",
    results:[{
    matricule: "CSN240294",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  },  { 
    matricule: "CSN240228",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240206",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240207",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 12, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240200",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 10, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240208",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 18, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240209",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 5, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
    Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  }]},
  { depermentName: "Business Administration",
    results:[{
    matricule: "CSN240294",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  },  { 
    matricule: "CSN240228",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240206",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240207",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 12, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240200",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 10, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240208",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 18, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240209",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 5, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
    Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  }]},{ depermentName:"Marketing",
    results:[{
    matricule: "CSN240294",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  },  { 
    matricule: "CSN240228",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240206",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240207",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 12, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240200",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 10, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240208",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 18, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240209",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 5, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
    Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  }]}
    ]},
     {Levels:200, 
 deperments: [ 
 { depermentName: "Computer Science",
    results:[{
    matricule: "CSN240201",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
       englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },
  { 
    matricule: "CSN240202",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
       englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },
  { 
    matricule: "CSN240284",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: "", exam: "", total: "", grade: "" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
    
  },  { 
    matricule: "CSN240234",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  }, 
 ]} , { depermentName: "Information Technology",
    results:[{
    matricule: "CSN240294",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  },  { 
    matricule: "CSN240228",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240206",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240207",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 12, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240200",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 10, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240208",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 18, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240209",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 5, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
    Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  }]},
  { depermentName: "Business Administration",
    results:[{
    matricule: "CSN240294",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  },  { 
    matricule: "CSN240228",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240206",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240207",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 12, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240200",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 10, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240208",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 18, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240209",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 5, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
    Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  }]},{ depermentName:"Marketing",
    results:[{
    matricule: "CSN240294",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  },  { 
    matricule: "CSN240228",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240206",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240207",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 12, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240200",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 10, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240208",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 18, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240209",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 5, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
    Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  }]}
    ]},
     {Levels:200, 
 deperments: [ 
 { depermentName: "Computer Science",
    results:[{
    matricule: "CSN240201",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
       englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },
  { 
    matricule: "CSN240202",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
       englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },
  { 
    matricule: "CSN240284",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: "", exam: "", total: "", grade: "" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
    
  },  { 
    matricule: "CSN240234",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  }, 
 ]} , { depermentName: "Information Technology",
    results:[{
    matricule: "CSN240294",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  },  { 
    matricule: "CSN240228",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240206",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240207",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 12, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240200",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 10, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240208",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 18, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240209",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 5, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
    Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  }]},
  { depermentName: "Business Administration",
    results:[{
    matricule: "CSN240294",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  },  { 
    matricule: "CSN240228",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240206",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240207",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 12, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240200",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 10, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240208",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 18, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240209",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 5, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
    Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  }]},{ depermentName:"Marketing",
    results:[{
    matricule: "CSN240294",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  },  { 
    matricule: "CSN240228",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240206",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240207",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 12, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240200",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 10, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240208",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 18, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240209",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 5, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
    Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  }]}
    ]},
    {Levels:400, 
 deperments: [ 
 { depermentName: "Computer Science",
    results:[{
    matricule: "CSN240201",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
       englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },
  { 
    matricule: "CSN240202",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
       englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },
  { 
    matricule: "CSN240284",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: "", exam: "", total: "", grade: "" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
    
  },  { 
    matricule: "CSN240234",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  }, 
 ]} , { depermentName: "Information Technology",
    results:[{
    matricule: "CSN240294",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  },  { 
    matricule: "CSN240228",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240206",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240207",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 12, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240200",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 10, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240208",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 18, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240209",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 5, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
    Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  }]},
  { depermentName: "Business Administration",
    results:[{
    matricule: "CSN240294",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  },  { 
    matricule: "CSN240228",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240206",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240207",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 12, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240200",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 10, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240208",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 18, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240209",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 5, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
    Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  }]},{ depermentName:"Marketing",
    results:[{
    matricule: "CSN240294",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" }, 
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  } 
  },  { 
    matricule: "CSN240228",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240206",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240207",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 12, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240200",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 10, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240208",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 18, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
      Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  },  { 
    matricule: "CSN240209",
    english: { ca: 29, exam: 34, total: 63, grade: "B" },
    computer: { ca: 5, exam: 39, total: 74, grade: "B+" },
    micro: { ca: 28, exam: 30, total: 58, grade: "C+" },
    lab: { ca: 38, exam: 66, total: 66, grade: "B" },
     englishs: { ca: 29, exam: 34, total: 63, grade: "B" },
    computers: { ca: 35, exam: 39, total: 74, grade: "B+" },
    micros: { ca: 28, exam: 30, total: 58, grade: "C+" },
    labs: { ca: 38, exam: 66, total: 66, grade: "B" },  
    Maths: { ca: 38, exam: 66, total: 66, grade: "B" },
    ICT : { ca: 38, exam: 66, total: 66, grade: "B"  }
  }]}
    ]},
     
     
];


const  resultsListpage = () => {

     
    return (
        /* Student Page */
        /* Right hand side */
        <div className=" flex-1 bg-white p-4 rounded-md m-4 mt-0 h-full " >
            {/* || top section */}
            <div className="flex flex-col md:flex-row gap-4  items-center md:w-auto justify-between ">
                <h1 className='hidden md:block  text-lg font-semibold'>Results</h1>
                <div className=''><TablesearchBar/>
                </div>
                <SeedfileInput type="Result" />
                <div className="flex items-center gap-4 self-end">
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/filter.png" alt="Add" width={14} height={14} /></button>
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/sort.png" alt="Add" width={14} height={14} /></button>
                   {/*   <FormModel table="Result" type="Create" /> */}
                     </div>
            </div>
            {/* || List  */}
            <div className="">
                   <div className="overflow-x-auto p-4">
      
      {results.map((r) =>
  r.deperments.map((dept) => (
    <React.Fragment key={`${r.Levels}-${dept.depermentName}`}>
      
      <h1 className="text-md font-semibold my-4">
        Level {r.Levels}
      </h1>

      <table className="border-collapse border w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <td
              colSpan={2 + 10 * 4}
              className="p-2 font-semibold bg-white"
            >
              {dept.depermentName}
            </td>
          </tr>

          <tr>
            <th rowSpan={2} className="border p-2">No</th>
            <th rowSpan={2} className="border p-2">Mat No</th>

            {[
              "English","Computer","Micro","Lab",
              "Englishs","Computers","Micros","Labs",
              "Maths","ICT"
            ].map((c) => (
              <th key={c} colSpan={4} className="border p-2">
                {c}
              </th>
            ))}
          </tr>

          <tr>
            {[...Array(10)].flatMap((_, i) =>
              ["CA /40", "Exam /60", "Total /100", "Grade"].map((h) => (
                <th key={`${i}-${h}`} className="border p-1">
                  {h}
                </th>
              ))
            )}
          </tr>
        </thead>

        <tbody>
          {dept.results.map((student, index) => (
            <tr key={student.matricule}>
              <td className="border p-1 font-semibold">
                {index + 1}
              </td>
              <td className="border p-1">
                {student.matricule}
              </td>

              {[
                student.english, student.computer, student.micro, student.lab,
                student.englishs, student.computers, student.micros, student.labs,
                student.Maths, student.ICT
              ].map((c, i) => (
                <React.Fragment key={`${student.matricule}-${i}`}>
                  <td className={`border p-1 ${Number(c.ca) < 20 && c.ca !== "" ? "text-red-500" : ""}`}>
                    {c.ca || "#NAN"}
                  </td>
                  <td className={`border p-1 ${Number(c.exam) < 30 && c.exam !== "" ? "text-red-500" : ""}`}>
                    {c.exam || "#NAN"}
                  </td>
                  <td className={`border p-1 ${Number(c.total) < 50 && c.total !== "" ? "text-red-500" : ""}`}>
                    {c.total || "#NAN"}
                  </td>
                  <td className={`border p-1 ${!c.grade ? "text-red-500" : ""}`}>
                    {c.grade || "#NAN"}
                  </td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  ))
)}

    

     
    </div>
            </div>
            {/* || Pagination */}
            <div className="flex justify-end mt-4">
            </div>
        </div>
    )
}
export default resultsListpage;