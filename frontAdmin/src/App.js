import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Auth from "./pages/auth";
import Table from "./pages/forms";
import Detail from "./pages/status";
import PdfDetail from "./pages/pdf";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Auth />} />
        <Route path="/table/:type" element={<Table />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/pdf/:id" element={<PdfDetail />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
