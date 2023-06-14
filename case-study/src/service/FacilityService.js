import axios from "axios";

export const findAll = async () => {
    const result = await axios.get(`http://localhost:2000/facility`)
    return result.data
}
export const findById = async (id) => {
    const result = await axios.get(`http://localhost:2000/facility/${id}`)
    return result.data
}
export const deleteById = async (id) => {
    const result = await axios.delete(`http://localhost:2000/facility/${id}`)
    return result.data
}
export const findAllType = async () => {
    const result = await axios.get(`http://localhost:2000/facilityType`)
    return result.data
}
export const findAllFacilitiesFree = async () => {
    const result = await axios.get(`http://localhost:2000/facilityFree`)
    return result.data
}
export const findAllRentType = async () => {
    const result = await axios.get(`http://localhost:2000/rentType`)
    return result.data
}
export const addFacility = async (value) => {
    await axios.post(`http://localhost:2000/facility`,{...value})
}
export const updateFacility = async (id,value) => {
    await axios.post(`http://localhost:2000/facilitiesList/${id}`,{...value})
}
export const facilityService = {
    findById,
    findAllType,
    addFacility,
    findAllFacilitiesFree,
    findAllRentType,
    updateFacility,
    deleteById
}