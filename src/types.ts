export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  altText: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  process: string[];
  role: string;
  timeline: string;
}

export interface Testimony {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface TimelineEvent {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  isActive?: boolean;
}

export interface ServiceExpertise {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
}
