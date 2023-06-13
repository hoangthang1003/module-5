import {Field, Form, Formik} from "formik";
import {bookService} from "../service/BookService";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";

export function EditBook() {
    const param = useParams();
    const navigate = useNavigate();
    const [book,setBook] = useState(null)
    const findById = async () => {
        const res= await bookService.findById(param.id)
        setBook(res)
    }
    useEffect(()=>{
        findById()
    },[param.id])
    if(!book){
        return null
    }


    return(
        <>
            <Formik initialValues={{title:book?.title,quantity:book?.quantity}} onSubmit={values => {
                const editBook = async () => {
                    await bookService.editBook(param.id,values)
                    navigate("/")
                }
                editBook()
            }}>
                <Form>
                    <div>
                        <label>Title</label>
                        <Field name="title"  id="title"/>
                    </div>
                    <div>
                        <label>Quantity</label>
                        <Field name="quantity" />
                    </div>
                    <button type={"submit"}>Add</button>

                </Form>
            </Formik>
        </>
    )
}