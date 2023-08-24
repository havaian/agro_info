import React from "react";
import Application from "./Components";
import { Container } from "reactstrap";
import Navbar from "../../Components/Navbar";
import BreadcrumbsComponent from "../../Components/Breadcrumbs";
import Content from "../../Components/Content";
import usePdfData from "./Hooks";
import usePdf from "./Hooks/pdf";

export default function PdfDetail() {
  const { downloadPDF, containerRef } = usePdf();
  const { data, isLoading } = usePdfData();

  return (
    <Container>
      <Navbar />
      <BreadcrumbsComponent />
      <div ref={containerRef}>
        {data?.map((item, i) => (
          <Content className="custom" key={i}>
            <Application data={item} isLoading={isLoading} />
          </Content>
        ))}
      </div>
      <button onClick={() => downloadPDF()} className="btn btn-primary">
        Pdf holatda yuklab olish
      </button>
    </Container>
  );
}
