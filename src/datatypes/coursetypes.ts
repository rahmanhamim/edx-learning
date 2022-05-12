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
}

export interface Module {
  title: string;
  moduleContent: ModuleContent;
}

export interface ModuleContent {
  type: string;
  moduleResourse: ModuleResourse[];
}

export interface ModuleResourse {
  type: string;
  moduleID: string;
  title: string;
  content: string;
}
