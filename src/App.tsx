import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { theme } from "./styles/Theme";
import Home from "../src/pages/home/Home";
import MainLayout from "./pages/layout/MainLayout";
import Inventory from "./pages/inventory/Inventory";
import Dashboard from "./pages/dashboard/Dashboard";
import Ledger from "./pages/ledger/Ledger";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />}>
              //SIDE BARS HERE
            </Route>
            <Route path="ledger" element={<Ledger />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
