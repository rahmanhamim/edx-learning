const initialState = {
  courseData: [],
  htmlLessons: [],
  videoLessons: [],
  aboutLessons: [],
  quizData: [],
};

export const courseReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case "COURSE_FETCH":
      return {
        ...state,
        courseData: action.payload,
      };
    case "ABOUT_LESSON_FETCH":
      return {
        ...state,
        aboutLessons: action.payload,
      };
    case "HTML_LESSON_FETCH":
      return {
        ...state,
        htmlLessons: action.payload,
      };
    case "VIDEO_LESSON_FETCH":
      return {
        ...state,
        videoLessons: action.payload,
      };
    case "QUIZ_DATA_FETCH":
      return {
        ...state,
        quizData: action.payload,
      };

    default:
      return state;
  }
};
