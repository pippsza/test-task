import clsx from "clsx";
import css from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const linkStyle = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav>
      <ul className="flex justify-center gap-6">
        <li>
          <NavLink className={linkStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={linkStyle} to="/filters">
            Filters
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
