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

const createApplicationProject = ({
  id,
  slug,
  type,
  title,
  img,
  link,
  domain,
  outcome,
  stacks,
}: {
  id: number;
  slug: string;
  type: string;
  title: string;
  img: string;
  link: string;
  domain: string;
  outcome: string;
  stacks: string[];
}): Project => ({
  id,
  type,
  title,
  img,
  route: `/projects/${slug}`,
  link,
  desc: {
    en: `${title} is a ${domain} application concept focused on clean user flows, responsive dashboards, and practical business workflows. I created it as a portfolio-ready application case study to demonstrate how I structure complex frontend interfaces with reusable components and clear state management.`,
    fr: `${title} est un concept d'application ${domain} axé sur des parcours utilisateurs clairs, des tableaux de bord responsives et des workflows métier pratiques. Je l'ai créé comme étude de cas portfolio pour montrer comment je structure des interfaces frontend complexes avec des composants réutilisables et une gestion d'état claire.`,
    vi: `${title} là một concept ứng dụng ${domain}, tập trung vào luồng người dùng rõ ràng, dashboard responsive và các workflow thực tế cho business. Tôi tạo dự án này như một case study portfolio để thể hiện cách tôi tổ chức frontend phức tạp bằng component tái sử dụng và state management rõ ràng.`
  },
  stacks,
  imgs: [img, img, img, img],
  purposeAndGoal: {
    en: `The goal was to design a polished application experience that helps users complete key tasks faster while keeping dense information easy to scan. The project highlights ${outcome}.`,
    fr: `L'objectif était de concevoir une expérience applicative soignée qui aide les utilisateurs à accomplir leurs tâches plus rapidement tout en rendant les informations denses faciles à lire. Le projet met en avant ${outcome}.`,
    vi: `Mục tiêu là thiết kế một trải nghiệm ứng dụng chỉn chu, giúp người dùng hoàn thành tác vụ nhanh hơn trong khi vẫn dễ đọc các thông tin dày đặc. Dự án nhấn mạnh ${outcome}.`
  },
  explanation: {
    en: `I structured the UI around modular React components, typed data models, and responsive layouts. The interface balances overview screens, detail panels, filters, and analytics so the product feels practical for daily use.`,
    fr: `J'ai structuré l'interface avec des composants React modulaires, des modèles de données typés et des layouts responsives. L'interface équilibre les vues d'ensemble, les panneaux de détail, les filtres et l'analytique pour donner au produit un usage quotidien fluide.`,
    vi: `Tôi tổ chức UI bằng các React component có tính module, data model có type rõ ràng và layout responsive. Giao diện cân bằng giữa màn hình tổng quan, panel chi tiết, bộ lọc và analytics để sản phẩm có cảm giác thực dụng khi dùng hằng ngày.`
  },
  problems: {
    en: `The main challenge was presenting many data points without overwhelming the user. I solved it by grouping information by priority, keeping actions close to context, and making important states visible at a glance.`,
    fr: `Le principal défi était de présenter beaucoup de données sans surcharger l'utilisateur. Je l'ai résolu en regroupant les informations par priorité, en gardant les actions proches du contexte et en rendant les états importants visibles rapidement.`,
    vi: `Thách thức chính là trình bày nhiều dữ liệu mà không làm người dùng bị quá tải. Tôi xử lý bằng cách nhóm thông tin theo độ ưu tiên, đặt action gần đúng ngữ cảnh và làm các trạng thái quan trọng dễ nhận ra ngay.`
  },
  lessons: {
    en: `This project strengthened my approach to building dashboard-heavy applications: start from user decisions, define reusable UI patterns, and keep performance in mind as screens become more data-rich.`,
    fr: `Ce projet a renforcé mon approche pour construire des applications riches en tableaux de bord : partir des décisions utilisateur, définir des patterns UI réutilisables et garder la performance en tête lorsque les écrans deviennent plus chargés en données.`,
    vi: `Dự án này giúp tôi củng cố cách xây dựng các ứng dụng nhiều dashboard: bắt đầu từ quyết định của người dùng, định nghĩa pattern UI tái sử dụng và luôn chú ý hiệu suất khi màn hình ngày càng nhiều dữ liệu.`
  },
  stackImg: img
});


