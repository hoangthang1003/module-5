import React, {useEffect, useState} from "react";
import {bookService} from "../service/BookService";
import {Link} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export function BookList() {
    const [books, setBooks] = useState(null)
    const [bookTypes, setBookTypes] = useState([])
    const findAll = async () => {
        const res = await bookService.findAll()
        setBooks(res)
    }
    const findAllType = async () => {
        const res = await bookService.findType()
        setBookTypes(res)
    }
    useEffect(() => {
        findAll()
        findAllType()
    }, [])
    if (!books) {
        return null
    }

    return (
        <>
            <Link to="/addBook" className={"btn btn-info"}>Add Book</Link>


            <Formik initialValues={{name: '', bookType: 1}} onSubmit={values => {
                const find = async () => {
                   const res=  await bookService.findByNameAndType(values.name, values.bookType)
                    console.log(values)
                    setBooks(res)
                }
                find()
            }}>
                <Form>
                    <div>
                        <label>Name</label>
                        <Field name="name" id="name" type="text"/>
                    </div>
                    <div>
                        <label>Name</label>
                        <Field name="bookType" id="bookType" as="select">
                            {bookTypes.map((bt, index) =>
                                <option value={bt.id} key={index}>{bt.name}</option>
                            )}
                        </Field>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
            <table className={"table table-warning"}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Book Type</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map((book, index) =>
                        <tr key={index}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.quantity}</td>
                            <td>{book.price}</td>
                            <td>{bookTypes.filter(bt => bt.id === book.bookType)[0]?.name}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    )
}