import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import css from "./Layout.module.scss";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-amber-50 sm:bg-blue-400 lg:bg-green-500 h-full">
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}
