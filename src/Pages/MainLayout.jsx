import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-[84rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
