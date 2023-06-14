import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {facilityService} from "../../service/FacilityService";
import {useNavigate} from "react-router";

function FacilityCreate() {
    const [facilityTiesType, setFacilitiesType] = useState([])
    const [facilityTiesFrees, setFacilitiesFrees] = useState([])
    const [facilityTiesRentTypes, setFacilityTiesRentTypes] = useState([])
    const navigate = useNavigate();
    const findAllType = async () => {
        const result = await facilityService.findAllType()
        setFacilitiesType(result)
    }
    const findAllRentType = async () => {
        const result = await facilityService.findAllRentType()
        setFacilityTiesRentTypes(result)
    }

    const findFacilityFree = async () => {
        const result1 = await facilityService.findAllFacilitiesFree()
        setFacilitiesFrees(result1)
    }
    useEffect(() => {
        findAllType()
        findFacilityFree()
        findAllRentType()
    }, [])
    return (
        <Formik initialValues={{
            img: "",
            name: "",
            area: "",
            cost: "",
            maxPeople: "",
            standard: "",
            description: "",
            poolArea: "",
            numberOfFloors: "",
            facilityFree: [],
            rentType: 1,
            facilityType: 1
        }}
                validationSchema={Yup.object({
                    img: Yup.string()
                        .required("Không được để trống"),
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
                    const  createNew = async () => {
                        await facilityService.addFacility(values)
                        navigate("/facility")
                    }
                    createNew()
                }}>

            <div>
                <div className="p-3">

                    <h2 className="text-center fw-bold">FACILITY CREATE</h2>
                    <nav className="navbar navbar-expand-lg py-0 my-0">
                        <div className="container-fluid">

                        </div>
                    </nav>
                </div>


                <Form>
                    <div className="form-group">
                        <label htmlFor="img" style={{fontWeight: "bold"}}>
                            Tên:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="img" className="form-control" placeholder="Nhập img"
                                   name="img"/>

                        </div>
                        <div>
                            <ErrorMessage name='img' component='span' className='form-err text-danger'/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" style={{fontWeight: "bold"}}>
                            Tên:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="name" className="form-control" placeholder="Nhập tên"
                                   name="name"/>

                        </div>
                        <div>
                            <ErrorMessage name='name' component='span' className='form-err text-danger'/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="area" style={{fontWeight: "bold"}}>
                            Diện tích:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="area" className="form-control" placeholder="Nhập diện tích"
                                   name="area"/>

                        </div>
                        <div>
                            <ErrorMessage name='area' component='span' className='form-err text-danger'/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="cost" style={{fontWeight: "bold"}}>
                            Giá tiền:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="cost" className="form-control" placeholder="Nhập giá tiền"
                                   name="cost"/>

                        </div>
                        <div>
                            <ErrorMessage name='cost' component='span' className='form-err text-danger'/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="maxPeople" style={{fontWeight: "bold"}}>
                            Số người tối đa:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="maxPeople" className="form-control"
                                   placeholder="Nhập số người tối đa" name="maxPeople"/>

                        </div>
                        <div>
                            <ErrorMessage name='maxPeople' component='span' className='form-err text-danger'/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="standard" style={{fontWeight: "bold"}}>
                            Tiêu chuẩn phòng:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="standard" className="form-control"
                                   placeholder="Tiêu chuẩn phòng"
                                   name="standard"/>

                        </div>
                        <div>
                            <ErrorMessage name='standard' component='span' className='form-err text-danger'/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="description" style={{fontWeight: "bold"}}>
                            Mô tả:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="description" className="form-control"
                                   placeholder="Nhập mô tả" name="description"/>

                        </div>
                        <div>
                            <ErrorMessage name='description' component='span' className='form-err text-danger'/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="poolArea" style={{fontWeight: "bold"}}>
                            Diện tích hồ bơi:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="poolArea" className="form-control"
                                   placeholder="Nhập diện tích hồ bơi" name="poolArea"/>

                        </div>
                        <div>
                            <ErrorMessage name='poolArea' component='span' className='form-err text-danger'/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="numberOfFloors" style={{fontWeight: "bold"}}>
                            Số tầng:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <Field type="text" id="numberOfFloors" className="form-control"
                                   placeholder="Nhập số tầng"
                                   name="numberOfFloors"/>

                        </div>
                        <div>
                            <ErrorMessage name='numberOfFloors' component='span' className='form-err text-danger'/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="facilityFree" style={{fontWeight: "bold"}}>
                            Dịch vụ miễn phí:
                        </label>
                        {
                            facilityTiesFrees.map((facilityTiesFree, index) =>
                                <>
                                    <br/>
                                    <Field type="checkbox" id={facilityTiesFree.id}
                                           value={facilityTiesFree.name} name="facilityFree" key={index}/>
                                    <label>{facilityTiesFree.name}</label>

                                </>
                            )
                        }


                        <div>
                            <ErrorMessage name='facilityFree' component='span' className='form-err text-danger'/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="facilityType" style={{fontWeight: "bold"}}>
                            Loại dịch vụ:<span style={{color: "red"}}>*</span>
                        </label>
                        <div>
                            <Field as="select" id={facilityTiesType.id} className="form-control" name="facilityType">
                                {
                                    facilityTiesType.map((facilityTiesFree, index) =>
                                        <option value={facilityTiesFree.id}
                                                key={index}>{facilityTiesFree.name} </option>
                                    )
                                }
                            </Field>

                        </div>
                        <div>
                            <ErrorMessage name='facilityType' component='span' className='form-err text-danger'/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="rentType" style={{fontWeight: "bold"}}>
                            Kiểu thuê:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <Field as="select" id={facilityTiesType.id} className="form-control" name="rentType">
                                {
                                    facilityTiesRentTypes.map((facilityTiesRentType, index) =>
                                        <option value={facilityTiesRentType.id}
                                                key={index}>{facilityTiesRentType.name} </option>
                                    )
                                }
                            </Field>

                        </div>
                        <div>
                            <ErrorMessage name='rentType' component='span' className='form-err text-danger'/>
                        </div>
                    </div>

                    <div className="mt-3 text-center">
                        <button
                            className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark">
                            Save
                        </button>
                    </div>
                </Form>
            </div>

        </Formik>
    )
}

export default FacilityCreate;