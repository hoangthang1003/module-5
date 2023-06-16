import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {facilityService} from "../../service/FacilityService";

export function Detail() {
    const param = useParams();
    const [facility,setFacility] = useState("")

    const findById = async () => {
        const res = await facilityService.findById(param.id)
        setFacility(res)
    }
    useEffect(()=>{
        findById()
    },[])

return(
    <>
        <div>{facility.id}</div>
        <div>{facility.name}</div>
        <div>{facility.area}</div>
        <div>{facility.cost}</div>
        <div>{facility.maxPeople}</div>
        <div>{facility.facilityType?.name}</div>
        <div>{facility.rentType}</div>
        <div>{facility.standardRoom}</div>
        <div>{facility.description}</div>
        <div>{facility.poolArea}</div>
        <div>{facility.numberOfFloors}</div>
        <div>{facility.facilityFree}</div>
    </>
)
}