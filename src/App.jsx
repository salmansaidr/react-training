import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TenantDetail from "./pages/TenantDetail";
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";
import TenantAdd from "./pages/TenantAdd";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tenant/:id" element={<TenantDetail />} />
        <Route path="/tenant/add" element={<TenantAdd />} />
      </Routes>
      <Foot />
    </>
  );
}

export default App;
