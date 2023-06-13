import axios from "axios";

export const findAll = async () => {
    const result = await axios.get(`http://localhost:2000/customer`)
    return result.data
}
export const findAllType = async () => {
    const result = await axios.get(`http://localhost:2000/customerType`)
    return result.data
}
export const deleteById = async (id) => {
    const result = await axios.delete(`http://localhost:2000/customer/${id}`)
    return result.data
}
 const addCustomer = async (value) => {
    const result = await axios.post(`http://localhost:2000/customer`,{ ...value })
    return result.data
}
export const editCustomer = async (id,value) => {
    const result = await axios.put(`http://localhost:2000/customer/${id}`,{ ...value })
    return result.data
}
export const findById = async (id) => {
    const result = await axios.get(`http://localhost:2000/customer/${id}`)
    return result.data
}

export const customerService = {
    findById,
    findAll,
    editCustomer,
    addCustomer,
    deleteById,
    findAllType
}