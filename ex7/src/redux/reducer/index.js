import {combineReducers} from "redux";
import {blogReducer} from "./Blog";

export const rootReducer = combineReducers({
    blogs: blogReducer
})