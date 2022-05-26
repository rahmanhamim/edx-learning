const initialState = {
  discussionsData: [],
};

export const discussionsReducer = (
  state: any = initialState,
  action: any
): any => {
  switch (action.type) {
    case "DISCUSSIONS_FETCH":
      return {
        ...state,
        discussionsData: action.payload,
      };

    default:
      return state;
  }
};
