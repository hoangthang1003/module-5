import React, {useEffect, useState} from "react";
import {customerService} from "../../service/CustomerService";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router";

export function AddCustomer() {
    const [customerTypes, setCustomerTypes] = useState([]);
    const navigate = useNavigate();
    const findAllType = async () => {
        const res = await customerService.findAllType()
        setCustomerTypes(res)

    }
    useEffect(() => {
        findAllType()
    }, [])

    return (
        <>
            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    dateOfBirth: '',
                    gender: '',
                    idCard: '',
                    phone: '',
                    email: '',
                    address: '',
                    customerType: "1"
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
                    customerService.addCustomer(values)
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
                        <Field id="female" name="gender" type="radio" value="0" />
                        <label htmlFor="female">Nữ</label>
                        <Field id="male" name="gender" type="radio" value="1" />
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
                    <button type="submit" className={"btn btn-danger"}>Add</button>
                </Form>
            </Formik>
        </>
    )
}