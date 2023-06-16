import React, {useEffect, useState} from "react";
import {productService} from "../service/ProductService";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";
import * as Yup from "yup";

export function AddProduct() {
    const navigate = useNavigate()
const [productTypes,setProductTypes] = useState([])
    const findAllType = async () => {
        const res = await productService.findAllType()
        setProductTypes(res)
    }
    useEffect(()=>{
        findAllType()
    },[])

    return(
        <Formik initialValues={{idProduct:'',name:'',more:'',productType:1,price:0,quantity:0,date:''}}
                validationSchema={Yup.object({
                    idProduct: Yup.string().required(),
                    name: Yup.string().required(),
                    more: Yup.string().required(),
                    productType: Yup.string().required(),
                    price: Yup.number().required(),
                    quantity: Yup.number().required(),
                    date: Yup.string().required()
                })}
                onSubmit={values => {
                    const res = async () => {
                        await productService.addProduct(values)
                        alert("thành công")
                        navigate("/")
                    }
                    res()
                }}>
            <Form>
                <div>
                 <label>Tên sản phẩm</label>
                    <Field id={"name"}  name={"name"} classname={"form-control"}/>
                </div>

                    <div>
                 <label>MÃ sản phẩm</label>
                    <Field id={"idProduct"}  name={"idProduct"}/>
                </div>
                <div>
                 <label>Mô tả</label>
                    <Field id={"more"}  name={"more"}/>
                </div>
                <div>
                 <label>Loại sản phẩm</label>
                    <Field id={"productType"}  name={"productType"} as={"select"}>
                        {productTypes.map((pt,index)=>
                        <option value={pt.id} key={index}>{pt.name}</option>
                        )}
                    </Field>
                </div>
                <div>
                 <label>Giá</label>
                    <Field id={"price"}  name={"price"}/>
                </div>
                <div>
                 <label>Số lượng</label>
                    <Field id={"quantity"}  name={"quantity"}/>
                </div>
                <div>
                 <label>Ngày nhập</label>
                    <Field id={"date"}  name={"date"}  type="date"/>
                </div>
                <button type={"submit"} className={"btn btn-danger"}>Add</button>
            </Form>
        </Formik>
    )
}