import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  let navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
    navigate("/");
  });

  return <h2>Successfully logged out!</h2>;
}
