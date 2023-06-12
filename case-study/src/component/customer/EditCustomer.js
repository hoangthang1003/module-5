import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {customerService} from "../../service/CustomerService";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";

export function EditCustomer() {
    const navigate = useNavigate()
    const param = useParams();
    const [customer, setCustomer] = useState("");
    const [customerTypes, setCustomerType] = useState([]);
    const findById = async () => {
        const res = await customerService.findById(param.id)
        console.log(res)
        setCustomer(res)
    }
    const findAllType = async () => {
        const res = await customerService.findAllType()
        setCustomerType(res)

    }
    useEffect(() => {
        findById()
        findAllType()
    }, [param.id])
    if (!customer) {
        return null
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: customer?.id,
                    name: customer?.name,
                    dateOfBirth: customer?.dateOfBirth,
                    gender: customer?.gender,
                    idCard: customer?.idCard,
                    phone: customer?.phone,
                    email: customer?.email,
                    address: customer?.address,
                    customerType: customer?.customerType
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("REQUIRED_VALIDATION"),
                    dateOfBirth: Yup.string().required("REQUIRED_VALIDATION"),
                    gender: Yup.string().required("REQUIRED_VALIDATION"),
                    idCard: Yup.string().required("REQUIRED_VALIDATION"),
                    phone: Yup.string().required("REQUIRED_VALIDATION"),
                    email: Yup.string().required('REQUIRED_VALIDATION'),
                    address: Yup.string().required('REQUIRED_VALIDATION'),

                })}
                onSubmit={(values) => {
                    customerService.editCustomer(param.id, values)
                    navigate('/customer')
                }
                }
            >
                <Form>
                    <div>
                        <label htmlFor={"name"}>Name</label>
                        <Field id={"name"} name={"name"}/>
                    </div>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <input id="female" name="gender" type="radio" value="0" />
                        <label htmlFor="female">Nữ</label>
                        <input id="male" name="gender" type="radio" value="1" />
                        <label htmlFor="male">Nam</label>
                    </div>


                    <div>
                        <label htmlFor={"dateOfBirth"}>dateOfBirth</label>
                        <Field id={"dataOfBirth"} name={"dateOfBirth"}/>
                    </div>
                    <div>
                        <label htmlFor={"idCard"}>idCard</label>
                        <Field id={"idCard"} name={"idCard"}/>
                    </div>
                    <div>
                        <label htmlFor={"phone"}>phone</label>
                        <Field id={"phone"} name={"phone"}/>
                    </div>
                    <div>
                        <label htmlFor={"email"}>email</label>
                        <Field id={"email"} name={"email"}/>
                    </div>
                    <div>
                        <label htmlFor={"address"}>address</label>
                        <Field id={"address"} name={"address"}/>
                    </div>
                    <div>
                        <label htmlFor={"customerType"}>customerType</label>
                        <Field as="select" id={"customerType"} name={"customerType"} >
                            {
                                customerTypes.map((customerType,index)=> (
                                    <option  key={index} value={customerType.id}>{customerType.name}</option>
                                ))
                            }
                        </Field>
                    </div>
                    <button type="submit" className={"btn btn-danger"}>Edit</button>
                </Form>
            </Formik>
        </>
    )
}