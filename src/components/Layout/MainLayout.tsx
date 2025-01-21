import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="pt-16 px-0 md:px-4">
        <Outlet />
      </main>

      {/* Footer Wrapper (Hidden on Mobile) */}
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
