import { Route, Routes } from "react-router-dom";

import Home from "./layouts/home";
import Login from "./layouts/login";
import Register from "./layouts/register";
import Profile from "./layouts/profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
