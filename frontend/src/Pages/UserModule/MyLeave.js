import { useState,useEffect } from "react";

function MyLeave(){
    const [leaves,setLeaves]=useState([]);
    const [userName,setUserName]=useState("");
    useEffect(()=>{
        let loggedInUser=localStorage.getItem("loggedInUser");
        loggedInUser=loggedInUser ? JSON.parse(loggedInUser) : null;
        setUserName(loggedInUser.email);
    },[])
    useEffect(()=>{
        fetch(`http://localhost:5000/userleave/${userName}/myleave`)
        .then(function(res){
            return res.json()
        }).then(function(result){
            setLeaves(result);
        })
    })
    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">UserName</th>
                    <th scope="col">Leave Type</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Status</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    leaves.map((leave)=>{
                        return(
                            <tr>
                                <td>{leave.userName}</td>
                                <td>{leave.leaveType}</td>
                                <td>{leave.reason}</td>
                                <td>{leave.status}</td>
                                <td>{leave.startDate}</td>
                                <td>{leave.endDate}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default MyLeave;