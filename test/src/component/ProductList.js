import React, {useEffect, useState} from "react";
import {productService} from "../service/ProductService";
// import {Link} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";

export function ProductList() {
    const [products, setProducts] = useState(null)
    const [idDelete, setIdDelete] = useState(null)
    const [nameDelete, setNameDelete] = useState(null)
    const [productTypes, setProductTypes] = useState([])

    const findAll = async () => {
        const res = await productService.findAll()
        setProducts(res)
    }
    const findAllType = async () => {
        const res = await productService.findAllType()
        setProductTypes(res)
    }
    const getPropsCustomer = (id,name) => {
        setIdDelete(id)
        setNameDelete(name)
    }
    const handleDelete = async (id) => {
        await productService.deleteProduct(id)
        findAll()
    }
    useEffect(() => {
        findAll()
        findAllType()

    }, [])
    if (!products) {
        return null
    }


    return (
        <>
            <Formik initialValues={{name: ''}}
                    onSubmit={values => {
                        const findAllByIdAndName = async () => {
                            const res = await productService.findByNameAndType(values)
                            setProducts(res)
                            console.log()
                            if (res.length === 0) {
                                document.write("không tìm thấy")
                            }

                        }
                        findAllByIdAndName()
                    }}>
                <Form>
                    <div>
                        <label>Name</label>
                        <Field name={"name"} id="name"/>
                        <button type={"submit"}>Tìm kiếm</button>

                    </div>
                </Form>
            </Formik>
            <Link to="/addProduct" ><button classname="btn btn-info">Add New</button></Link>

            <table className={"table table-striped"}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Mô tả</th>
                    <th>Loại sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Ngày nhập</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {

                    products.map((value, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.idProduct}</td>
                            <td>{value.name}</td>
                            <td>{value.more}</td>
                            <td>{productTypes.filter(pt => pt.id === value.productType.id)[0]?.name}</td>
                            <td>{value.price}</td>
                            <td>{value.quantity}</td>
                            <td>{value.date}</td>
                            <td> <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={() => getPropsCustomer(value.id, value.name)}
                            >Delete
                            </button>
                             </td>
                            <td>
                                <Link to={`/editProduct/${value.id}`}>Edit</Link>
                            </td>
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