import React, {useEffect, useState} from "react";


export function Greeting() {
    const [firstName,setFirstName] = useState(localStorage.getItem('firstName')|| '')
    const [lastName,setLastName] = useState(localStorage.getItem('lastName')|| '')
    useEffect(()=>{
        localStorage.setItem('firstName',firstName)
        localStorage.setItem('lastName',lastName)
    },[firstName,lastName])
    return(
        <>

            <form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input  onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input  onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                </div>
                <button type={"submit"}>Click</button>
            </form>

            <div>
                <li>{firstName}</li>
                <li>{lastName}</li>
            </div>
        </>
    )
}