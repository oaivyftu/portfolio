export type MultiLang = {
  en: string;
  fr: string;
  vi: string;
}

export type Project = {
  id: string | number;
  title: string;
  img: string;
  route: string;
  link: string;
  desc: MultiLang;
  stacks: string[];
  imgs: string[];
  purposeAndGoal: MultiLang;
  explanation: MultiLang;
  problems: MultiLang;
  lessons: MultiLang;
  stackImg: string;
  type: string;
}