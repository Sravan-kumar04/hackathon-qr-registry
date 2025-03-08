
export type TechStack = string[];

export enum Degree {
  BTECH = "B.Tech",
  MTECH = "M.Tech",
  BCA = "BCA",
  MCA = "MCA",
  BSC = "B.Sc",
  MSC = "M.Sc",
  OTHER = "Other"
}

export enum StudyYear {
  FIRST = "1st Year",
  SECOND = "2nd Year",
  THIRD = "3rd Year",
  FOURTH = "4th Year",
  FIFTH = "5th Year"
}

export interface RegistrationFormData {
  user_id?: number;
  full_name: string;
  email: string;
  phone_number: string;
  college_name: string;
  degree: Degree;
  year_of_study: StudyYear;
  cgpa: string;
  tech_stack: TechStack;
  other_skills: string;
  project_idea: string;
  linkedin: string;
  github: string;
}

export interface FormErrors {
  full_name?: string;
  email?: string;
  phone_number?: string;
  college_name?: string;
  degree?: string;
  year_of_study?: string;
  cgpa?: string;
  tech_stack?: string;
  other_skills?: string;
  project_idea?: string;
  linkedin?: string;
  github?: string;
}
