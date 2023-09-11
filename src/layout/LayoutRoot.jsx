import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutRoot = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <Outlet />
      </div>
      <footer className="container">Footer</footer>
    </>
  );
};

export default LayoutRoot;
