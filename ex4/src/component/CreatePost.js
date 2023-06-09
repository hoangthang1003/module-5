import {Field, Form, Formik} from "formik";
import React from "react";

export function createPost() {

    return (
        <>
            <Formik initialValues={{title:'',thumbnail_url:'',slug:'',category:''}}
                    onSubmit={}>
                <Form>
                    <div>
                        <label htmlFor="title">Title</label>
                        <Field id="title" name="title"/>
                    </div>
                    <div>
                        <label htmlFor="thumbnail_url">thumbnail_url</label>
                        <Field id="thumbnail_url" name="thumbnail_url"/>
                    </div>
                    <div>
                        <label htmlFor="slug">slug</label>
                        <Field id="slug" name="slug"/>
                    </div>
                    <div>
                        <label htmlFor="category">category</label>
                        <Field id="category" name="category"/>
                    </div>
                    
                </Form>
            </Formik>
        </>
    )
}