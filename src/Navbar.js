import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isNavDisplay, setIsNavDisplay] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <h1>Company Name</h1>

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
