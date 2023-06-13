import styles from "../styles/Home.module.css";
import {deletePosts, getPosts} from "./mock-data/data";
import Link from "next/link";
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const [idDelete,setIdDelete] = useState("")
    const [nameDelete,setNameDelete] = useState("")
    const getProps = (id,name) => {
        setIdDelete(id)
        setNameDelete(name)
    }
    const handleDelete = async (id) => {
        await deletePosts(id)
    }
    return (
        <>

            <Link href={`/blogs/postAdd/addPost`}>
                Add
            </Link>
            <div className={styles.container}>
                <main className={styles.main}>
                    <table className={styles.table}>
                        <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>ID</th>
                            <th className={styles.th}>title</th>
                            <th className={styles.th}>Category</th>
                            <th className={styles.th}>Updated At</th>
                            <th className={styles.th}>Edit</th>
                            <th className={styles.th}>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {getPosts().map(blog => (
                            <tr className={styles.tr} key={blog.id}>
                                <td className={styles.td}>{blog.id}</td>
                                <td className={styles.td}>{blog.title}</td>
                                <td className={styles.td}>{blog.category}</td>
                                <td className={styles.td}>{blog.updatedAt}</td>
                                <td>
                                    <Link href={`/blogs/postEdit/${encodeURIComponent(blog.id)}`} className="btn btn-danger">
                                    Edit
                                </Link>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => getProps(blog.id, blog.title)}
                                    >Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                </main>
            </div>
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
                            <button type="button" data-bs-dismiss="modal"
                                    className="btn btn-danger" onClick={() => handleDelete(idDelete)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
