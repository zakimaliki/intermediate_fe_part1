const initialState = {
  email: "text@test.com",
};

const emailReducer = (state = initialState, action) => {
  if (action.type === "EMAIL_CHANGE") {
    return {
      ...state,
      email: action.payload,
    };
  } else {
    return state;
  }
};

export default emailReducer;