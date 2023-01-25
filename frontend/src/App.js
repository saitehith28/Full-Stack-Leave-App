import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import UserDashboard from './Pages/UserModule/UserDasboard';
import ProtectedRoutes from './Pages/ProtectedRoutes';
import ApplyLeave from './Pages/UserModule/ApplyLeave';
import MyLeave from './Pages/UserModule/MyLeave';
import AdminDashboard from './Pages/AdminModule/AdminDashBoard'
import AllLeave from './Pages/AdminModule/AllLeave';
import AllUsers from './Pages/AdminModule/AllUsers';
import Balance from './Pages/UserModule/Balance';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              {/* Public */}
              <Route path="/" element={
                  <ProtectedRoutes path="/login">
                    <UserDashboard/>
                  </ProtectedRoutes>}>
              </Route>
              
              <Route path="/signup" element={<SignUp/>}></Route>
              {/* Private */}
              <Route path="/userdashboard" element={
                  <ProtectedRoutes path="/">
                    <UserDashboard/>
                  </ProtectedRoutes>}>
              </Route>
              <Route path="/applyleave" element={
                  <ProtectedRoutes path="/">
                    <ApplyLeave/>
                  </ProtectedRoutes>}>
              </Route>
              <Route path="/myleave" element={
                  <ProtectedRoutes path="/">
                    <MyLeave/>
                  </ProtectedRoutes>}>
              </Route>
              <Route path="/balance" element={
                  <ProtectedRoutes path="/">
                    <Balance/>
                  </ProtectedRoutes>}>
              </Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
              <Route path="/allleave" element={<AllLeave/>}></Route>
              <Route path="/allusers" element={<AllUsers/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
