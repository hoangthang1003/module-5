import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {postService} from "../service/PostService";

export function PostList() {
const [posts,setPosts] = useState([])


    const findAll = async () => {
    const result = await postService.findAllPost()
        setPosts(result)
    }
    useEffect(()=>{
        findAll()
    },[])


    return(
        <>
            <Link to={"/create"}>Create</Link>
        <table>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Thumbnail URL</th>
            </tr>
            {posts.map((post,index)=>
                <tr key={index}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.category}</td>
                    <td>{post.thumbnail_url}</td>

                </tr>
            )}
        </table>
        </>
    )
}