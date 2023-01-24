import { Route, Routes } from "react-router-dom";

import Home from "./layouts/home";
import Login from "./layouts/login";
import Register from "./layouts/register";
import Profile from "./layouts/profile";
import Logout from "./layouts/logout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
