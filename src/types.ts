export interface Socials {
  id: number;
  name: string;
  url: string;
  icon: any;
}

export interface ContactInfo {
  id: number;
  name: string;
  url: string;
  value: string;
  icon: any;
}

export interface ExperienceInfo {
  id: number;
  year: string | number;
  post: string;
  company: Company;
  bgColor: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  description: string;
}

export interface Company {
  name: string;
  url: string;
}

export interface EducationInfo {
  id: number;
  name: string;
  year: string | number;
  schoolName: string;
  bgColor: string;
  location: string;
}

export type Project = {
  id: number;
  name: string;
  description: string;
  github: string;
  url: string;
  tools: string[];
  imageUrl: string;
  bgColor?: string;
};
