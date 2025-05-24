export type Project = {
  id: string | number;
  title: string;
  img: string;
  route: string;
  link: string;
  desc: string;
  stacks: string[];
  imgs: string[];
  purposeAndGoal: string;
  explanation: string;
  problems: string;
  lessons: string;
  stackImg: string;
  type: "Fulltime Frontend" | "Side Project" | "Freelance"
}