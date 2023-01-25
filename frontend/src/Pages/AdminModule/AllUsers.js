import { useState,useEffect } from "react";
import AdminHeader from "./AdminHeader";

function AllUsers(){
    const [users,setUsers]=useState([]);
    const getAllUsers=()=>{
        fetch(`http://localhost:5000/user/allusers`)
        .then(function(res){
            return res.json()
        }).then(function(result){
            console.log("result",result);
            setUsers(result);
        })
    }
    useEffect(()=>{
        getAllUsers();
    },[])
    return(
        <div>
            <AdminHeader/>
            <br/>
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Leave Count</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return(
                            <tr>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.leaveCount}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}

export default AllUsers;