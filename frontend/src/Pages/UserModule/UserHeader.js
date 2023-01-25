import { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
function UserHeader(){
    const [user, setUser] = useState({});
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate("/");
    }
    useEffect(() => {
        let user = localStorage.getItem("loggedInUser") ? JSON.parse(localStorage.getItem("loggedInUser")) : null;
        if (user) {
            setUser(user);
        }
    },[])
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/applyleave">Apply Leave</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/myleave">Leave History</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/balance">Remaining Balance</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={(e)=>logout(e)}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default UserHeader;