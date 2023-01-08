import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import UserDashboard from './Pages/UserDasboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/userdashboard" element={<UserDashboard/>}></Route>
              <Route path="/" element={<Login/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
