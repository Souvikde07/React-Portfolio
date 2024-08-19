import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Welcome to my portfolio! As a dedicated full stack developer, I specialize in designing and building efficient, scalable applications. Over the past four years, I have refined my expertise in both front-end frameworks like React and Next.js, and back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB. My mission is to utilize my comprehensive skill set to develop cutting-edge solutions that propel business success and provide outstanding user experiences. Dive into my projects and discover how I can transform your vision into reality!`;
export const SKILLS = [
  {
    skillArea: "Front-End Development",
    technologies: "React",
    proficiency: "★★★★★"
  },
  {
    skillArea: "Back-End Development",
    technologies: "Node.js (with Express.js), Python",
    proficiency: "★★★★★, ★★★★☆"
  },
  {
    skillArea: "Databases",
    technologies: "MySQL, PostgreSQL, MongoDB",
    proficiency: "★★★★★, ★★★★★, ★★★★☆"
  },
  {
    skillArea: "Embedded Systems",
    technologies: "C++",
    proficiency: "★★★★★"
  }
]
export const ABOUT_TEXT = `I am a versatile Embedded Systems Developer with a strong commitment to creating efficient and user-friendly applications. 

My journey into web development was fueled by a deep curiosity about how things work, evolving into a career where I constantly seek to enhance my skills and adapt to new challenges. I excel in collaborative environments, relishing the opportunity to tackle complex problems and deliver top-notch solutions.

Beyond coding, I stay active, explore emerging technologies, engage in competitive coding, and contribute to open-source projects. Dive into my portfolio to see how my continuous learning and diverse experiences can bring innovative solutions to your projects.
`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Backend Firmware Developer",
    company: "SATO Holdings Corporation Ltd",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2020 - 2022",
    role: "Junior Software Developer",
    company: "SATO Holdings Corporation Ltd",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2019 - 2020",
    role: "Intern",
    company: "Tech Mahindra",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2018 - 2019",
    role: "Intern",
    company: "ITC InfoTech Ltd",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Tokyo, Edogawa-ku, 8-11-18,  Nakakasai, 412",
  phoneNo: "+81 07090225566 ",
  email: "souvik.de5@gmail.com",
};
