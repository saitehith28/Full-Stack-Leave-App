import { useState } from "react";
import { Link } from "react-router-dom";
function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [err,setError]=useState(null);
    const [errorMessage,setErrorMessage]=useState("");
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const onFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const onLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const signup = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, password);
        fetch("http://localhost:5000/user/signup",
            {
                method: "POST", body: JSON.stringify({ email, password, firstName, lastName }),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(function (res) {
                if(res.status!==200){
                    setError(true);
                    return res.json();
                }
                else{
                    return res.json();
                }
            }).then((result) => {
                setErrorMessage(result.message);
            })
    }
    return (
        <div className="login-form-box">
            <form className="login-form" onSubmit={(e) => signup(e)}>
                <div>
                    <h4 className="login-title">Signup</h4>
                </div>
                <div className="form-group mt-3">
                    <label>First Name</label>
                    <input type="text" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name" value={firstName} onChange={(e) => onFirstNameChange(e)} />
                </div>
                <div className="form-group mt-3">
                    <label>Last Name</label>
                    <input type="text" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name" value={lastName} onChange={(e) => onLastNameChange(e)} />
                </div>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input type="email" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => onEmailChange(e)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control mt-1" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => onPasswordChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                <div><Link>Already Have an Account ? <span className="link-color"><Link to="/login">Login</Link></span></Link></div>
            </form>
            {err && <div class="alert alert-danger" role="alert" style={{"position":"fixed","top":"0px"}}>
                {errorMessage}
            </div>}
        </div>
    )
}

export default SignUp;