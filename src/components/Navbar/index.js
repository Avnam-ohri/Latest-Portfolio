import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Link , NavLink} from "react-router-dom";
import "../Navbar/index.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
</svg>
              <span className="link-text">Home</span>
            </Link>
          </li>

          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="link-text">About Me</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/projects" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="link-text">Projects</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
</svg>
              <span className="link-text">Let's Connect</span>
            </NavLink>
          </li>
        </ul>



        <ul className="connect-ul">
          <li className="connect-li">
            <a href="https://www.linkedin.com/in/avnam-ohri-78658317b/" target="_blank" rel="noopener noreferrer" className="connect-a">
            <FontAwesomeIcon icon={faLinkedinIn} color="lightblue"/>
            </a>
          </li>

          <li className="connect-li">
            <a href="https://github.com/Avnam-ohri" target="_blank" rel="noopener noreferrer" className="connect-a">
            <FontAwesomeIcon icon={faGithub} color="white"/>
            </a>
          </li>

          <li className="connect-li">
            <a href="https://twitter.com/avnam_ohri" target="_blank" rel="noopener noreferrer" className="connect-a">
            <FontAwesomeIcon icon={faTwitter} color="skyblue" />
            </a>
          </li>

        </ul>
      </div>
    </>
  );
};

export default Navbar;
