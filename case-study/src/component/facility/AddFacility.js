import React, {useEffect, useState} from "react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import {findAllType} from "../../service/FacilityService";

function FacilityCreate() {
    const [facilityTies,setFacilities] = useState([])
    const findAll = async () => {
        const result = await findAllType()
        setFacilities(result)
    }
    useEffect(()=>{
        findAll()
    },[])
    return (
        <Formik initialValues={{
            name: "",
            area: "",
            cost: "",
            maxPeople: "",
            standard: "",
            description: "",
            poolArea: "",
            numberOfFloors: "",
            facilityFree: "",
            rentType: [],
            facilityType: []
        }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Không được để trống"),
                    area: Yup.number()
                        .required("Không được để trống"),
                    cost: Yup.number()
                        .required("Không được để trống"),
                    maxPeople: Yup.number()
                        .required("Không được để trống"),
                    standard: Yup.string()
                        .required("Không được để trống"),
                    description: Yup.string()
                        .required("Không được để trống"),
                    poolArea: Yup.number()
                        .required("Không được để trống"),
                    numberOfFloors: Yup.number()
                        .required("Không được để trống")
                })
                }
                onSubmit={(values) => {
                    console.log(values)
                }}>

            <div>
                <div className="p-3">

                    <h2 className="text-center fw-bold">FACILITY CREATE</h2>
                    <nav className="navbar navbar-expand-lg py-0 my-0">
                        <div className="container-fluid">

                        </div>
                    </nav>
                </div>


                <form >
                    <div className="form-group">
                        <label htmlFor="name" style={{ fontWeight: "bold" }}>
                            Tên:<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="name" className="form-control" placeholder="Nhập tên"
                                   name="name" />

                        </div>
                        <div>
                            <ErrorMessage name='name' component='span' className='form-err text-danger' />
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="area" style={{ fontWeight: "bold" }}>
                            Diện tích:<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="area" className="form-control" placeholder="Nhập diện tích"
                                   name="area" />

                        </div>
                        <div>
                            <ErrorMessage name='area' component='span' className='form-err text-danger' />
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="cost" style={{ fontWeight: "bold" }}>
                            Giá tiền:<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="cost" className="form-control" placeholder="Nhập giá tiền"
                                   name="cost" />

                        </div>
                        <div>
                            <ErrorMessage name='cost' component='span' className='form-err text-danger' />
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="maxPeople" style={{ fontWeight: "bold" }}>
                            Số người tối đa:<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="maxPeople" className="form-control"
                                   placeholder="Nhập số người tối đa" name="maxPeople" />

                        </div>
                        <div>
                            <ErrorMessage name='maxPeople' component='span' className='form-err text-danger' />
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="standard" style={{ fontWeight: "bold" }}>
                            Tiêu chuẩn phòng:<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="standard" className="form-control"
                                   placeholder="Tiêu chuẩn phòng"
                                   name="standard" />

                        </div>
                        <div>
                            <ErrorMessage name='standard' component='span' className='form-err text-danger' />
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="description" style={{ fontWeight: "bold" }}>
                            Mô tả:<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="description" className="form-control"
                                   placeholder="Nhập mô tả" name="description" />

                        </div>
                        <div>
                            <ErrorMessage name='description' component='span' className='form-err text-danger' />
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="poolArea" style={{ fontWeight: "bold" }}>
                            Diện tích hồ bơi:<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="poolArea" className="form-control"
                                   placeholder="Nhập diện tích hồ bơi" name="poolArea" />

                        </div>
                        <div>
                            <ErrorMessage name='poolArea' component='span' className='form-err text-danger' />
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="numberOfFloors" style={{ fontWeight: "bold" }}>
                            Số tầng:<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="numberOfFloors" className="form-control"
                                   placeholder="Nhập số tầng"
                                   name="numberOfFloors" />

                        </div>
                        <div>
                            <ErrorMessage name='numberOfFloors' component='span' className='form-err text-danger' />
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="facilityFree" style={{ fontWeight: "bold" }}>
                            Dịch vụ miễn phí:
                        </label>
                        <div className="input-group">
                            <Field type="text" id="facilityFree" className="form-control"
                                   placeholder="Nhập dịch vụ miễn phí" name="facilityFree" />

                        </div>
                        <div>
                            <ErrorMessage name='facilityFree' component='span' className='form-err text-danger' />
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="facilityType" style={{ fontWeight: "bold" }}>
                            Loại dịch vụ:<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                            <Field as="select" id="facilityType" className="form-control" name="facilityType">
                                <option value={facilityTies.id}>{facilityTies.name}</option>
                            </Field>

                        </div>
                        <div>
                            <ErrorMessage name='facilityType' component='span' className='form-err text-danger' />
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="rentType" style={{ fontWeight: "bold" }}>
                            Kiểu thuê:<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                            <select id="rentType" className="form-control" name="rentType">
                                <option />
                            </select>

                        </div>
                        <div>
                            <ErrorMessage name='rentType' component='span' className='form-err text-danger' />
                        </div>
                    </div>

                    <div className="mt-3 text-center">
                        <button
                            className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark">
                            Save
                        </button>
                    </div>
                </form>
            </div>

        </Formik>
    )
}

export default FacilityCreate;