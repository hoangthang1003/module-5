import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {customerService} from "../../service/CustomerService";
import {facilityService} from "../../service/FacilityService";
import {useNavigate} from "react-router";

export function AddContract() {
    const navigate = useNavigate()
    const [customerList, setCustomerList] = useState([])
    const [facilityTypes, setFacilityTypes] = useState([])
    const findAllCustomer = async () => {
        const res = await customerService.findAll()
        setCustomerList(res)
    }
    const findAllFacility = async () => {
        const res = await facilityService.findAllType()
        setFacilityTypes(res)
    }

    useEffect(() => {
        findAllCustomer()
        findAllFacility()
    }, [])
    return (
        <>
            <Formik initialValues={{
                facility: '',
                numberOfGuests: '',
                customer: '',
                startDate: '',
                endDate: '',
                deposit: '',
                totalMoney: '',
            }}
                    validationSchema={Yup.object({
                        facility: Yup.string().required("Required"),
                        customer: Yup.string().required("Required"),
                        startDate: Yup.string().required("Required"),
                        numberOfGuests: Yup.string().required("Required"),
                        endDate: Yup.string().required("Required"),
                        deposit: Yup.string().required("Required"),
                        totalMoney: Yup.string().required("Required"),
                    })}

                    onSubmit={values => {
                        console.log(values)
                        const addContract = async () => {
                            await axios.post(`http://localhost:2000/contract`, { ...values })
                            navigate("/contract")
                        }
                        addContract()
                    }}>
                <div className="contact-us">
                    <h1>Add Contract</h1>
                    <Form>
                        {/*<div>*/}
                        {/*    <label htmlFor="idContract" style={{fontWeight: "bold"}} >Mã hợp đồng:</label>*/}
                        {/*    <span style={{color: "red"}}>*</span>*/}
                        {/*    <Field type="text" id="idContract" name="idContract" required="" className={"form-control"}/>*/}
                        {/*</div>*/}
                        <div>
                            <label htmlFor="customer" style={{fontWeight: "bold"}} >Customer:</label>
                            <span style={{color: "red"}}>*</span>
                            <Field as="select" id="customer" name="customer" required="" className={"form-control"}>
                                {customerList.map((customer,index)=>
                                    <option value={customer.id} key={index}>{customer.name}</option>
                                )}
                            </Field>
                        </div>
                        <div>
                            <label htmlFor="facility"  style={{fontWeight: "bold"}} >Facility:</label>
                            <span style={{color: "red"}}>*</span>
                            <Field as="select" id="facility" name="facility" required="" className={"form-control"} >
                                {facilityTypes.map((facility,index)=>
                                    <option value={facility.id} key={index}>{facility.name}</option>
                                )}
                            </Field>
                        </div>
                        <div>
                            <label htmlFor="numberOfGuests" style={{fontWeight: "bold"}} >Number Of Guests:</label>
                            <span style={{color: "red"}}>*</span>

                            <Field className={"form-control"} type="text" id="numberOfGuests" name="numberOfGuests" required=""/>
                        </div>
                        <div>
                            <label htmlFor="startDay" style={{fontWeight: "bold"}} >Check In:</label>
                            <span style={{color: "red"}}>*</span>
                            <Field className={"form-control"} type="text" id="startDay" name="startDay" required=""/>
                        </div>
                        <div>
                            <label htmlFor="endDay" style={{fontWeight: "bold"}} >Check Out:</label>
                            <span style={{color: "red"}}>*</span>
                            <Field className={"form-control"} type="text" id="endDay" name="endDay" required=""/>
                        </div>
                        <div>
                            <label htmlFor="deposit" style={{fontWeight: "bold"}} >Deposits:</label>
                            <span style={{color: "red"}}>*</span>
                            <Field className={"form-control"} type="text" id="deposit" name="deposit" required=""/>
                        </div>
                        <div>
                            <label htmlFor="idRoom" style={{fontWeight: "bold"}} >Id Room:</label>
                            <span style={{color: "red"}}>*</span>
                            <Field  className={"form-control"} type="text" id="idRoom" name="idRoom" required=""/>
                        </div>
                        <div>
                            <label htmlFor="total" style={{fontWeight: "bold"}} >Tổng số tiền thanh toán:</label>
                            <span style={{color: "red"}}>*</span>
                            <Field className={"form-control"} type="text" id="total" name="total" required=""/>
                        </div>


                        <button type="submit" className="btn btn-info">Add</button>
                    </Form>
                </div>
            </Formik>
        </>
    )

}