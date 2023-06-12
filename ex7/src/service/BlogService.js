import request from "../http-common"

const findAll = () => {
    return request.get("/posts")
}

const save = (blog) => {
    return request.post("/posts",{...blog})
}

export const blogService = {
    findAll,
    save
}