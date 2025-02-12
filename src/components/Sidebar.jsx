import { NavLink } from "react-router-dom";
import { FaHome, FaFileInvoice, FaUsers, FaSignOutAlt, FaGlobe } from "react-icons/fa";

const links = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Invoices", path: "/invoices", icon: <FaFileInvoice /> },
  { name: "Customers", path: "/customer", icon: <FaUsers /> }
];

function Sidebar() {
  return (
    <div className="bg-gray-100 flex sm:flex-col flex-row sm:w-60 w-full sm:h-screen h-16 py-2 px-4 fixed sm:top-0 sm:left-0 top-0 left-0 shadow-md z-50">
      {/* Logo Section */}
      <NavLink to="/" className="sm:h-20 h-full bg-blue-600 text-white text-xl font-bold rounded-md flex sm:flex-col flex-row items-center justify-center sm:w-full w-auto px-4">
        <FaGlobe className="text-3xl" />
        <span className="hidden sm:block ml-2 sm:ml-0">Acme</span>
      </NavLink>

      {/* Navigation Links */}
      <nav className="flex sm:flex-col flex-row sm:mt-4 mt-0 sm:gap-2 gap-1 sm:w-full w-auto items-center sm:items-start justify-center sm:justify-start flex-1">
        {links.map((li) => (
          <NavLink
            key={li.name}
            to={li.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 text-lg font-medium text-black rounded-md transition w-full sm:w-full md:w-auto
              ${isActive ? "bg-blue-100 text-blue-500" : "hover:bg-blue-100"}`}
          >
            {li.icon}
            <span className="hidden sm:inline">{li.name}</span>
          </NavLink>
        ))}

        {/* Sign Out Button */}
        <NavLink
          to="/logout"
          className="flex items-center gap-3 p-3 text-lg font-medium text-black rounded-md transition hover:bg-gray-200 w-full"
        >
          <FaSignOutAlt />
          <span className="hidden sm:inline">Sign Out</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
