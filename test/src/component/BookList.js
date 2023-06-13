import React, {useEffect, useState} from "react";
import {bookService} from "../service/BookService";
import {Link} from "react-router-dom";

export function BookList() {
    const [books, setBooks] = useState([])
    const [idDelete, setIdDelete] = useState("")
    const [nameDelete, setNameDelete] = useState("")
    const findAll = async () => {
        const res = await bookService.findAll()
        setBooks(res)
    }
    const getProps = async (id, name) => {
        setIdDelete(id)
        setNameDelete(name)
    }
    const handleDelete = async (id) => {
        await bookService.deleteById(id)
        findAll()
    }
    useEffect(() => {
        findAll()
    }, [])

    return (
        <>
            <Link to={"/add"}>Add new</Link>
            <table>
                <tr>
                    <th>STT</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {
                    books.map((book, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td><Link to={`edit/${book.id}`}>Edit</Link></td>
                            <td>
                                <button type="button" onClick={() => getProps(book.id, book.title)}
                                        className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body text-danger">
                            {nameDelete}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-danger"data-bs-dismiss="modal" onClick={()=> handleDelete(idDelete)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}