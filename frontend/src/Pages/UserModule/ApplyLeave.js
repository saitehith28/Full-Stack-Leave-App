import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
function ApplyLeave(){
    const [userName,setUserName]=useState("");
    const [reason,setReason]=useState("");
    const [startDate,setStartDate]=useState("");
    const [endDate,setEndDate]=useState("");
    const [leaveType,setLeaveType]=useState("");

    const navigate=useNavigate();
    useEffect(()=>{
        let loggedInUser=localStorage.getItem("loggedInUser");
        loggedInUser=loggedInUser ? JSON.parse(loggedInUser) : null;
        setUserName(loggedInUser.email);
    },[])
    const onReasonChange=(e)=>{
        setReason(e.target.value);
    }
    const onStartDateChange=(e)=>{
        setStartDate(e.target.value);
    }
    const onEndDateChange=(e)=>{
        setEndDate(e.target.value);
    }
    const onLeaveTypeChange=(e)=>{
        setLeaveType(e.target.value);
    }
    const applyLeave=(e)=>{
        e.preventDefault();
        fetch("http://localhost:5000/userleave/apply",
        {method:"POST",body:JSON.stringify({reason,startDate,endDate,leaveType,userName}),
        headers:{'Content-Type':'application/json'}})
        .then(function(res){
            return res.json()
        }).then((result)=>{
            console.log(result);
            navigate("/myleave");
        })
    }
    return (
        <div className="login-form-box">
            <form className="login-form" onSubmit={(e)=>applyLeave(e)}>
                <div>
                    <h4 className="login-title">Apply Leave</h4>
                </div>
                <div className="form-group mt-3">
                    <label>Username</label>
                    <input type="text" disabled className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" value={userName}/>
                </div>
                <div className="form-group mt-3">
                    <label>Reason</label>
                    <input type="text" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Reason" value={reason} onChange={(e)=>onReasonChange(e)}/>
                </div>
                <div className="form-group mt-3">
                    <label>Leave Type</label>
                    <input type="text" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Leave Type" value={leaveType} onChange={(e)=>onLeaveTypeChange(e)}/>
                </div>
                <div className="form-group mt-3">
                    <label>Start Date</label>
                    <input type="date" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Start Date" value={startDate} onChange={(e)=>onStartDateChange(e)}/>
                </div>
                <div className="form-group mt-3">
                    <label>End Date</label>
                    <input type="date" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter End Date" value={endDate} onChange={(e)=>onEndDateChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    )
}

export default ApplyLeave;