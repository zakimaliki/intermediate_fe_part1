import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import emailReducer from "./emailReducer";
import productReducer from "./productReducer";
import todoReducer from "./todoReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    counter : counterReducer,
    email : emailReducer,
    todos : todoReducer,
    user : userReducer,
    product : productReducer
})

export default rootReducer;