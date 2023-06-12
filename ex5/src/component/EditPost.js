import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {editPost, getPostById} from "../service/PostService";
import {Field, Form, Formik} from "formik";
import slugify from "slugify";
import * as Yup from "yup";


export function EditPost() {
    const navigate = useNavigate()
    const param = useParams()
    const [post, setPost] = useState("")
    const findById = async () => {
        const res = await getPostById(param.id)
        setPost(res)
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
                content: post?.content,
                updateAt: post?.updateAt,
                author: post?.author,
                authorEmail: post?.authorEmail
            }}
                    validationSchema={Yup.object({
                        title: Yup.string().required(),
                        slug: Yup.string().required(),
                        category: Yup.string().required(),
                        content: Yup.string().required(),
                        updateAt: Yup.string().required(),
                        author: Yup.string().required(),
                        authorEmail: Yup.string().required().matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")

                    })}
                    onSubmit={values => {
                        const updatePost = async () => {
                            const slug = slugify(values.title, {lower: true, strict: true})
                            await editPost(param.id, {...values, slug})
                            navigate("/")
                        }
                        updatePost()
                    }}>
                <Form>
                    <div>
                        <label>Title</label>
                        <Field  name="title"/>
                    </div>

                    <div>
                        <label>category</label>
                        <Field id="category" name="category"/>
                    </div>
                    <div>
                        <label>content</label>
                        <Field id="content" name="content"/>
                    </div>
                    <div>
                        <label>updateAt</label>
                        <Field id="updateAt" name="updateAt"/>
                    </div>
                    <div>
                        <label>author</label>
                        <Field id="author" name="author"/>
                    </div>
                    <div>
                        <label>author Email</label>
                        <Field id="authorEmail" name="authorEmail"/>
                    </div>
                    <button type="submit">Update</button>
                </Form>
            </Formik>
        </>
    )
}