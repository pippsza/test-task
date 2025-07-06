import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecentId } from "../../redux/recent/selectors.js";

export default function Navigation() {
  const id = useSelector(selectRecentId);
  return (
    <nav>
      <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <li>
          <NavLink
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-base sm:text-lg font-semibold transition-colors duration-300
              ${isActive ? "bg-white text-blue-600" : "text-white hover:bg-white/20"}`
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-base sm:text-lg font-semibold transition-colors duration-300
              ${isActive ? "bg-white text-blue-600" : "text-white hover:bg-white/20"}`
            }
            to={id ? `${id}` : "//"}
          >
            Recent
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
