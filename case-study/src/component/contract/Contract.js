import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export function ContractList() {
    const [contracts, setContract] = useState([])
    const contractList = async () => {
        const result = await axios.get(`http://localhost:2000/contract`)
        setContract(result.data)
    }
    useEffect(() => {
        contractList()
    }, [])
    return (
        <>
            <Link to={"/contract/create"}  className={"btn btn-danger"}>Add</Link>
            <table className={"table table-info"}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Customer Name</th>
                    <th>Facility</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Deposit</th>
                </tr>
                </thead>
                <tbody>
                {
                    contracts.map((contract,index)=>(
                        <tr key={index}>
                            <td>{contract.idContract}</td>
                            <td>{contract.customer?.name}</td>
                            <td>{contract.facility?.facilityName}</td>
                            <td>{contract.startDate}</td>
                            <td>{contract.endDate}</td>
                            <td>{contract.deposit}</td>
                        </tr>
                    ))
                }
                </tbody>

            </table>
        </>
    )
}