import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserView(){
    let params = useParams()
    console.log(params)
    const [user,setUser] = useState({})
    useEffect(() => {
        getUser()
    },[])

    let getUser = async () => {
       let userdata =  await axios.get(`https://5cdd0a92b22718001417c19d.mockapi.io/api/userdata/${params.id}`)
        setUser(userdata.data)
    }
    return(
        <>
        <div>View {params.id}</div>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
        </>
        
    )
}

export default UserView;