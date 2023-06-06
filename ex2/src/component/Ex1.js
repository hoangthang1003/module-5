import React, {useEffect, useState} from "react";
import {deletePost, getPostList} from "../service/PostService";
import {Link} from "react-router-dom";

export function Exercise() {

    const [idDelete, setIdDelete] = useState(null);
    const [posts, setPosts] = useState([]);
    const [nameDelete, setNameDelete] = useState(null);

    const postList = async () => {
        const result = await getPostList()
        setPosts(result)
    }
    useEffect(() => {
        postList()
    }, [])
    const getProps = (id, name) => {
        setIdDelete(id);
        setNameDelete(name)
    }


    const handleDelete = async (id) => {
        await deletePost(id)
        postList()
    }
    return (
        <>
            <Link to={"/add"} className={"btn btn-dark"}>Add Post</Link>
            <table className="table table-success">
                <thead className={"table-danger text-info"}>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Slug</th>
                    <th>Category</th>
                    <th>Update Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map((value, index) =>
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.slug}</td>
                            <td>{value.category}</td>
                            <td>{value.updatedAt}</td>
                            <td>
                                <Link to={`/edit/${value.id}`} className={"btn btn-warning"}>Edit</Link>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => getProps(value.id, value.title)}
                                >Delete
                                </button>

                            </td>
                        </tr>
                    )
                }
                </tbody>
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