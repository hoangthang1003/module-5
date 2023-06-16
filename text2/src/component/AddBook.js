import React, {useEffect, useState} from "react";
import {bookService} from "../service/BookService";
import {Field, Form, Formik} from "formik";

export function AddBook() {
const [bookType,setBookTypes] = useState([])
    const findAllType = async () => {
    const rs =await bookService.findType()
        setBookTypes(rs)
    }
    useEffect(()=> {
        findAllType()
    },[])

    return(
        <>
        <Formik initialValues={{name:'',quantity:'',bookType: 1 , price: 0 }}
                onSubmit={values => {
                    const addBook = async () => {
                        await bookService.addBook(values)
                    }
                    addBook()
                }}>
            <Form>
                <div>
                    <label>Name:</label>
                    <Field id='name' name='name' type='text'/>
                </div>
                <div>
                    <label>Quantity:</label>
                    <Field id='quantity' name='quantity'/>
                </div>
                <div>
                    <label>Book Type:</label>
                    <Field id='bookType' name='bookType'>
                        {bookType.map((bt,index)=>
                        <option value={bt.id} key={index}>{bt.name}</option>
                        )}
                    </Field>
                </div>
                <div>
                    <label>Price:</label>
                    <Field id='price' name='price' type="number"/>
                </div>
                <button type={"submit"}>Click</button>
            </Form>
        </Formik>
        </>
    )
}