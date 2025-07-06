import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Loader from "../Loader/Loader.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen w-full">
      <Header />
      <main className="flex flex-col items-center justify-center w-full h-full px-2 sm:px-0 py-2 sm:py-0">
        <Outlet />
        {/* <Loader /> */}
      </main>
      <Footer />
    </div>
  );
}
