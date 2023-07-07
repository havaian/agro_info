import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Auth from './Pages/auth';
import Forms from './Pages/Forms';
import StatusPage from './Pages/Status';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Auth />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/status" element={<StatusPage />} />
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
