import {Field, Form, Formik} from "formik";
import slugify from "slugify";
import { editPost, getPostById} from "../service/PostService";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";

export function EditPost() {
    const param = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    const findById = async () => {
        const result = await getPostById(param.id)

        setPost(result)
    }
    useEffect(() => {
        findById()
    }, [param.id])
    if (!post) {
        return null
    }


    return (
        <>
            <Formik initialValues={{
                id: post?.id,
                title: post?.title,
                slug: post?.slug,
                category: post?.category,
                updatedAt: post?.updatedAt
            }}
                    onSubmit={(values => {
                        const slug = slugify(values.title, {lower: true, strict: true})
                        const updatePost = async () => {
                            await editPost(post?.id,{...values, slug})
                            navigate("/")
                        };
                        updatePost()
                        console.log(values)
                    })}>
                <Form>
                    <div>
                        <Field id="id" name={"id"} type={"hidden"}/>
                        <label htmlFor={"title"}>Title:</label>
                        <br/>
                        <Field id="title" name={"title"} placeholder="Nhập tiêu đề"/>
                    </div>
                    <div>
                        <label htmlFor={"category"}>Category:</label>
                        <br/>
                        <Field id="category" name={"category"} placeholder="Nhập tên tác giả"/>
                    </div>
                    <div>
                        <label htmlFor={"updatedAt"}>Day:</label>
                        <br/>
                        <Field id="updatedAt" name={"updatedAt"}  placeholder="Nhập tên tác giả"/>
                    </div>

                    <button type={"submit"} className="btn btn-info">Add</button>
                </Form>
            </Formik>
        </>
    )

}