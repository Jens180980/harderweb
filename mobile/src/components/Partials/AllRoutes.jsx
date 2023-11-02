// Import React hooks
import { Routes, Route } from "react-router-dom";

// Import site pages
import Home from "../Pages/Home";
import Work from "../Pages/Work";
import Meet from "../Pages/Meet";
import Play from "../Pages/Play";
import Dream from "../Pages/Dream";

// AllRoutes function component
export const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/meet" element={<Meet />}></Route>
      <Route path="/work" element={<Work />}></Route>
      <Route path="/play" element={<Play />}></Route>
      <Route path="/dream" element={<Dream />}></Route>
    </Routes>
  );
}; // End of function component
