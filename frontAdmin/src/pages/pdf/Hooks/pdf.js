import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

export default function usePdf() {
  const containerRef = useRef();

  const downloadPDF = async () => {
    const input = containerRef.current;

    html2canvas(input, { useCORS: true, allowTaint: true, scrollY: 0 }).then(
      (canvas) => {
        const image = { type: "jpeg", quality: 1 };
        const margin = [0.5, 0.5];
        const filename = "myfile.pdf";

        var imgWidth = 8.3;
        var pageHeight = 11.7;

        var innerPageWidth = imgWidth - margin[0] * 2;
        var innerPageHeight = pageHeight - margin[1] * 2;

        // Calculate the number of pages.
        var pxFullHeight = canvas.height;
        var pxPageHeight = Math.floor(canvas.width * (pageHeight / imgWidth));
        var nPages = Math.ceil(pxFullHeight / pxPageHeight);

        // Define pageHeight separately so it can be trimmed on the final page.
        var pageHeight = innerPageHeight;

        // Create a one-page canvas to split up the full image.
        var pageCanvas = document.createElement("canvas");
        var pageCtx = pageCanvas.getContext("2d");
        pageCanvas.width = canvas.width;
        pageCanvas.height = pxPageHeight;

        var pdf = new jsPDF("p", "in", [8.3, 11.7]);

        for (var page = 0; page < nPages; page++) {
          if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
            pageCanvas.height = pxFullHeight % pxPageHeight;
            pageHeight =
              (pageCanvas.height * innerPageWidth) / pageCanvas.width;
          }

          // Display the page.
          var w = pageCanvas.width;
          var h = pageCanvas.height;
          pageCtx.fillStyle = "white";
          pageCtx.fillRect(0, 0, w, h);
          pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);

          // Add the page to the PDF.
          if (page > 0) pdf.addPage();
          // debugger;
          var imgData = pageCanvas.toDataURL(
            "image/" + image.type,
            image.quality
          );
          pdf.addImage(
            imgData,
            image.type,
            margin[1],
            margin[0],
            innerPageWidth,
            pageHeight
          );
        }

        pdf.save(filename);

        // const imgData = canvas.toDataURL("image/png");
        // const doc = new jsPDF("p", "px", "a4", true);
        // var imgWidth = doc.internal.pageSize.getWidth();
        // var pageHeight = doc.internal.pageSize.getHeight();
        // var imgHeight = (canvas.height * imgWidth) / canvas.width;
        // var heightLeft = imgHeight;
        // var y = 20;
        // doc.addImage(imgData, "PNG", 15, y, imgWidth - 30, imgHeight - 20);
        // heightLeft -= pageHeight;
        // while (heightLeft >= 0) {
        //   y = heightLeft - imgHeight;
        //   console.log(y);
        //   // doc.addPage();
        //   doc.addPage("p", "mm", "a4", true);
        //   doc.addImage(imgData, "PNG", 15, y, imgWidth - 30, imgHeight);
        //   heightLeft -= pageHeight;
        // }
        // doc.save("asadbek.pdf");
      }
    );
  };

  return { downloadPDF, containerRef };
}
