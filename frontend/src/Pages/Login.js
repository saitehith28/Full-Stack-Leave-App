import { Link } from "react-router-dom";
import { useState } from "react";
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const onEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const onPasswordChange=(e)=>{
        setPassword(e.target.value);
    }
    const login=(e)=>{
        e.preventDefault();
        console.log(email,password);
    }
    return (
        <div className="login-form-box">
            <form className="login-form" onSubmit={(e)=>login(e)}>
                <div>
                    <h4 className="login-title">Login</h4>
                </div>
                <div class="form-group mt-3">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>onEmailChange(e)}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control mt-1" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>onPasswordChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                <div><Link>Dont Have an Account ? <span className="link-color"><Link to="/signup">Signup</Link></span></Link></div>
            </form>
        </div>
    )
}

export default Login;