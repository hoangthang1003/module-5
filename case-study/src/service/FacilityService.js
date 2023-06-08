import axios from "axios";

export const findAll = async () => {
    const result = await axios.get(`http://localhost:2000/facilitiesList`)
    return result.data
}