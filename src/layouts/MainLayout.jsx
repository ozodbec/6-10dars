import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1200px] mb-auto mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
