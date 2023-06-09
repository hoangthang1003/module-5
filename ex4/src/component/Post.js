import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export function PostList() {
const [posts,setPosts] = useState([])
    const findAll = async () => {
    const result = await axios.get(`https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts`)
        setPosts(result.data)
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