import { Route, Routes } from "react-router-dom";

import Home from "./layouts/home";
import Login from "./layouts/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<h1>Register</h1>} />
      </Routes>
    </>
  );
}

export default App;
