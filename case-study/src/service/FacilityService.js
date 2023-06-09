import axios from "axios";

export const findAll = async () => {
    const result = await axios.get(`http://localhost:2000/facility`)
    return result.data
}
export const findAllType = async () => {
    const result = await axios.get(`http://localhost:2000/facilityType`)
    return result.data
}
export const addFacility = async (value) => {
    await axios.post(`http://localhost:2000/facilitiesList`,{...value})
}