import React, {useState} from "react";
import { Field, Form, Formik} from 'formik';


export function Greeting() {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    return(
        <>
        <Formik initialValues={{firstName:'',lastName:''}}
                onSubmit={values => {
                    const handleChange = () => {
                        setFirstName(values.firstName)
                        setLastName(values.lastName)
                    }
                    handleChange()
                }}>
            <Form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName"/>
                </div>
                <br/>
                <div>
                    <label htmlFor="lastName">First Name</label>
                    <Field id="lastName" name="lastName"/>
                </div>
                <button type={"submit"}>Click</button>
            </Form>
        </Formik>

            <div>
                <li>{firstName}</li>
                <li>{lastName}</li>
            </div>
        </>
    )
}