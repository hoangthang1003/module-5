import React, {useEffect, useState} from "react";
import {findAll} from "../../service/FacilityService";
import {Link} from "react-router-dom";

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
                <Link to="/addFacility" className="justify-center">Add new</Link>
            <div  id="card" >
                {facilities.map((facility, index) =>
                    <div className="card" key={index}>
                        <img src={facility.img} className="card-img-top" alt="..."/>
                        <div className="card-body ">
                            <h5 className="card-title">{facility.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" className="btn btn-primary">More</a>
                        </div>
                    </div>
                )}
            </div>
            </div>



        </>
    )
}