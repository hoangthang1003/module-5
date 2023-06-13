import {Field, Form, Formik} from "formik";
import React from "react";
import {bookService} from "../service/BookService";
import {useNavigate} from "react-router";

export function AddBook() {
    const navigate = useNavigate();
    return(
        <>
        <Formik initialValues={{title:'',quantity:''}} onSubmit={values => {
            const addBook = async () => {
                await bookService.addBook(values)
                navigate("/")
            }
            addBook()
        }}>
            <Form>
                <div>
                    <label>Title</label>
                    <Field name="title" plaholder={"Nhập tên"}/>
                </div>
                <div>
                    <label>Quantity</label>
                    <Field name="quantity" plaholder={"Nhập giá tiền"}/>
                </div>
                <button type={"submit"}>Add</button>
            </Form>
        </Formik>
        </>
    )
}