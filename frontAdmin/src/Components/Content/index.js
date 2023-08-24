import React from "react";
import "./style.css";

export default function Content({ children, className }) {
  return <div className={className + " content"}>{children}</div>;
}
