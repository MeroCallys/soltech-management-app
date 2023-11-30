import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../pages/layout/MainLayout";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Ledger from "../pages/ledger/Ledger";
import Inventory from "../pages/inventory/Inventory";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Error from "../components/errors/Error";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} errorElement={<Error />} />
        <Route path="dashboard" element={<Dashboard />}>
          //SIDE BARS HERE
        </Route>
        <Route path="ledger" element={<Ledger />} />
        <Route path="inventory" element={<Inventory />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </>
  )
);
