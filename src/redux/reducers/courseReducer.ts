const initialState = {
  courseData: [],
  htmlLessons: [],
};

export const courseReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case "COURSE_FETCH":
      return {
        ...state,
        courseData: action.payload,
      };
    case "HTML_LESSON_FETCH":
      return {
        ...state,
        htmlLessons: action.payload,
      };

    default:
      return state;
  }
};
