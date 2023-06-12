import React from "react";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";
import {createBlog} from "../redux/action/Blogs";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

export function AddBlog() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    return (
        <>
            <Formik initialValues={{title: '', slug: '', category: '', thumbnail_url: ''}} onSubmit={(values,{setSubmitting}) => {
                const create = async () => {
                    dispatch(createBlog(values))
                    setSubmitting(false);
                    toast(`Blog ${values.name} create OK`)
                    navigate('/')
                }
                create()
            }
            }>
                <Form>
                    <div>
                        <lable>Title</lable>
                        <Field type="text" id="title" name="title"/>
                    </div>
                    <div>
                        <lable>Slug</lable>
                        <Field  type="text" id="slug" name="slug"/>
                    </div>
                    <div>
                        <lable>Category</lable>
                        <Field  type="text" id="category" name="category"/>
                    </div>
                    <div>
                        <lable>Thumbnail URl</lable>
                        <Field  type="text" id="thumbnail_url" name="thumbnail_url"/>
                    </div>
                    <button type="submit">Submit</button>


                </Form>
            </Formik>
        </>
    )
}