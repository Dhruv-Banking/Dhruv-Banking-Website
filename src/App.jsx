import { Route, Routes } from "react-router-dom";

import Home from "./layouts/home";
import Login from "./layouts/login";
import Register from "./layouts/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
