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
  isCompleted: boolean;
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
  quizContent: QuizData[];
  moduleTitle?: string;
  isCompleted: boolean;
}

export interface QuizData {
  userScore: number;
  qid?: number | undefined;
  question?: string | undefined;
  choices?: string[] | undefined;
  answer?: string | undefined;
  explanation?: string | undefined;
  point?: number | undefined;
  attempt: number;
  isCorrect: string | boolean;
}
