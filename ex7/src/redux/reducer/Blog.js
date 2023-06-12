import {CREATE_BLOG,GET_ALL_BLOG} from "../action/Types";

const initialState = []
export const blogReducer = (blogs = initialState,action) => {
    const {type,payload} = action

    switch (type) {
        case GET_ALL_BLOG:
            return payload
        case CREATE_BLOG:
            return [...blogs,payload]
        default:
            return blogs
    }
}
