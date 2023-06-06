import {Field, Form, Formik} from 'formik';
import React from "react";
import {addPost} from "../service/PostService";
import slugify from "slugify";
import {useNavigate} from "react-router";
import * as Yup from 'yup';


export function AddPost() {
    const navigate = useNavigate()
// curDate sẽ lưu trữ thời gian hiện tại
    var curDate = new Date();
    // Lấy ngày hiện tại
    const curDay = curDate.getDate();
    console.log(curDay);

    // Lấy tháng hiện tại
    const curMonth = curDate.getMonth() + 1;
    console.log(curMonth);

    // Lấy năm hiện tại
    const curYear = curDate.getFullYear();
    console.log(curYear);
    // curDate sẽ lưu trữ thời gian hiện tại
    const day = curDay + "-" + curMonth + "-" + curYear;

    return (
        <>
            <Formik initialValues={{title: '', slug: '', category: '', updatedAt: day}}
                    validationSchema={
                        Yup.object({
                                title: Yup.string().required(),
                                category: Yup.string().required()
                            }
                        )}
                    onSubmit={(values => {
                        const slug = slugify(values.title, {lower: true, strict: true})
                        const addBlog = async () => {
                            await addPost({...values, slug})
                            navigate("/")
                        };
                        addBlog()
                        console.log(values)
                    })}>
                <Form>
                    <div>
                        <label htmlFor={"title"}>Title:</label>
                        <br/>
                        <Field id="title" name={"title"} placeholder="Nhập tiêu đề"/>
                    </div>
                    <div>
                        <label htmlFor={"category"}>Category:</label>
                        <br/>
                        <Field id="category" name={"category"} placeholder="Nhập tên tác giả"/>
                    </div>
                    <button type={"submit"} className="btn btn-info">Add</button>
                </Form>
            </Formik>
        </>
    )

}