import React, { useEffect } from "react";
import { Button } from "reactstrap";
import { ImExit } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  const navigate = useNavigate();
  function exitFunction() {
    localStorage.removeItem("statAdminToken");
    localStorage.removeItem("statAdminStir");
    navigate("/");
  }
  useEffect(() => {
    const a = localStorage.getItem("statAdminToken");
    if (!a || a?.length < 3) {
      navigate("/");
    }
  }, []);
  const location = useLocation();
  return (
    <div className="navbar">
      <h4>AgroStat</h4>

      <Button className="btnn" onClick={() => exitFunction()}>
        Chiqish <ImExit />
      </Button>
    </div>
  );
}
