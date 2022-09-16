import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Register from "./pages/Register";
import Main from "./pages/Main"
import Login from "./pages/Login";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Network from "./components/Network";
import Reports from "./components/Reports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Main pageName={"dashboard"}/>}/>
        <Route path="/profile" element={<Main pageName={"profile"}/>}/>
        <Route path="/network" element={<Main pageName={"network"}/>}/>
        <Route path="/reports" element={<Main pageName={"reports"}/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
