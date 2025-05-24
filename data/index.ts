import {Project} from "@/types";

export const workExperience = [
  {
    company: "ELINEXT GROUP",
    position: "Software Engineer",
    period: "03/2016 – 03/2017",
  },
  {
    company: "MANTU GROUP",
    position: "Frontend Engineer",
    period: "03/2017 – 03/2019",
  },
  {
    company: "NFQ ASIA",
    position: "Frontend Engineer",
    period: "03/2019 – 03/2020",
  },
  {
    company: "Swiss Market Group",
    position: "Senior Frontend Engineer",
    period: "04/2020 – 01/2022",
  },
  {
    company: "GFT Technology Group",
    position: "Senior Frontend Engineer",
    period: "12/2021 – 05/2023",
  },
  {
    company: "SINBYTE Digital Marketing",
    position: "Web Developer and Digital Marketer",
    period: "09/2023 – present",
  }
];

export const skills = [
  "HTML", "CSS", "LESS, SASS, SCSS", "Bootstrap", "Ant", "Responsive design", "UI Development",
  "WordPress", "SEO", "GitHub", "Version control systems", "Javascript", "ECMAScript",
  "Typescript", "ReactJs", "Redux", "GraphQL", "Node.js", "Next.js", "Tailwind CSS", "REST", "MVC", "Unit testing",
  "CMS (Content Management Systems)", "jQuery", "Git", "AWS", "Jira", "Scrum", "Agile",
  "Debugging", "AJAX", "Windows Server (Active Directory, GPO, client join domain)",
  "Teamwork", "Problem solving", "Critical thinking"
];


export const projects: { [key: string]: Project} = {
  'immoscout24': {
    id: 1,
    type: "Fulltime Frontend",
    title: "Real estate platform in Switzerland to buy and to rent",
    img: "/immo_banner.png",
    route: "/projects/immoscout24",
    link: "https://www.immoscout24.ch/en",
    desc: "Immoscout24 is a full-stack real estate platform that enables users to buy and rent properties across Switzerland. The application is built using modern technologies including ReactJS, Redux, TypeScript, JavaScript, NodeJS, ExpressJS, and .NET Core (C#). I collaborated as part of a distributed team of over 40 professionals—including developers, designers, QA engineers, product owners, and managers—spanning multiple European countries. My primary responsibility was to implement and enhance key UI components using React and TypeScript, ensuring a consistent, scalable, and responsive user experience across the platform.",
    stacks: ["ReactJs", "Redux", "Styled-Components", "Design System", "Typescript", "Javascript"],
    imgs: ["/immo_1.png", "/immo_2.png", "/immo_3.png", "/immo_4.png"],
    purposeAndGoal: "This project included multiple modules and was developed by a large international team, divided into smaller squads. Each team was responsible for a specific domain or feature, such as the property listing page, search filters, or user authentication. My team focused on implementing and refining the UI for key customer-facing components. Thanks to the CI/CD pipeline, strict code conventions, and regular code reviews, the team was able to maintain consistent quality while scaling the app efficiently.",
    explanation: "The application’s frontend was built using ReactJS and TypeScript to ensure component reusability, strong typing, and better developer experience. Redux was used for managing complex state interactions across views, while Styled-Components handled CSS-in-JS styling. On the backend, the application leveraged NodeJS and ExpressJS for APIs, and .NET Core (C#) for several microservices. I was mainly involved in implementing UI features, translating Figma designs into accessible, responsive React components, while enforcing consistency with the shared design system and TypeScript interfaces.",
    problems: "One of the main challenges was maintaining consistency across different teams working on the same design system. I often had to refactor shared components to ensure they worked correctly in different contexts. Another challenge was handling complex property search filters efficiently, which involved syncing UI states with Redux without performance issues.",
    lessons: "This project taught me the importance of team collaboration in large-scale systems. I learned how to align with other developers through code reviews, communicate with designers to clarify edge cases, and follow best practices for Git workflow in a multi-team environment. It also reinforced the importance of performance optimization when working on interactive UI components used by thousands of users.",
    stackImg: "/immo_stack.png"
  },
  'prettcf': {
    id: 2,
    type: "Side Project",
    title: "The platform to practice the French exam: TCF Canada",
    img: "/prettcf_banner.png",
    route: "/projects/prettcf",
    link: "https://prettcf.com/",
    desc: "Prettcf.com is an online platform built with WordPress for users to practice the TCF Canada French exam. I independently designed and developed the site with a focus on user experience and custom functionality through both WordPress plugins and custom code.",
    stacks: ["WordPress", "JavaScript", "PHP", "CSS", "Elementor", "Tutor LMS"],
    imgs: ["/prettcf_1.png", "/prettcf_2.png", "/prettcf_3.png", "/prettcf_4.png"],
    purposeAndGoal: "The goal of this project was to create a practical platform to help French learners prepare for the TCF Canada exam. I wanted to provide a friendly, accessible interface where users could experience real test formats and track their progress over time.",
    explanation: "I used WordPress as the main CMS and extensively configured plugins like Tutor LMS to build a complete learning system. I also applied custom CSS and PHP to tweak layouts, enhance responsiveness, and add interactivity. The design was fully customized with Elementor and hand-crafted assets including banners and logos to match the platform’s identity.",
    problems: "Balancing plugin flexibility with custom requirements was challenging. Some design features and user interactions were not achievable through plugins alone, so I had to write custom JavaScript and PHP to meet those needs. Ensuring responsiveness and consistency across devices also required deep inspection and testing.",
    lessons: "This project improved my understanding of WordPress as a development platform. I learned how to creatively extend its functionalities while maintaining performance. It also strengthened my frontend skills through real-world practice of CSS styling and visual design, and gave me confidence in managing full-stack responsibilities, even with limited backend needs.",
    stackImg: "/prettcf_stack.png"
  },
}

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];