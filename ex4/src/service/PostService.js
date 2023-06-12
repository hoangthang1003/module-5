import axios from "axios";

export const findAllPost = async () => {
    const res = await axios.get(`https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts`)
    return res.data
}
const addPost = async (value) => {
    const res = await axios.get(`https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts`, {...value})
    return res.data
}

export const postService = {
    findAllPost,
    addPost
}