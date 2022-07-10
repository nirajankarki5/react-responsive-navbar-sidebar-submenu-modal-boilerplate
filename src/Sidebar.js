import { useContext } from "react";
import { FaSearch, FaRegUser, FaRegBell, FaInbox } from "react-icons/fa";
import { FiGrid, FiX } from "react-icons/fi";
import { AppContext } from "./context";

const Sidebar = () => {
  const data = useContext(AppContext);

  return (
    <>
      {/* Open Sidebar if open-sidebar class is present */}
      <section
        className={data.isSidebarOpen ? "sidebar open-sidebar" : "sidebar"}
      >
        <FiX
          className="close-btn"
          onClick={() => data.setIsSidebarOpen(false)}
        />
        <ul>
          <li>
            <a href="/">
              <FaSearch /> Search
            </a>
          </li>
          <li>
            <a href="/">
              <FaRegUser /> Profile
            </a>
          </li>
          <li>
            <a href="/">
              <FaRegBell /> Notifications
            </a>
          </li>
          <li>
            <a href="/">
              <FaInbox /> Inbox
            </a>
          </li>
          <li>
            <a href="/">
              <FiGrid /> Preferences
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
