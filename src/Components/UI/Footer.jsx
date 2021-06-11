import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="footer-container">
      <div className="footer-items">
        <p
          style={{
            fontSize: "1.1em",
            fontWeight: "bold",
          }}
        >
          {" "}
          COMPONENTS{" "}
        </p>
        <ul>
          <li>
            <Link to="/cpu" className="linkStyle">
              CPU
            </Link>
          </li>
          <li>
            <Link to="/gpu" className="linkStyle">
              GPU
            </Link>
          </li>
          <li>
            <Link to="/mb" className="linkStyle">
              Motherboard
            </Link>
          </li>
          <li>
            <Link to="/ram" className="linkStyle">
              RAM
            </Link>
          </li>
          <li>
            <Link to="/storage" className="linkStyle">
              Storage
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-items">
        <p
          style={{
            fontSize: "1.1em",
            fontWeight: "bold",
          }}
        >
          {" "}
          GITHUB{" "}
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/leodude77/PC-info"
              target="_blank"
              className="linkStyle"
              rel="noopener noreferrer"
            >
              Link to Github Repo
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-items">
        <p
          style={{
            fontSize: "1.1em",
            fontWeight: "bold",
          }}
        >
          {" "}
          BUILD PC{" "}
        </p>
        <ul>
          <li>
            <Link to="/build" className="linkStyle">
              Check out prices and wattage with custom components
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
