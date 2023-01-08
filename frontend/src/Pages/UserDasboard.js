import { useState,useEffect } from "react";

function UserDashboard(){
    const [user,setUser]=useState({});
    useEffect(()=>{
        let user=localStorage.getItem("loggedInUser")?JSON.parse(localStorage.getItem("loggedInUser")):null;
        if(user){
            setUser(user);
        }
    },[])
    return(
        <div>
            <h1>User dashboard</h1>
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
        </div>
    )
}

export default UserDashboard;