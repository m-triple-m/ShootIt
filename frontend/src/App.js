import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/home";
import SignUp from "./components/main/signup";
import AddEquipment from "./components/admin/addEquipment";
import Admin from "./components/admin";
import Login from "./components/main/login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
            <Route element={<SignUp />} path="signup" />
            <Route element={<Login />} path="login" />
            <Route element={<AddEquipment />} path="addEquiment" />
          </Route>
          <Route element={<Admin />} path="admin">
            <Route element={<AddEquipment />} path="addEquiment" />
          </Route>
          <Route exact element={<Navigate to="/main/home" />} path="" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
