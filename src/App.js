import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Register from "./pages/Register";
import Main from "./pages/Main"
import Login from "./pages/Login";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/main" element={<Main/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
