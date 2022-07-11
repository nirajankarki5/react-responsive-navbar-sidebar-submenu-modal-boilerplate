import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { useContext } from "react";
import { AppContext } from "./context";

const Navbar = () => {
  const [isNavDisplay, setIsNavDisplay] = useState(false);
  const data = useContext(AppContext);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <BiMenuAltLeft
            className="sidebar-open-btn"
            onClick={() => data.setIsSidebarOpen(true)}
          />
          <h1>Company Name</h1>
        </div>

        <FaBars
          onClick={() => setIsNavDisplay((display) => !display)}
          className="menu-btn"
        />

        <ul className={isNavDisplay ? "active nav-links" : "nav-links"}>
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
            {/* FOR THE SUBMENU */}
            <div className="submenu">
              <ul>
                <li>
                  <a href="/" className="submenu-link">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/" className="submenu-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/" className="submenu-link">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/" className="submenu-link">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="/" className="submenu-link">
                    Messages
                  </a>
                </li>
                <li>
                  <a href="/" className="submenu-link">
                    Notifications
                  </a>
                </li>
              </ul>
            </div>
            {/* FOR THE SUBMENU */}
          </li>
          <li>
            <a href="/features" className="nav-link">
              Features
            </a>
            <div className="submenu">
              <ul
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                <li>
                  <a href="/" className="submenu-link">
                    Artificial Intelligence
                  </a>
                </li>
                <li>
                  <a href="/" className="submenu-link">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="/" className="submenu-link">
                    Business Intelligence
                  </a>
                </li>
                <li>
                  <a href="/" className="submenu-link">
                    Insights
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="/blogs" className="nav-link">
              Blogs
            </a>
          </li>
          <li>
            <a href="/about" className="nav-link">
              About
            </a>
            <div className="submenu">
              <ul>
                <li>
                  <a href="/" className="submenu-link">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/" className="submenu-link">
                    Message Us
                  </a>
                </li>
                <li>
                  <a href="/" className="submenu-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
