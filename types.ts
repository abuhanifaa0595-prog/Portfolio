export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export enum Section {
  HERO = 'hero',
  WORK = 'work',
  ABOUT = 'about',
  CONTACT = 'contact'
}