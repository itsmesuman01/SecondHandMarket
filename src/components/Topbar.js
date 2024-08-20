import Link from "next/link";
import React from "react";

const Topbar = () => {
  const topbarStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    borderRadius: "5px",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  };

  const listItemStyle = {
    margin: "0 10px",
    cursor: "pointer",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <div style={topbarStyle}>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <Link href="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/contact_us" style={linkStyle}>
            Contact
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/about" style={linkStyle}>
            About
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/blog" style={linkStyle}>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
