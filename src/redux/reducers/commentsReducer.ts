const initialState = {
  comments: [],
};

export const commentsReducer = (
  state: any = initialState,
  action: any
): any => {
  switch (action.type) {
    case "COMMENTS_FETCH":
      return {
        ...state,
        comments: action.payload,
      };

    default:
      return state;
  }
};
