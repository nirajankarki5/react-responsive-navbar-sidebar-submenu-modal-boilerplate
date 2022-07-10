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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
