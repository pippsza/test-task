import clsx from "clsx";
import css from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecentId } from "../../redux/recent/selectors.js";

export default function Navigation() {
  const linkStyle = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const id = useSelector(selectRecentId);
  return (
    <nav>
      <ul className="flex justify-center gap-6">
        <li>
          <NavLink className={linkStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={linkStyle} to={id ? `${id}` : "//"}>
            Recent
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
