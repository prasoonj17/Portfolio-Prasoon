import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Prasoon Jain",
  title: "Hi, I'm Prasoon",
  description:
    "I'm a passionate Full Stack Web Developer with hands-on experience in building scalable applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I’ve developed HRMS systems, e-commerce platforms, and education portals with features like role-based access, real-time updates, and RESTful APIs. I'm a self-motivated and adaptable individual with a strong interest in exploring new technologies and applying them to real-world projects. I thrive in collaborative environments and consistently aim to build efficient, user-focused solutions.",
  resumeLink: "https://drive.google.com/file/d/1-lrxSip8MK7tkJbbCHXo0V-9Af2YzEIX/view?usp=sharing",
};

export const openSource = {
  githubUserName: "prasoonj17",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:prasoonj17@gmail.com",
  linkedin: "https://www.linkedin.com/in/prasoon-jain-69ab15280/",
  github: "https://github.com/prasoonj17",
  instagram: "https://www.instagram.com/prasoon.jn/",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Building full-stack web applications using MERN stack (MongoDB, Express.js, React.js, Node.js)"),
        emoji("⚡ Developing highly interactive UIs with React.js and Tailwind CSS"),
        emoji("⚡ Building responsive static & dynamic websites using Next.js"),
        emoji("⚡ Creating secure and scalable RESTful APIs using Node.js & Express.js"),
        emoji("⚡ Integrating MongoDB for robust database solutions"),
      ],
      softwareSkills: [
        { skillName: "JavaScript", iconifyTag: "logos:javascript" },
        { skillName: "React", iconifyTag: "vscode-icons:file-type-reactjs" },
        { skillName: "Next", iconifyTag: "vscode-icons:file-type-light-next" },
        { skillName: "AWS", iconifyTag: "logos:aws" },
        { skillName: "GitHub", iconifyTag: "akar-icons:github-fill" },
        { skillName: "MongoDB", iconifyTag: "devicon:mongodb" },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  { Stack: "Frontend (React, Next, Tailwind CSS)", progressPercentage: "90" },
  { Stack: "Backend (Node.js, Express.js)", progressPercentage: "85" },
  { Stack: "Database (MongoDB, Firebase)", progressPercentage: "80" },
  { Stack: "Programming (JavaScript, C++, SQL)", progressPercentage: "95" },
  { Stack: "Version Control (Git & GitHub)", progressPercentage: "90" },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Birla institute of technology,Mesra",
    subHeader: "Masters of Computer Application",
    duration: "July 2023 - April 2025",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Developer",
    company: "Placement Plaza",
    companyLogo: "/img/icons/common/placementplaza.png",
    date: "Jan 2025 – Present",
    desc: "Designed and developed a modern, responsive website to enhance brand presence and deliver a consistent user experience across all devices. Built a custom HR management solution to streamline employee data handling, leave management, and payroll processing. Integrated secure and scalable RESTful APIs to support features like job listings, user applications, real-time notifications, and admin functionalities.",
  },
];


export const projects: ProjectType[] = [
  {
    name: "Hanlys",
    desc: "An eCommerce website for premium peanut butter products. Built with the MERN stack, it provides a seamless shopping experience with a modern UI and efficient backend integration.",
    link: "https://hanlys.in/",
  },
  {
    name: "Rapid Digital Growth",
    desc: "A professional business website built with React to showcase digital marketing services, portfolios, and client success stories. Designed for performance and easy navigation.",
    link: "https://rapiddigitalgrowth.com/",
  },
  {
    name: "Marketing Samadhan",
    desc: "An eCommerce platform offering marketing tools and services. Developed using the MERN stack with a focus on scalability, responsiveness, and user-friendly features.",
    link: "https://marketingsamadhan.com/",
  },
  {
    name: "Placement Plaza",
    desc: "An informative web portal that connects students and job seekers with placement-related resources, updates, and training opportunities. Built for accessibility and content clarity.",
    link: "https://placementplaza.com/",
  },
  {
    name: "Viaje De Corazon",
    desc: "A travel and tour guide website built in React, offering detailed destination insights, travel tips, and service booking features for Spanish-speaking travelers.",
    link: "https://viajedecorazon.com/",
  },
];


export const feedbacks: FeedbackType[] = [
  {
    name: "Viaje De Corazon",
    role: "Travel Platform Project",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Prasoon is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Hanlys",
    role: "E-Commerce Platform Project",
    feedback:
      "Prasoon has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Prasoon is a pleasure to work with, and I highly recommend him for any Full Stack Django or React development projects.",
  },
  {
    name: "Placement Plaza",
    role: "Software Development Project",
    feedback:
      "Very skilled at what he does and has an in-depth knowledge of Django. He's always ready to handle any challenges thrown at him. He's been a valuable member of my team and I look forward to working with him again.",
  },
];


export const seoData: SEODataType = {
  title: "Prasoon Jain | Full Stack Developer Portfolio",
  description: greetings.description,
  author: "Prasoon Jain",
  image: "https://drive.google.com/file/d/1aRWBQntL3hn52gK8216nTfxz5WJ7kKsh/view?usp=sharing",
  url: "",
  keywords: [
    "Prasoon Jain",
    "Full Stack Developer",
    "MERN Developer",
    "Portfolio",
    "React",
    "Node.js",
    "Django",
    "Projects",
    "GitHub",
  ],
};


