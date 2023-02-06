import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";


const initialState = {
    email:"zero@zero.com",
    count: 0,
    product: []
};

const rootReducer = (state = initialState, action) => {
    if(action.type === "INCREMENT"){
      return{
        ...state,
        count : state.count + 1,
      }
    } else if(action.type === "DECREMENT"){
      return{
        ...state,
        count : state.count - 1,
      }
    }else if(action.type === "EMAIL_CHANGE"){
      return{
        ...state,
        email: action.payload,
}
    } else if (action.type === "GET_ALL_PRODUCT") {
      return {
        ...state,
        product: action.payload,
      };
    }else if (action.type === "CREATE_PRODUCT") {
      return state;
    } else if (action.type === "EDIT_PRODUCT") {
      return state;
    } else if (action.type === "DELETE_PRODUCT") {
      return state;
    }else {
      return state;
    }
};

const store = createStore(rootReducer, applyMiddleware(thunk,logger));

export default store;
