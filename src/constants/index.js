import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  threejs,
  mobile1,
  home,
  user,
  project,
  travel,
  email,
  res,
  aff,
  api,
  Flames,
  noLimits,
  cm,
  FB,
  SSS
  
} from "../index";

export const navLinks = [
  {
    id: "",
    title: "Home",
    logo: home,
  },
  {
    id: "about",
    title: "About",
    logo: user,
  },
  {
    id: "projects",
    title: "Projects",
    logo: project,
  },
  {
    id: "contact",
    title: "Contact",
    logo: mobile1,
  },
];

const services = [
  {
    title: "RESTful API Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [


  {
    name: "Smart Tourism",
    description:
      "Web application that enables users to search for tourist places, view nearby places & restaurants with distance and location based on their current location. And also provides tour packages.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Express Js",
        color: "orange-text-gradient",
      },
      {
        name: "RazorPay",
        color: "pink-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "blue-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/Harishsm20/OneTrip-Server",
  },
  {
    name: "Stuents Satisfactory Survey",
    description:
      "A web app for managing and analyzing student surveys, enabling faculty to create, filter, and visualize responses with ease. Designed for efficiency, it offers a seamless and intuitive user experience.",
    tags: [
      {
        name: "Angular17",
        color: "pink-text-gradient",
      },
      {
        name: "Node Js",
        color: "blue-text-gradient",
      },
      {
        name: "Express Js",
        color: "green-text-gradient",
      },
      {
        name: "Mongo Db",
        color: "orange-text-gradient",
      },
    ],
    image: SSS,
    source_code_link: "https://github.com/Harishsm20/Student-Satisfactory",
  },
  {
    name: "Flight-Booking",
    description:
      "A visually appealing flight booking website featuring a stunning landing page designed to captivate users at first glance. With a focus on user-friendly navigation and responsive design, this UI project provides an engaging and seamless experience across devices.",
    tags: [
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "Node Js",
        color: "orange-text-gradient",
      },
      {
        name: "Express Js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: FB,
    source_code_link: "https://github.com/Harishsm20/Flight-Booking-System",
  },
  {
    name: "Classroom-Management",
    description:
      "A web platform designed to streamline classroom management using **AdminJS**, **Express**, and **MongoDB**. Simplifying tasks like managing students, teachers, and schedules while enhancing efficiency and organization for educators.",
    tags: [
      {
        name: "Admin Js",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: cm,
    source_code_link: "https://github.com/Harishsm20/Classroom-Management-Backend",
  },
  {
    name: "No-Limits",
    description:
    "A comprehensive fitness platform designed to streamline the fitness journey for members and administrators alike. Combining cutting-edge technology with an intuitive interface, No-Limits delivers a seamless and personalized experience for every user.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: noLimits,
    source_code_link: "https://github.com/Harishsm20/No-Limits",
  },
  {
    name: "Flames",
    description:
      "A web platform designed to help users effortlessly discover their relationship compatibility through the classic FLAMES game. Bringing fun and curiosity together with ease and efficiency.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: Flames,
    source_code_link: "https://github.com/Harishsm20/FLAMES",
  },
];

export { services, technologies, experiences, testimonials, projects };
