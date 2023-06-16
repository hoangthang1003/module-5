import axios from "axios";

const findAll = async () => {
        const res = await axios.get(`http://localhost:8080/product2?_sort=name&_order=asc`)
    return res.data
}
const findById = async (id) => {
        const res = await axios.get(`http://localhost:8080/product2/${id}`)
    return res.data
}
const deleteProduct = async (id) => {
        const res = await axios.delete(`http://localhost:8080/product2/${id}`)
    return res.data
}
const findByNameAndType = async (name, type) => {
    const res = await axios.get(`http://localhost:8080/product2?name_like=${name}`)
    return res.data
}

const findAllType = async () => {
    const res = await axios.get(`http://localhost:8080/productType`)
    return res.data
}
const addProduct = async (value) => {
    const res = await axios.post(`http://localhost:8080/product2`, {...value})
    return res.data
}
export const productService = {
    findAll,
    findAllType,
    addProduct,
    findByNameAndType,
    deleteProduct,
    findById
}