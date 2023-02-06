const initialState = {
    todos: "",
  };
  
  const todoReducer = (state = initialState, action) => {
    if (action.type === "TODO") {
      return {
        ...state,
        todos:action.payload,
      };
    } else {
      return state;
    }
  };
  
  export default todoReducer;