export const projects: { [key: string]: Project} = {
  'immoscout24': {
    id: 1,
    type: "Fulltime Frontend",
    title: "Real estate platform in Switzerland to buy and to rent",
    img: "/immo_imgs/immo_banner.webp",
    route: "/projects/immoscout24",
    link: "https://www.immoscout24.ch/en",
    desc: {
      en: "Immoscout24 is a full-stack real estate platform that enables users to buy and rent properties across Switzerland. The application is built using modern technologies including ReactJS, Redux, TypeScript, JavaScript, NodeJS, ExpressJS, and .NET Core (C#). I collaborated as part of a distributed team of over 40 professionals—including developers, designers, QA engineers, product owners, and managers—spanning multiple European countries. My primary responsibility was to implement and enhance key UI components using React and TypeScript, ensuring a consistent, scalable, and responsive user experience across the platform.",
      fr: "Immoscout24 est une plateforme immobilière full-stack permettant aux utilisateurs d'acheter et de louer des biens dans toute la Suisse. L'application est construite avec des technologies modernes incluant ReactJS, Redux, TypeScript, JavaScript, NodeJS, ExpressJS et .NET Core (C#). J'ai collaboré au sein d'une équipe distribuée de plus de 40 professionnels—incluant développeurs, designers, ingénieurs QA, product owners et managers—répartis dans plusieurs pays européens. Ma responsabilité principale était d'implémenter et d'améliorer les composants UI clés en utilisant React et TypeScript, assurant une expérience utilisateur cohérente, évolutive et réactive sur l'ensemble de la plateforme.",
      vi: "Immoscout24 là một nền tảng bất động sản full-stack cho phép người dùng mua và thuê bất động sản trên khắp Thụy Sĩ. Ứng dụng được xây dựng bằng các công nghệ hiện đại bao gồm ReactJS, Redux, TypeScript, JavaScript, NodeJS, ExpressJS và .NET Core (C#). Tôi đã cộng tác trong một nhóm phân tán gồm hơn 40 chuyên gia—bao gồm lập trình viên, nhà thiết kế, kỹ sư QA, product owner và quản lý—trải rộng nhiều quốc gia Châu Âu. Trách nhiệm chính của tôi là triển khai và nâng cao các thành phần UI quan trọng bằng React và TypeScript, đảm bảo trải nghiệm người dùng nhất quán, có thể mở rộng và phản hồi nhanh trên toàn bộ nền tảng."
    },
    stacks: ["ReactJs", "Redux", "Styled-Components", "Design System", "Typescript", "Javascript"],
    imgs: ["/immo_imgs/immo_1.webp", "/immo_imgs/immo_2.webp", "/immo_imgs/immo_3.webp", "/immo_imgs/immo_4.webp"],
    purposeAndGoal: {
      en: "This project included multiple modules and was developed by a large international team, divided into smaller squads. Each team was responsible for a specific domain or feature, such as the property listing page, search filters, or user authentication. My team focused on implementing and refining the UI for key customer-facing components. Thanks to the CI/CD pipeline, strict code conventions, and regular code reviews, the team was able to maintain consistent quality while scaling the app efficiently.",
      fr: "Ce projet comprenait plusieurs modules et a été développé par une grande équipe internationale, divisée en petites unités. Chaque équipe était responsable d'un domaine ou d'une fonctionnalité spécifique, comme la page de liste des propriétés, les filtres de recherche ou l'authentification des utilisateurs. Mon équipe s'est concentrée sur l'implémentation et l'amélioration de l'UI pour les composants face au client. Grâce au pipeline CI/CD, aux conventions de code strictes et aux revues de code régulières, l'équipe a pu maintenir une qualité constante tout en développant l'application efficacement.",
      vi: "Dự án này bao gồm nhiều module và được phát triển bởi một đội ngũ quốc tế lớn, chia thành các nhóm nhỏ hơn. Mỗi nhóm chịu trách nhiệm cho một lĩnh vực hoặc tính năng cụ thể, như trang danh sách bất động sản, bộ lọc tìm kiếm, hoặc xác thực người dùng. Nhóm của tôi tập trung vào việc triển khai và hoàn thiện UI cho các thành phần chính đối diện với khách hàng. Nhờ quy trình CI/CD, quy ước code nghiêm ngặt, và việc review code thường xuyên, đội ngũ đã có thể duy trì chất lượng ổn định trong khi mở rộng ứng dụng một cách hiệu quả."
    },
    explanation: {
      en: "The application's frontend was built using ReactJS and TypeScript to ensure component reusability, strong typing, and better developer experience. Redux was used for managing complex state interactions across views, while Styled-Components handled CSS-in-JS styling. On the backend, the application leveraged NodeJS and ExpressJS for APIs, and .NET Core (C#) for several microservices. I was mainly involved in implementing UI features, translating Figma designs into accessible, responsive React components, while enforcing consistency with the shared design system and TypeScript interfaces.",
      fr: "Le frontend de l'application a été construit avec ReactJS et TypeScript pour assurer la réutilisation des composants, un typage fort et une meilleure expérience développeur. Redux a été utilisé pour gérer les interactions d'état complexes entre les vues, tandis que Styled-Components gérait le style CSS-in-JS. Côté backend, l'application utilisait NodeJS et ExpressJS pour les API, et .NET Core (C#) pour plusieurs microservices. J'étais principalement impliqué dans l'implémentation des fonctionnalités UI, la traduction des designs Figma en composants React accessibles et responsifs, tout en assurant la cohérence avec le système de design partagé et les interfaces TypeScript.",
      vi: "Frontend của ứng dụng được xây dựng bằng ReactJS và TypeScript để đảm bảo khả năng tái sử dụng component, kiểu dữ liệu chặt chẽ và trải nghiệm phát triển tốt hơn. Redux được sử dụng để quản lý các tương tác state phức tạp giữa các view, trong khi Styled-Components xử lý CSS-in-JS styling. Ở backend, ứng dụng sử dụng NodeJS và ExpressJS cho API, và .NET Core (C#) cho một số microservice. Tôi chủ yếu tham gia vào việc triển khai các tính năng UI, chuyển đổi thiết kế Figma thành các component React có khả năng truy cập và responsive, đồng thời đảm bảo tính nhất quán với hệ thống thiết kế chung và các interface TypeScript."
    },

    problems: {
      en: "One of the main challenges was maintaining consistency across different teams working on the same design system. I often had to refactor shared components to ensure they worked correctly in different contexts. Another challenge was handling complex property search filters efficiently, which involved syncing UI states with Redux without performance issues.",
      fr: "L'un des principaux défis était de maintenir la cohérence entre les différentes équipes travaillant sur le même système de design. J'ai souvent dû refactoriser des composants partagés pour assurer leur bon fonctionnement dans différents contextes. Un autre défi était de gérer efficacement les filtres de recherche de propriétés complexes, ce qui impliquait de synchroniser les états UI avec Redux sans problèmes de performance.",
      vi: "Một trong những thách thức chính là duy trì tính nhất quán giữa các nhóm khác nhau làm việc trên cùng một hệ thống thiết kế. Tôi thường phải refactor các component dùng chung để đảm bảo chúng hoạt động chính xác trong các ngữ cảnh khác nhau. Một thách thức khác là xử lý hiệu quả các bộ lọc tìm kiếm bất động sản phức tạp, liên quan đến việc đồng bộ hóa trạng thái UI với Redux mà không gặp vấn đề về hiệu suất."
    },

    lessons: {
      en: "This project taught me the importance of team collaboration in large-scale systems. I learned how to align with other developers through code reviews, communicate with designers to clarify edge cases, and follow best practices for Git workflow in a multi-team environment. It also reinforced the importance of performance optimization when working on interactive UI components used by thousands of users.",
      fr: "Ce projet m'a appris l'importance de la collaboration d'équipe dans les systèmes à grande échelle. J'ai appris à m'aligner avec d'autres développeurs à travers les revues de code, à communiquer avec les designers pour clarifier les cas limites, et à suivre les meilleures pratiques pour le workflow Git dans un environnement multi-équipes. Il a également renforcé l'importance de l'optimisation des performances lors du travail sur des composants UI interactifs utilisés par des milliers d'utilisateurs.",
      vi: "Dự án này đã dạy tôi tầm quan trọng của sự hợp tác nhóm trong các hệ thống quy mô lớn. Tôi đã học cách phối hợp với các lập trình viên khác thông qua việc review code, giao tiếp với designer để làm rõ các trường hợp đặc biệt, và tuân thủ các best practice cho quy trình Git trong môi trường đa nhóm. Nó cũng củng cố tầm quan trọng của việc tối ưu hiệu suất khi làm việc với các component UI tương tác được sử dụng bởi hàng nghìn người dùng."
    },
    stackImg: "/immo_stack.png"
  },
  'prettcf': {
    id: 2,
    type: "Founder",
    title: "The platform to practice the French exam: TCF Canada",
    img: "/prettcf_imgs/prettcf_banner.webp",
    route: "/projects/prettcf",
    link: "https://prettcf.com/",
    desc: {
      en: "Prettcf.com is an online platform built with WordPress for users to practice the TCF Canada French exam. I independently designed and developed the site with a focus on user experience and custom functionality through both WordPress plugins and custom code.",
      fr: "Prettcf.com est une plateforme en ligne construite avec WordPress permettant aux utilisateurs de s'entraîner à l'examen TCF Canada. J'ai conçu et développé le site de manière indépendante en mettant l'accent sur l'expérience utilisateur et les fonctionnalités personnalisées via des plugins WordPress et du code personnalisé.",
      vi: "Prettcf.com là một nền tảng trực tuyến được xây dựng bằng WordPress cho phép người dùng luyện thi TCF Canada. Tôi đã độc lập thiết kế và phát triển trang web với trọng tâm là trải nghiệm người dùng và chức năng tùy chỉnh thông qua cả plugins WordPress và mã tùy chỉnh."
    },
    stacks: ["JavaScript", "PHP", "SASS", "Laravel"],
    imgs: ["/prettcf_imgs/prettcf_1.webp", "/prettcf_imgs/prettcf_2.webp", "/prettcf_imgs/prettcf_3.webp", "/prettcf_imgs/prettcf_4.webp"],
    purposeAndGoal: {
      en: "The goal of this project was to create a practical platform to help French learners prepare for the TCF Canada exam. I wanted to provide a friendly, accessible interface where users could experience real test formats and track their progress over time.",
      fr: "L'objectif de ce projet était de créer une plateforme pratique pour aider les apprenants de français à se préparer à l'examen TCF Canada. Je voulais fournir une interface conviviale et accessible où les utilisateurs pourraient expérimenter des formats de test réels et suivre leur progression au fil du temps.",
      vi: "Mục tiêu của dự án này là tạo ra một nền tảng thực tế để giúp người học tiếng Pháp chuẩn bị cho kỳ thi TCF Canada. Tôi muốn cung cấp một giao diện thân thiện, dễ tiếp cận nơi người dùng có thể trải nghiệm các định dạng bài thi thực tế và theo dõi tiến độ của họ theo thời gian."
    },
    explanation: {
      en: "I built the platform using Laravel and PHP, with SASS for clean, scalable styling. I crafted a fully custom system focused on performance, flexibility, and a smooth user experience.",
      fr: "J’ai développé la plateforme avec Laravel et PHP, en utilisant SASS pour un style propre et évolutif. J’ai conçu un système entièrement sur mesure, axé sur la performance, la flexibilité et une expérience utilisateur fluide.",
      vi: "Tôi đã sử dụng WordPress làm CMS chính và cấu hình rộng rãi các plugin như Tutor LMS để xây dựng một hệ thống học tập hoàn chỉnh. Tôi cũng áp dụng CSS và PHP tùy chỉnh để điều chỉnh layout, tăng cường tính responsive và thêm tính tương tác. Thiết kế được tùy chỉnh hoàn toàn với Elementor và các tài nguyên được tạo thủ công bao gồm banner và logo để phù hợp với định danh của nền tảng."
    },

    problems: {
      en: "Balancing performance with rich UI and dynamic data was challenging. Some complex interactions and data flows required custom logic with Laravel and PHP, and ensuring consistency across devices needed careful testing and optimization.",
      fr: "Trouver l’équilibre entre performance, interface riche et gestion de données dynamiques était un défi. Certaines interactions complexes et flux de données ont nécessité une logique personnalisée avec Laravel et PHP, et assurer la cohérence sur tous les appareils a demandé des tests et des optimisations approfondis.",
      vi: "Cân bằng tính linh hoạt của plugin với các yêu cầu tùy chỉnh là một thách thức. Một số tính năng thiết kế và tương tác người dùng không thể thực hiện được chỉ thông qua plugin, vì vậy tôi đã phải viết JavaScript và PHP tùy chỉnh để đáp ứng những nhu cầu đó. Đảm bảo tính responsive và nhất quán trên các thiết bị cũng đòi hỏi kiểm tra và thử nghiệm kỹ lưỡng."
    },

    lessons: {
      en: "This project improved my understanding of modern web development with Laravel and PHP. I learned how to build scalable, high-performance interfaces and strengthen my frontend skills through real-world UI/UX design, while gaining confidence handling full-stack responsibilities with Node.js.",
      fr: "Ce projet a amélioré ma compréhension du développement web moderne avec Laravel et PHP. J’ai appris à créer des interfaces évolutives et performantes, tout en renforçant mes compétences frontend grâce à la pratique réelle du design UI/UX, et en gagnant en confiance dans la gestion des aspects full-stack avec Node.js.",
      vi: "Dự án này đã cải thiện hiểu biết của tôi về WordPress như một nền tảng phát triển. Tôi đã học cách mở rộng các chức năng của nó một cách sáng tạo trong khi vẫn duy trì hiệu suất. Nó cũng củng cố kỹ năng frontend của tôi thông qua thực hành thực tế về CSS styling và thiết kế trực quan, và cho tôi sự tự tin trong việc quản lý trách nhiệm full-stack, ngay cả với các nhu cầu backend hạn chế."
    },
    stackImg: "/prettcf_stack.png"
  },
  'datvangphuquoc': {
    id: 3,
    type: "Full-Stack engineer",
    title: "The real estate e-commerce platform of Phu Quoc island, Vietnam",
    img: "/p2.svg",
    route: "/projects/datvangphuquoc",
    link: "https://datvangphuquoc.com/",
    desc: {
      en: "Datvangphuquoc.com is an online platform built with React.js, designed to deliver a fast and user-friendly experience. I independently designed and developed the site, focusing on performance, scalability, and fully custom features.",
      fr: "Datvangphuquoc.com est une plateforme en ligne développée avec React.js, conçue pour offrir une expérience rapide et fluide. J’ai conçu et développé le site de manière indépendante, en mettant l’accent sur la performance, l’évolutivité et des fonctionnalités entièrement personnalisées.",
      vi: "Prettcf.com là một nền tảng trực tuyến được xây dựng bằng WordPress cho phép người dùng luyện thi TCF Canada. Tôi đã độc lập thiết kế và phát triển trang web với trọng tâm là trải nghiệm người dùng và chức năng tùy chỉnh thông qua cả plugins WordPress và mã tùy chỉnh."
    },
    stacks: ["ReactJs", "Redux", "Styled-Components", "Design System", "Typescript", "Javascript"],
    imgs: ["/p2.svg", "/p2.svg", "/p2.svg", "/p2.svg"],
    purposeAndGoal: {
      en: "The goal of this project was to create a modern platform to showcase real estate opportunities in Phu Quoc. I focused on building a clean, user-friendly interface where users can easily explore properties, view key information, and navigate listings with a smooth experience.",
      fr: "L’objectif de ce projet était de créer une plateforme moderne pour présenter des opportunités immobilières à Phu Quoc. Je me suis concentré sur une interface claire et intuitive permettant aux utilisateurs d’explorer facilement les biens, consulter les informations essentielles et naviguer de manière fluide.",
      vi: "Mục tiêu của dự án này là tạo ra một nền tảng thực tế để giúp người học tiếng Pháp chuẩn bị cho kỳ thi TCF Canada. Tôi muốn cung cấp một giao diện thân thiện, dễ tiếp cận nơi người dùng có thể trải nghiệm các định dạng bài thi thực tế và theo dõi tiến độ của họ theo thời gian."
    },
    explanation: {
      en: "I built the platform using React.js, Next.js, and Node.js, with SASS for clean, scalable styling. I focused on performance, flexibility, and a smooth user experience.",
      fr: "J’ai développé la plateforme avec React.js, Next.js et Node.js, en utilisant SASS pour un style propre et évolutif. Je me suis concentré sur la performance, la flexibilité et une expérience utilisateur fluide.",
      vi: "Tôi đã sử dụng WordPress làm CMS chính và cấu hình rộng rãi các plugin như Tutor LMS để xây dựng một hệ thống học tập hoàn chỉnh. Tôi cũng áp dụng CSS và PHP tùy chỉnh để điều chỉnh layout, tăng cường tính responsive và thêm tính tương tác. Thiết kế được tùy chỉnh hoàn toàn với Elementor và các tài nguyên được tạo thủ công bao gồm banner và logo để phù hợp với định danh của nền tảng."
    },

    problems: {
      en: "Balancing plugin flexibility with custom requirements was challenging. Some design features and user interactions were not achievable through plugins alone, so I had to write custom JavaScript and PHP to meet those needs. Ensuring responsiveness and consistency across devices also required deep inspection and testing.",
      fr: "Équilibrer la flexibilité des plugins avec les exigences personnalisées était un défi. Certaines fonctionnalités de design et interactions utilisateur n'étaient pas réalisables uniquement avec des plugins, j'ai donc dû écrire du JavaScript et PHP personnalisé pour répondre à ces besoins. Assurer la réactivité et la cohérence sur tous les appareils a également nécessité une inspection et des tests approfondis.",
      vi: "Cân bằng tính linh hoạt của plugin với các yêu cầu tùy chỉnh là một thách thức. Một số tính năng thiết kế và tương tác người dùng không thể thực hiện được chỉ thông qua plugin, vì vậy tôi đã phải viết JavaScript và PHP tùy chỉnh để đáp ứng những nhu cầu đó. Đảm bảo tính responsive và nhất quán trên các thiết bị cũng đòi hỏi kiểm tra và thử nghiệm kỹ lưỡng."
    },

    lessons: {
      en: "This project deepened my understanding of building scalable web applications with React and Next.js. I improved my ability to structure clean frontend architecture, optimize performance, and deliver smooth user experiences, while gaining more confidence handling full-stack responsibilities with Node.js.",
      fr: "Ce projet a renforcé ma compréhension du développement d’applications web évolutives avec React et Next.js. J’ai amélioré ma capacité à structurer une architecture frontend propre, optimiser les performances et offrir une expérience utilisateur fluide, tout en gagnant en confiance dans la gestion des aspects full-stack avec Node.js.",
      vi: "Dự án này đã cải thiện hiểu biết của tôi về WordPress như một nền tảng phát triển. Tôi đã học cách mở rộng các chức năng của nó một cách sáng tạo trong khi vẫn duy trì hiệu suất. Nó cũng củng cố kỹ năng frontend của tôi thông qua thực hành thực tế về CSS styling và thiết kế trực quan, và cho tôi sự tự tin trong việc quản lý trách nhiệm full-stack, ngay cả với các nhu cầu backend hạn chế."
    },
    stackImg: "/prettcf_stack.png"
  },
  'pulsecrm': createApplicationProject({
    id: 4,
    slug: "pulsecrm",
    type: "SaaS Application",
    title: "PulseCRM - Customer relationship management platform",
    img: "/project-assets/pulsecrm.png",
    link: "https://example.com/pulsecrm",
    domain: "CRM",
    outcome: "pipeline visibility, customer follow-up workflows, and revenue tracking",
    stacks: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Recharts"],
  }),
  'fintrack': createApplicationProject({
    id: 5,
    slug: "fintrack",
    type: "Finance Application",
    title: "FinTrack - Personal finance and budgeting app",
    img: "/project-assets/fintrack.png",
    link: "https://example.com/fintrack",
    domain: "finance",
    outcome: "budget planning, spending analytics, and savings goal tracking",
    stacks: ["React", "TypeScript", "Redux Toolkit", "Chart.js", "Tailwind CSS", "Node.js"],
  }),
  'carebridge': createApplicationProject({
    id: 6,
    slug: "carebridge",
    type: "Healthcare Application",
    title: "CareBridge - Telehealth patient portal",
    img: "/project-assets/carebridge.png",
    link: "https://example.com/carebridge",
    domain: "healthcare",
    outcome: "appointment scheduling, care summaries, and patient communication",
    stacks: ["Next.js", "React", "TypeScript", "GraphQL", "Tailwind CSS", "Prisma"],
  }),
  'learnloop': createApplicationProject({
    id: 7,
    slug: "learnloop",
    type: "Education Application",
    title: "LearnLoop - Online learning dashboard",
    img: "/project-assets/learnloop.png",
    link: "https://example.com/learnloop",
    domain: "education",
    outcome: "course progress, lesson planning, quizzes, and learning analytics",
    stacks: ["React", "Next.js", "TypeScript", "SASS", "Node.js", "PostgreSQL"],
  }),
  'shopvista': createApplicationProject({
    id: 8,
    slug: "shopvista",
    type: "E-commerce Application",
    title: "ShopVista - Commerce operations manager",
    img: "/project-assets/shopvista.png",
    link: "https://example.com/shopvista",
    domain: "e-commerce",
    outcome: "product management, order monitoring, inventory alerts, and sales insights",
    stacks: ["Next.js", "React", "TypeScript", "Redux", "Stripe", "Tailwind CSS"],
  }),
  'fleetops': createApplicationProject({
    id: 9,
    slug: "fleetops",
    type: "Logistics Application",
    title: "FleetOps - Delivery fleet management platform",
    img: "/project-assets/fleetops.png",
    link: "https://example.com/fleetops",
    domain: "logistics",
    outcome: "route planning, dispatch operations, live fleet status, and delivery KPIs",
    stacks: ["React", "TypeScript", "Mapbox", "Node.js", "Express", "Tailwind CSS"],
  }),
  'stayfinder': createApplicationProject({
    id: 10,
    slug: "stayfinder",
    type: "Travel Application",
    title: "StayFinder - Hotel and rental booking platform",
    img: "/project-assets/stayfinder.png",
    link: "https://example.com/stayfinder",
    domain: "travel booking",
    outcome: "property discovery, comparison filters, booking summaries, and map browsing",
    stacks: ["Next.js", "React", "TypeScript", "ElasticSearch", "Tailwind CSS", "Node.js"],
  }),
  'tableflow': createApplicationProject({
    id: 11,
    slug: "tableflow",
    type: "Hospitality Application",
    title: "TableFlow - Restaurant reservation and kitchen platform",
    img: "/project-assets/tableflow.png",
    link: "https://example.com/tableflow",
    domain: "hospitality",
    outcome: "reservation planning, table status visibility, kitchen queues, and daily analytics",
    stacks: ["React", "TypeScript", "Redux Toolkit", "SASS", "Node.js", "Socket.IO"],
  }),
  'sprintboard': createApplicationProject({
    id: 12,
    slug: "sprintboard",
    type: "Productivity Application",
    title: "SprintBoard - Agile planning and team collaboration tool",
    img: "/project-assets/sprintboard.png",
    link: "https://example.com/sprintboard",
    domain: "project management",
    outcome: "sprint planning, issue tracking, team workload, and release visibility",
    stacks: ["Next.js", "React", "TypeScript", "DnD Kit", "Tailwind CSS", "PostgreSQL"],
  }),
  'contentpilot': createApplicationProject({
    id: 13,
    slug: "contentpilot",
    type: "Marketing Application",
    title: "ContentPilot - AI content calendar and publishing platform",
    img: "/project-assets/contentpilot.png",
    link: "https://example.com/contentpilot",
    domain: "marketing",
    outcome: "campaign planning, editorial calendars, content drafts, and performance reporting",
    stacks: ["React", "Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Vercel"],
  }),
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
