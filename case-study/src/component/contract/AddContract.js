import React from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";

export function AddContract() {

return(
    <>
        <Formik initialValues={{
            facility: '',
            numberOfGuests:'',
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

                onSubmit={}>
            <div className="contact-us">
                <h1>Add Contract</h1>
                <Form>
                    <label htmlFor="idContract">Mã hợp đồng:</label>
                    <Field type="text" id="idContract" name="idContract" required=""/>
                    <label htmlFor="customer">Customer:</label>
                    <Field type="text" id="customer" name="customer" required=""/>
                    <label htmlFor="numberOfGuests">Number Of Guests:</label>
                    <Field type="text" id="numberOfGuests" name="numberOfGuests" required=""/>
                    <label htmlFor="startDay">Check In:</label>
                    <Field type="date" id="startDay" name="startDay" required=""/>
                    <label htmlFor="endDay">Check Out:</label>
                    <Field type="date" id="endDay" name="endDay" required=""/>
                    <label htmlFor="deposit">Deposits:</label>
                    <Field type="text" id="deposit" name="deposit" required=""/>
                    <label htmlFor="idRoom">Id Room:</label>
                    <Field type="text" id="idRoom" name="idRoom" required=""/>
                    <label htmlFor="total">Tổng số tiền thanh toán:</label>
                    <Field type="text" id="total" name="total" required=""/>
                    <button type="submit" className="btn btn-info">Add</button>
                </Form>
            </div>
        </Formik>
    </>
    )

}