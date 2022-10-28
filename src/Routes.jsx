import { Routes, Route } from "react-router-dom";

import { Home } from './pages/Home';
import { HomeLogout } from './pages/HomeLogout';
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { About } from "./pages/About";

export const MainRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<HomeLogout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/singup" element={<Signup />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );

}