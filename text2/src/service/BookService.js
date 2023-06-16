import axios from "axios";

const findAll = async () => {
    const res = await axios.get(`http://localhost:2001/book?_sort=price&_order=desc`)
    return res.data
}
const findByNameAndType = async (name,type) => {
    const res = await axios.get(`http://localhost:2001/book?name_like=${name}&bookType_like=${type}`);
    return res.data
}
const findById = async (id) => {
    const res = await axios.get(`http://localhost:2001/book/${id}`)
    return res.data
}
const findType = async () => {
    const res = await axios.get(`http://localhost:2001/bookType`)
    return res.data
}
const deleteById = async (id) => {
    const res = await axios.get(`http://localhost:2001/book/${id}`)
    return res.data
}
const addBook = async (value) => {
    const res = await axios.get(`http://localhost:2001/book`,{...value})
    return res.data
}
const editBook = async (id,value) => {
    const res = await axios.get(`http://localhost:2001/book/${id}`,{...value})
    return res.data
}
export const bookService = {
    findById,
    findAll,
    findType,
    deleteById,
    addBook,
    editBook,
    findByNameAndType
}