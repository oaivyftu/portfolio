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
    desc: {
      en: "Immoscout24 is a full-stack real estate platform that enables users to buy and rent properties across Switzerland. The application is built using modern technologies including ReactJS, Redux, TypeScript, JavaScript, NodeJS, ExpressJS, and .NET Core (C#). I collaborated as part of a distributed team of over 40 professionals—including developers, designers, QA engineers, product owners, and managers—spanning multiple European countries. My primary responsibility was to implement and enhance key UI components using React and TypeScript, ensuring a consistent, scalable, and responsive user experience across the platform.",
      fr: "Immoscout24 est une plateforme immobilière full-stack permettant aux utilisateurs d'acheter et de louer des biens dans toute la Suisse. L'application est construite avec des technologies modernes incluant ReactJS, Redux, TypeScript, JavaScript, NodeJS, ExpressJS et .NET Core (C#). J'ai collaboré au sein d'une équipe distribuée de plus de 40 professionnels—incluant développeurs, designers, ingénieurs QA, product owners et managers—répartis dans plusieurs pays européens. Ma responsabilité principale était d'implémenter et d'améliorer les composants UI clés en utilisant React et TypeScript, assurant une expérience utilisateur cohérente, évolutive et réactive sur l'ensemble de la plateforme.",
      vi: "Immoscout24 là một nền tảng bất động sản full-stack cho phép người dùng mua và thuê bất động sản trên khắp Thụy Sĩ. Ứng dụng được xây dựng bằng các công nghệ hiện đại bao gồm ReactJS, Redux, TypeScript, JavaScript, NodeJS, ExpressJS và .NET Core (C#). Tôi đã cộng tác trong một nhóm phân tán gồm hơn 40 chuyên gia—bao gồm lập trình viên, nhà thiết kế, kỹ sư QA, product owner và quản lý—trải rộng nhiều quốc gia Châu Âu. Trách nhiệm chính của tôi là triển khai và nâng cao các thành phần UI quan trọng bằng React và TypeScript, đảm bảo trải nghiệm người dùng nhất quán, có thể mở rộng và phản hồi nhanh trên toàn bộ nền tảng."
    },
    stacks: ["ReactJs", "Redux", "Styled-Components", "Design System", "Typescript", "Javascript"],
    imgs: ["/immo_1.png", "/immo_2.png", "/immo_3.png", "/immo_4.png"],
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
    type: "Side Project",
    title: "The platform to practice the French exam: TCF Canada",
    img: "/prettcf_banner.png",
    route: "/projects/prettcf",
    link: "https://prettcf.com/",
    desc: {
      en: "Prettcf.com is an online platform built with WordPress for users to practice the TCF Canada French exam. I independently designed and developed the site with a focus on user experience and custom functionality through both WordPress plugins and custom code.",
      fr: "Prettcf.com est une plateforme en ligne construite avec WordPress permettant aux utilisateurs de s'entraîner à l'examen TCF Canada. J'ai conçu et développé le site de manière indépendante en mettant l'accent sur l'expérience utilisateur et les fonctionnalités personnalisées via des plugins WordPress et du code personnalisé.",
      vi: "Prettcf.com là một nền tảng trực tuyến được xây dựng bằng WordPress cho phép người dùng luyện thi TCF Canada. Tôi đã độc lập thiết kế và phát triển trang web với trọng tâm là trải nghiệm người dùng và chức năng tùy chỉnh thông qua cả plugins WordPress và mã tùy chỉnh."
    },
    stacks: ["WordPress", "JavaScript", "PHP", "CSS", "Elementor", "Tutor LMS"],
    imgs: ["/prettcf_1.png", "/prettcf_2.png", "/prettcf_3.png", "/prettcf_4.png"],
    purposeAndGoal: {
      en: "The goal of this project was to create a practical platform to help French learners prepare for the TCF Canada exam. I wanted to provide a friendly, accessible interface where users could experience real test formats and track their progress over time.",
      fr: "L'objectif de ce projet était de créer une plateforme pratique pour aider les apprenants de français à se préparer à l'examen TCF Canada. Je voulais fournir une interface conviviale et accessible où les utilisateurs pourraient expérimenter des formats de test réels et suivre leur progression au fil du temps.",
      vi: "Mục tiêu của dự án này là tạo ra một nền tảng thực tế để giúp người học tiếng Pháp chuẩn bị cho kỳ thi TCF Canada. Tôi muốn cung cấp một giao diện thân thiện, dễ tiếp cận nơi người dùng có thể trải nghiệm các định dạng bài thi thực tế và theo dõi tiến độ của họ theo thời gian."
    },
    explanation: {
      en: "I used WordPress as the main CMS and extensively configured plugins like Tutor LMS to build a complete learning system. I also applied custom CSS and PHP to tweak layouts, enhance responsiveness, and add interactivity. The design was fully customized with Elementor and hand-crafted assets including banners and logos to match the platform's identity.",
      fr: "J'ai utilisé WordPress comme CMS principal et configuré de manière extensive des plugins comme Tutor LMS pour construire un système d'apprentissage complet. J'ai également appliqué du CSS et PHP personnalisés pour ajuster les layouts, améliorer la réactivité et ajouter de l'interactivité. Le design a été entièrement personnalisé avec Elementor et des ressources créées sur mesure, incluant des bannières et logos correspondant à l'identité de la plateforme.",
      vi: "Tôi đã sử dụng WordPress làm CMS chính và cấu hình rộng rãi các plugin như Tutor LMS để xây dựng một hệ thống học tập hoàn chỉnh. Tôi cũng áp dụng CSS và PHP tùy chỉnh để điều chỉnh layout, tăng cường tính responsive và thêm tính tương tác. Thiết kế được tùy chỉnh hoàn toàn với Elementor và các tài nguyên được tạo thủ công bao gồm banner và logo để phù hợp với định danh của nền tảng."
    },

    problems: {
      en: "Balancing plugin flexibility with custom requirements was challenging. Some design features and user interactions were not achievable through plugins alone, so I had to write custom JavaScript and PHP to meet those needs. Ensuring responsiveness and consistency across devices also required deep inspection and testing.",
      fr: "Équilibrer la flexibilité des plugins avec les exigences personnalisées était un défi. Certaines fonctionnalités de design et interactions utilisateur n'étaient pas réalisables uniquement avec des plugins, j'ai donc dû écrire du JavaScript et PHP personnalisé pour répondre à ces besoins. Assurer la réactivité et la cohérence sur tous les appareils a également nécessité une inspection et des tests approfondis.",
      vi: "Cân bằng tính linh hoạt của plugin với các yêu cầu tùy chỉnh là một thách thức. Một số tính năng thiết kế và tương tác người dùng không thể thực hiện được chỉ thông qua plugin, vì vậy tôi đã phải viết JavaScript và PHP tùy chỉnh để đáp ứng những nhu cầu đó. Đảm bảo tính responsive và nhất quán trên các thiết bị cũng đòi hỏi kiểm tra và thử nghiệm kỹ lưỡng."
    },

    lessons: {
      en: "This project improved my understanding of WordPress as a development platform. I learned how to creatively extend its functionalities while maintaining performance. It also strengthened my frontend skills through real-world practice of CSS styling and visual design, and gave me confidence in managing full-stack responsibilities, even with limited backend needs.",
      fr: "Ce projet a amélioré ma compréhension de WordPress en tant que plateforme de développement. J'ai appris à étendre de manière créative ses fonctionnalités tout en maintenant les performances. Il a également renforcé mes compétences frontend à travers la pratique réelle du style CSS et du design visuel, et m'a donné confiance dans la gestion des responsabilités full-stack, même avec des besoins backend limités.",
      vi: "Dự án này đã cải thiện hiểu biết của tôi về WordPress như một nền tảng phát triển. Tôi đã học cách mở rộng các chức năng của nó một cách sáng tạo trong khi vẫn duy trì hiệu suất. Nó cũng củng cố kỹ năng frontend của tôi thông qua thực hành thực tế về CSS styling và thiết kế trực quan, và cho tôi sự tự tin trong việc quản lý trách nhiệm full-stack, ngay cả với các nhu cầu backend hạn chế."
    },
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