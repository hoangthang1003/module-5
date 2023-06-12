import React, {useEffect, useState} from "react";
import {findAll} from "../../service/FacilityService";
import {Link, NavLink} from "react-router-dom";

export function FacilityList() {
    const [facilities, setFacilities] = useState([])
    const facilityList = async () => {
        const result = await findAll()
        setFacilities(result)
    }

    useEffect(() => {
        facilityList()
    }, [])

    return (
        <>
            <div className={"bg"}>
                <div>
                    <h2 className="text-center fw-bold pt-4">Danh Sách Tất Cả Các Dịch Vụ</h2>
                </div>
                <div>
                    <NavLink className="btn btn-dark" style={{marginLeft: 120}} to='/addFacility'>
                        Thêm Cơ Sở Dịch Vụ Mới
                    </NavLink>
                    <div className="row mx-0 mt-3 py-1" style={{padding: "0 100px"}}>
                        {
                            facilities.map((facilities) => (
                                <div className="col-4 d-flex justify-content-center" key={facilities.id}>
                                    <div className="card shadow mb-5 mt-2">
                                        <img
                                            src={facilities.img}
                                            className="card-img-top w-100 h-100"
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{facilities.name}</h5>
                                            <p className="card-text">Diện tích phòng: {facilities.area} </p>
                                            <NavLink to={`/facilityEdit/${facilities.id}`} className="btn btn-primary"><i
                                                className="ti-pencil-alt"/>Edit</NavLink>
                                            <button data-bs-toggle="modal"
                                                    data-bs-target="#facilityDelete" className="btn btn-danger ms-2"><i
                                                className="ti-trash"/>Delete</button>
                                            <NavLink to={`/facility-detail/${facilities.id}`} className="float-end btn btn-info"><i
                                                className="ti-info fs-3 fw-bold"/>Show All</NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


        </>
    )
}