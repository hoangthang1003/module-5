import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {customerService} from "../../service/CustomerService";

export function AddContract() {
    const [customerList, setCustomerList] = useState([])
    const findAddCustomer = async () => {
        const res = await customerService.findAll()
        setCustomerList(res)
    }
    useEffect(() => {
        findAddCustomer()
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
                        endDate: Yup.string().required("Required"),
                        deposit: Yup.string().required("Required"),
                        totalMoney: Yup.string().required("Required"),
                    })}

                    onSubmit={values => {
                        const addContract = async () => {
                            await axios.put(`http://localhost:2000/contract`, {...values})
                        }
                        addContract()
                    }}>
                <div className="contact-us">
                    <h1>Add Contract</h1>
                    <Form>
                        <div><label htmlFor="idContract">Mã hợp đồng:</label>
                            <Field type="text" id="idContract" name="idContract" required=""/>
                        </div>
                        <div><label htmlFor="customer">Customer:</label>
                            <Field type="text" id="customer" name="customer" required=""/>
                        </div>
                        <div><label htmlFor="numberOfGuests">Number Of Guests:</label>
                            <Field type="text" id="numberOfGuests" name="numberOfGuests" required=""/>
                        </div>
                        <div><label htmlFor="startDay">Check In:</label>
                            <Field type="date" id="startDay" name="startDay" required=""/>
                        </div>
                        <div><label htmlFor="endDay">Check Out:</label>
                            <Field type="date" id="endDay" name="endDay" required=""/>
                        </div>
                        <div><label htmlFor="deposit">Deposits:</label>
                            <Field type="text" id="deposit" name="deposit" required=""/>
                        </div>
                        <div><label htmlFor="idRoom">Id Room:</label>
                            <Field type="text" id="idRoom" name="idRoom" required=""/>
                        </div>
                        <div><label htmlFor="total">Tổng số tiền thanh toán:</label>
                            <Field type="text" id="total" name="total" required=""/>
                        </div>


                        <button type="submit" className="btn btn-info">Add</button>
                    </Form>
                </div>
            </Formik>
        </>
    )

}