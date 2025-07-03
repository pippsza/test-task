import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import css from "./Layout.module.scss";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <Header></Header>
      <main className="flex flex-col items-center">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}
