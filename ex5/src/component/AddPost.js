import {Field, Form, Formik} from "formik";
import React from "react";
import {useNavigate} from "react-router";
import slugify from "slugify";
import {addPost} from "../service/PostService";
import * as Yup from "yup";

export function AddPost() {
    const navigate = useNavigate()
// curDate sẽ lưu trữ thời gian hiện tại
    const curDate = new Date();
    // Lấy ngày hiện tại
    const curDay = curDate.getDate();
    // Lấy tháng hiện tại
    const curMonth = curDate.getMonth() + 1;
    // Lấy năm hiện tại
    const curYear = curDate.getFullYear();

    // curDate sẽ lưu trữ thời gian hiện tại
    const day = curDay + "-" + curMonth + "-" + curYear;
    return(
        <>
        <Formik initialValues={{title:'',slug:'',category:'',content:'',updateAt:day ,author:'',authorEmail:''}}
                validationSchema={Yup.object({
                    title:Yup.string().required(),
                    slug:Yup.string().required(),
                    category:Yup.string().required(),
                    content:Yup.string().required(),
                    updateAt:Yup.string().required(),
                    author:Yup.string().required(),
                    authorEmail:Yup.string().required().matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")

                })}
                onSubmit={values => {
                    const newPost = async () => {
                       const slug = slugify(values.title,{lower:true,strict:true})
                        await addPost({...values,slug})
                        navigate("/")

                    }
                    newPost()
                }}>
            <Form>
                <div>
                    <label>Title</label>
                    <Field id="title" name="title"/>
                </div>
                <div>
                    <label>Category</label>
                    <Field id="category" name="category"/>
                </div>
                <div>
                    <label>Content</label>
                    <Field id="content" name="content"/>
                </div>
                <div>
                    <label>Author</label>
                    <Field id="author" name="author"/>
                </div>
                <div>
                    <label>Author EMail</label>
                    <Field id="authorEmail" name="authorEmail"/>
                </div>
                <button type="submit" className="btn btn-primary">Add new</button>

            </Form>
        </Formik>
        </>
    )
}