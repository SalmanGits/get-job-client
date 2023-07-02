import { Routes,Route,Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Navigate replace to="/register" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
