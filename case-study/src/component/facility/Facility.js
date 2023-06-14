import React, {useEffect, useState} from "react";
import {facilityService, findAll} from "../../service/FacilityService";
import {Link, NavLink} from "react-router-dom";

export function FacilityList() {
    const [facilities, setFacilities] = useState([])
    const [idDelete, setIdDelete] = useState([])
    const [nameDelete, setNameDelete] = useState([])
    const facilityList = async () => {
        const result = await findAll()
        setFacilities(result)
    }
    const getProps = (id,name) => {
        setIdDelete(id)
        setNameDelete(name)
    }
    const handleDelete = async (id) => {
        await facilityService.deleteById(id)
        facilityList()
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
                                                    data-bs-target="#facilityDelete" className="btn btn-danger ms-2" onClick={()=>getProps(facilities.id,facilities.name)}><i
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
            <div className="modal" tabIndex={-1} id={"facilityDelete"}>
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
                                    className="btn btn-danger" onClick={()=>handleDelete(idDelete)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}