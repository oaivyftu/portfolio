export type MultiLang = {
  en: string;
  fr: string;
}

export type ServiceKey = "web" | "mobile" | "design" | "cloud" | "consulting" | "support";

export type Project = {
  id: string | number;
  title: string;
  img: string;
  route: string;
  link: string;
  kind: "delivered" | "concept";
  industry: MultiLang;
  services: ServiceKey[];
  desc: MultiLang;
  stacks: string[];
  imgs: string[];
  challenge: MultiLang;
  solution: MultiLang;
  results: MultiLang;
  stackImg: string;
}
