import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import UserDashboard from './Pages/UserModule/UserDasboard';
import ProtectedRoutes from './Pages/ProtectedRoutes';
import ApplyLeave from './Pages/UserModule/ApplyLeave';
import MyLeave from './Pages/UserModule/MyLeave';

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
              <Route path="/login" element={<Login/>}></Route>
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
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
