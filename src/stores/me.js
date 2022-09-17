import { ref } from "vue";
import { defineStore } from "pinia";

export const useMeStore = defineStore("me", () => {
  const name = ref("Ashton Fei");
  const title = ref("Google Apps Script Programmer");
  const tags = ref([
    { name: "engineer", color: "primary" },
    { name: "freelancer", color: "success" },
    { name: "programmer", color: "blue" },
    { name: "catlover", color: "pink" },
  ]);

  const services = ref([
    {
      text: "Sheets",
      icon: "mdi-file-table",
      desc: "Formula, Scripting, Dashboard, Data Analysis, Business Workflow, Web App.",
      color: "success",
    },
    {
      text: "Forms",
      icon: "mdi-form-select",
      desc: "Mail Merge, Invoice Creation, Business Process Integration.",
      color: "purple",
    },
    {
      text: "Slides",
      icon: "mdi-presentation",
      desc: "Report automation with image and text placeholders in Google Sheet. Export as PDFs, Images.",
      color: "warning",
    },
    {
      text: "Docs",
      icon: "mdi-file-word",
      desc: "Report automation with image and text placeholders in Google Sheet. Export as PDFs.",
      color: "blue",
    },
    {
      text: "Mails",
      icon: "mdi-email",
      desc: "Gmail automation with Google Sheets, Forms, Calendars, etc.",
      color: "red",
    },
    {
      text: "API Integration",
      icon: "mdi-api",
      desc: "Integrate the 3rd part APIs with Google Workspace Apps, typically with Google Sheets to make CRUD transactions via the API.",
      color: "error",
    },
    {
      text: "Web App",
      icon: "mdi-web",
      desc: "Vue, Vuetify for the front end, and with Google Sheets, Google Drive, and Apps Script for the backend.",
      color: "primary",
    },
  ]);

  const jobs = ref([
    {
      text: "Upwork",
      icon: "mdi-domain",
      desc: "Freelancer",
      url: "https://www.upwork.com",
      color: "green",
      year: {
        start: "2022",
        end: "Now",
      },
    },
    {
      text: "Lexmark",
      icon: "mdi-domain",
      desc: "Product Engineer",
      url: "https://www.lexmark.com",
      color: "green",
      year: {
        start: "2016",
        end: "2022",
      },
    },
    {
      text: "ModusLink",
      icon: "mdi-domain",
      desc: "Product Engineer",
      url: "https://www.moduslink.com",
      color: "purple",
      year: {
        start: "2016",
        end: "2011",
      },
    },
    {
      text: "Foxconn",
      icon: "mdi-domain",
      desc: "Process Engineer",
      url: "https://www.foxconn.com",
      color: "blue",
      year: {
        start: "2009",
        end: "2011",
      },
    },
  ]);

  const stacks = ref([
    { name: "Google Apps Script", color: "blue", skill: 90 },
    { name: "JavaScript", color: "warning", skill: 90 },
    { name: "Python", color: "warning", skill: 80 },
    { name: "Vue", color: "green", skill: 80 },
    { name: "Vuetify", color: "blue", skill: 80 },
    { name: "VBA", color: "green", skill: 80 },
    { name: "Office Script", color: "green", skill: 70 },
  ]);

  const playlists = ref([
    {
      link: "https://www.youtube.com/embed/EwgH-7BnOZ0?list=PLQhwjnEjYj8Bf_EZDrrcmkB9vcB9Sk3x0",
      name: "Google Apps Script",
    },
    {
      link: "https://www.youtube.com/embed/VSDM3jV3_EU?list=PLQhwjnEjYj8ClqO6NG2fFka53xVOzIN_b",
      name: "Live Codeing",
    },
    {
      link: "https://www.youtube.com/embed/KbcjNLNgMBU?list=PLQhwjnEjYj8AsMhqsm4rDrQq_y-m0YcJO",
      name: "Project Preview",
    },
    {
      link: "https://www.youtube.com/embed/HIestEEJrrM?list=PLQhwjnEjYj8A4SGBsOGQKtlv2U-kZvkkV",
      name: "Office Scripts",
    },
  ]);

  const quickLinks = ref([
    {
      name: "Upwork Profile",
      url: "https://www.upwork.com/freelancers/~01130da68ebb7fac1b",
      color: "success",
      icon: "mdi-account",
    },
    {
      name: "Direct Contract",
      url: "https://www.upwork.com/workwith/ashtonfei",
      color: "success",
      icon: "mdi-handshake-outline",
    },
    {
      name: "Code Support",
      url: "/support",
      color: "primary",
      icon: "mdi-code-tags",
    },
    {
      name: "Email Me",
      url: "mailto:yunjia.fei@gmail.com?subject=automate the boring for ...",
      color: "warning",
      icon: "mdi-email",
    },
    {
      name: "Buy Me a Coffee",
      url: "https://www.paypal.me/ashtonfei/",
      color: "warning",
      icon: "mdi-coffee",
    },
  ]);

  const cats = ref([
    {
      url: "https://user-images.githubusercontent.com/16481229/190663668-c439c296-5051-432c-869b-9e29c57d1730.jpg",
      alt: "cat1",
    },
    {
      url: "https://user-images.githubusercontent.com/16481229/190663683-5f084d9c-1ac5-4173-8fb9-b233f8bbe011.jpg",
      alt: "cat2",
    },
    {
      url: "https://user-images.githubusercontent.com/16481229/190663694-748515f0-6215-4f6b-bc9f-699e005f8d19.jpg",
      alt: "cat3",
    },
    {
      url: "https://user-images.githubusercontent.com/16481229/190663712-29107fb9-ad6e-42ec-811c-38466ff15744.jpg",
      alt: "cat4",
    },
    {
      url: "https://user-images.githubusercontent.com/16481229/190663737-1addda45-ca8b-4df2-ac87-61bafedf2ac3.jpg",
      alt: "cat5",
    },
    {
      url: "https://user-images.githubusercontent.com/16481229/190663744-7fe701ab-3464-4f0e-8d5f-6200ae78e17a.jpg",
      alt: "cat6",
    },
    {
      url: "https://user-images.githubusercontent.com/16481229/190663750-14568394-9dc5-4d83-aade-1078023794ce.jpg",
      alt: "cat7",
    },
    {
      url: "https://user-images.githubusercontent.com/16481229/190663755-7a0feaa1-44c8-44f6-9815-47a9bb261d98.jpg",
      alt: "cat8",
    },
    {
      url: "https://user-images.githubusercontent.com/16481229/190663762-e5c39ab3-eb9d-47f7-a37f-97d60d3c4b02.jpg",
      alt: "cat9",
    },
    {
      url: "https://user-images.githubusercontent.com/16481229/190663772-e7efbe9d-56f8-4a1d-9354-aef90607174f.jpg",
      alt: "cat10",
    },
  ]);

  const certificates = ref([
    {
      image:
        "https://user-images.githubusercontent.com/16481229/190842903-66f4d455-8a82-4462-936c-5a9b95c65f11.png",
      url: "https://www.freecodecamp.org/certification/ashtonfei/javascript-algorithms-and-data-structures",
      name: "JavaScript Algorithms and Data Structures",
    },
    {
      image:
        "https://user-images.githubusercontent.com/16481229/190842963-119217f9-0c31-4904-b8fc-8acc7435a97e.png",
      url: "https://www.freecodecamp.org/certification/ashtonfei/front-end-development-libraries",
      name: "Front End Development Libraries",
    },
    {
      image:
        "https://user-images.githubusercontent.com/16481229/190843009-80ebab83-c48a-473a-9300-1ca0ac1715ff.png",
      url: "https://www.freecodecamp.org/certification/ashtonfei/back-end-development-and-apis",
      name: "Back End Development and APIs",
    },
    {
      image:
        "https://user-images.githubusercontent.com/16481229/190843112-05b46294-4cc3-4f78-bee1-74f2d830d0d4.png",
      url: "https://www.freecodecamp.org/certification/ashtonfei/relational-database-v8",
      name: "Relational Database",
    },
    {
      image:
        "https://user-images.githubusercontent.com/16481229/190843066-debf2103-66ff-4aec-8c5f-1d542d8ba7fe.png",
      url: "https://www.freecodecamp.org/certification/ashtonfei/data-analysis-with-python-v7",
      name: "Data Analysis with Python",
    },
  ]);

  return {
    name,
    title,
    tags,
    services,
    jobs,
    stacks,
    playlists,
    quickLinks,
    cats,
    certificates,
  };
});
