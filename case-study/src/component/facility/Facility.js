import React, {useEffect, useState} from "react";
import {findAll} from "../../service/FacilityService";

export function FacilityList() {
    const [facilities, setFacilities] = useState([])
    const facilityList = async () => {
        const result = await findAll()
        setFacilities(result)
    }

    useEffect(() => {
        facilityList()
    }, [])

    return (
        <>
            <div className="bg">
            <h1 className="text-center">
                Facility List
            </h1>
            <div className="col-12" id="card" >
                {facilities.map((facility, index) =>
                    <div className="card" key={index}>
                        <img src={facility.facilityImg} className="card-img-top" alt="..."/>
                        <div className="card-body ">
                            <h5 className="card-title">{facility.facilityName}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                )}
            </div>
            </div>



        </>
    )
}