import {blogService} from "../../service/BlogService";
import {CREATE_BLOG, GET_ALL_BLOG} from "./Types";

export const getAllBlogs = () => async (dispatch) => {
    try {
        const res = await blogService.findAll();
        dispatch({
            type : GET_ALL_BLOG,
            payload:res.data
        })
    } catch (e) {
        console.log(e)
    }
}

export const createBlog = (blog) => async (dispatch) => {
    try {
        const res = await blogService.save(blog);
        dispatch({
            type: CREATE_BLOG,
            payload: res.data
        })
    } catch (e) {
        console.log(e)
    }
}