import React, {useEffect, useState} from "react";
import {findAll} from "../../service/CustomerService";

export function CustomerList() {
    const [customers,setCustomers] = useState([])
    // const [idDelete,setIdDelete]= useState(null)
    // const [nameDelete,setNameDelete]= useState(null)
    const customerList = async () => {
        const result = await findAll()
        setCustomers(result)
    }
    useEffect(()=>{
        customerList()
    },[])
    return(
        <>
        <table>
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
            </tr>
            {
                customers.map((customer,index)=>(
                    <tr key={index}>
                        <td>{customer.name}</td>
                        <td>{customer.gender}</td>
                        <td>{customer.dataOfBirth}</td>
                        <td>{customer.idCard}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.email}</td>
                        <td>{customer.address}</td>
                        <td>{customer.customerType?.name}</td>
                    </tr>
                ))
            }
        </table>
        </>
    )
}