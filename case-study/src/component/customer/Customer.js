import React, {useEffect, useState} from "react";
import {customerService, findAll} from "../../service/CustomerService";
import {Link} from "react-router-dom";

export function CustomerList() {
    const [customers, setCustomers] = useState([])
    const [customerType, setCustomerType] = useState(null)
    const [idDelete, setIdDelete] = useState(null)
    const [nameDelete, setNameDelete] = useState(null)
    const customerList = async () => {
        const result = await findAll()
        setCustomers(result)
    }
    const findAllType = async () => {
        const res = await customerService.findAllType()
        setCustomerType(res)
    }
    const getPropsCustomer = (id,name) => {
        setIdDelete(id)
        setNameDelete(name)
    }
    const handleDelete = async (id) => {
        await customerService.deleteById(id)
        customerList()
    }
    useEffect(() => {
        findAllType()
        customerList()

    }, [])
    return (
        <>
            <Link to="/customer/addCustomer" className={"btn btn-warning"}>Add new</Link>
            <table className={"table table-dark"}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Birth Day</th>
                    <th>Id Card</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Customer Type</th>
                    <th>Action</th>
                </tr>
                {
                    customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.dateOfBirth}</td>
                            <td>{customer.idCard}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                            <td>{customerType.filter(ct => ct.id === customer.customerType)[0]?.name}</td>
                            <td>
                                <Link to={`/customer/edit/${customer.id}`} className="btn btn-primary">Edit</Link>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => getPropsCustomer(customer.id, customer.name)}
                                >Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
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
