import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getPostById} from "../service/PostService";

export function Detail() {
    const param = useParams();
    const [post,setPost] = useState({})
    const findPostById = async () => {
        const result = await getPostById(param.id)
        console.log(result)
        setPost(result)
    }
    useEffect(()=>{
        findPostById()
    },[param.id])
return(
    <>
        <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.slug}</p>
                    <p className="card-text">{post.category}</p>
                    <p className="card-text">{post.content}</p>
                    <p className="card-text">{post.updateAt}</p>
                    <p className="card-text">{post.author}</p>
                    <p className="card-text">{post.authorEmail}</p>
                    <Link to="/" className="btn btn-primary">Come back</Link>
                </div>
        </div>
    </>
)
}