import axios from "axios";

const findAll = async () => {
    const result = await axios.get(`http://localhost:8080/book`)
    return result.data
}
const findById = async (id) => {
    const result = await axios.get(`http://localhost:8080/book/${id}`)
    return result.data
}
const deleteById = async (id) => {
    const result = await axios.delete(`http://localhost:8080/book/${id}`)
    return result.data
}
const addBook = async (value) => {
    const result = await axios.post(`http://localhost:8080/book`,{...value})
    return result.data
}
const editBook = async (id,value) => {
    const result = await axios.put(`http://localhost:8080/book/${id}`,{...value})
    return result.data
}
export const bookService = {
    findAll,
    deleteById,
    addBook,
    editBook,
    findById
}