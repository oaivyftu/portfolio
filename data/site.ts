import type {ServiceKey} from "@/types";

export const siteConfig = {
  name: "Vincent Studio Company",
  shortName: "Vincent Studio",
  monogram: "VS",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vincentle.ca",
  email: "contact@vincentle.ca",
  secondaryEmail: "oaivyftu@gmail.com",
  linkedin: "https://www.linkedin.com/in/leoaivy/",
  founder: "Vincent Le",
};

export const serviceKeys: ServiceKey[] = ["web", "mobile", "design", "cloud", "consulting", "support"];

export const processKeys = ["discover", "design", "build", "launch", "support"] as const;

export const whyUsStatKeys = ["experience", "team", "languages", "caseStudies"] as const;

export const whyUsPointKeys = ["senior", "transparent", "bilingual", "handover"] as const;

export const faqKeys = ["projects", "timeline", "pricing", "existing", "afterLaunch"] as const;

export const aboutValueKeys = ["quality", "clarity", "ownership", "partnership"] as const;

export const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Laravel", "PHP", ".NET Core", "PostgreSQL",
  "GraphQL", "Redux", "Tailwind CSS", "AWS", "WordPress", "Figma",
];

export const featuredProjectIds = ["immoscout24", "prettcf", "datvangphuquoc", "nestscout", "finharbor", "roamly"];
