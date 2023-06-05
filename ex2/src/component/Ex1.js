import React, {useEffect, useState} from "react";

export function Exercise() {
    const posts = [
        {
            "id":1,
            "title": "5 Best Crypto Performers During The 2022 Market Flop",
            "slug": "5-best-crypto-performers-during-the-2022-market-flop",
            "category": "Crypto News",
            "updatedAt": "21 hours ago"
        },
        {
            "id":2,
            "title": " Top crypto funding stories of 2022  ",
            "slug": "top-crypto-funding-stories-of-2022",
            "category": "New Year Special",
            "updatedAt": "a day ago"
        },
        {
            "id":3,
            "title": " 2023 will see the death of play-to-earn gaming ",
            "slug": "2023-will-see-the-death-of-playtoearn-gaming",
            "category": " Opinion",
            "updatedAt": "a day ago"
        },
        {
            "id":4,
            "title": " US lawmakers under pressure following FTX collapse: Report  ",
            "slug": "us-lawmakers-under-pressure-following-ftx-collapse-report",
            "category": " News",
            "updatedAt": "2 days ago"
        },
        {
            "id":5,
            "title": "A Crypto Holiday Special: Past, Present, And Future With Material Indicators",
            "slug": "a-crypto-holiday-special-past-present-and-future-with-material-indicators",
            "category": "Interviews",
            "updatedAt": "2 days ago"
        }
    ]
    const [idDelete,setIdDelete] = useState(null);
    const [nameDelete,setNameDelete] = useState(null);
    const getProps = (id,name) => {
        setIdDelete(id);
        setNameDelete(name)
    }


    const handleDelete = () => {
        const postDelete = posts.filter(post => post.id === idDelete)
        posts.splice(<postDelete className="id"></postDelete>,1)

    }
    return (
        <>
            <table className="table-danger">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Slug</th>
                    <th>Category</th>
                    <th>Update Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map((value, index) =>
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.slug}</td>
                            <td>{value.category}</td>
                            <td>{value.updatedAt}</td>
                            <tr>Edit</tr>
                            <tr> <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={() => getProps(value.id, value.title)}
                            >Delete
                            </button> </tr>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <div className="modal" tabIndex={-1} id={"exampleModal"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-danger">Bảng xóa khách hàng</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div>Bạn có muốn xóa <h5 className={"text-danger"}>{nameDelete}</h5></div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" data-bs-dismiss="modal"
                                    className="btn btn-danger" onClick={() => handleDelete(idDelete)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}