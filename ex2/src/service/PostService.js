import axios from "axios";

export const getPostList = async () => {
    const result = await axios.get(`http://localhost:2500/posts`)
    return result.data
}
export const findByTitle = async (name) => {
    const result = await axios.get(`http://localhost:2500/title?_like=${name}`)
    return result.data
}
export const getPostById = async (id) => {
    const result = await axios.get(`http://localhost:2500/posts/${id}`)
    return result.data
}  
export const deletePost = async (id) => {
    const result = await axios.delete(`http://localhost:2500/posts/${id}`)
    return result.data
}
export const addPost = async (value) => {
    const result = await axios.post(`http://localhost:2500/posts`,{...value})
    return result.data
}
export const editPost = async (id,value) => {
    const result = await axios.put(`http://localhost:2500/posts/${id}`, {...value})
    return result.data
}