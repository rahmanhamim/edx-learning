export interface Course {
  id: number;
  progress: number;
  title: string;
  aboutCourse: AboutCourse[];
  modules: Module[];
}

export interface AboutCourse {
  id: string;
  title: string;
  textContent: string;
  links: string[];
  moduleTitle?: string;
}

export interface Module {
  id: string;
  title: string;
  moduleContent: ModuleContent[];
}

export interface ModuleContent {
  type: string;
  id: string;
  title: string;
  content: string;
  moduleTitle?: string;
  isCompleted: boolean;
}
