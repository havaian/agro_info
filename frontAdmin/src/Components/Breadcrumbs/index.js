import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function BreadcrumbsComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="actionWrapper">
      <div className="breadcrumbs">
        <Link href="#">Bosh sahifa/</Link>
        <Link href="#" className="active">
          Application
        </Link>
      </div>
      {!location?.pathname?.includes("/table/") && (
        <Button onClick={() => navigate(-1)} outline="true" color="success">
          Orqaga
        </Button>
      )}
    </div>
  );
}
