import React, {useEffect, useState} from "react";
import {deletePost, getPostList} from "../service/PostService";
import {Link} from "react-router-dom";

export function PostList() {
const [posts,setPosts] = useState([])
const [idDelete,setIdDelete] = useState([])
const [nameDelete,setNameDelete] = useState([])
    const findAll = async () => {
    const result = await getPostList()
        setPosts(result)
    }
    useEffect(()=>{
        findAll()
    },[])
    const getProps = async (id,name) => {
    setIdDelete(id)
    setNameDelete(name)
    }
    const handleDelete = async (id) => {
    await deletePost(id)
        findAll()
    }
    return(
        <>
            <Link to={"/add"} className={"btn btn-info"}>Create</Link>
        <table className="">
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Time</th>
                <th>Action</th>
            </tr>
            {
                posts.map((post,index)=> (
                    <tr key={index}>
                        <td>{post.id}</td>
                        <td><Link to={`/${post.id}`} className={"text"}>{post.title}</Link></td>
                        <td>{post.category}</td>
                        <td>{post.updatedAt}</td>
                        <td>
                            <Link to={`/edit/${post.id}`} className={"btn btn-primary"}>Edit</Link>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={() => getProps(post.id, post.title)}
                            >Delete
                            </button>
                        </td>
                    </tr>
                ))
            }
        </table>
            <div className="modal" tabIndex={-1} id={"exampleModal"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-danger">Bảng xóa khách hàng</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div>Bạn có muốn xóa <h5 className={"text-danger"}>{nameDelete}</h5></div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="submit" data-bs-dismiss="modal"
                                    className="btn btn-danger" onClick={() => handleDelete(idDelete)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}