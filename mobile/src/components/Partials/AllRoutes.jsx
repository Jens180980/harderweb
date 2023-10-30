// Import React hooks
import { Routes, Route } from "react-router-dom";

// Import site pages
import Home from "../Pages/Home";

// AllRoutes function component
export const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
    </Routes>
  );
}; // End of function component
