import React from "react";

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Texas Teen Sexual Health Task Force
      </a>
      <ul>
        <li>
          <a href="/Map">Map Search</a>
        </li>
        <li>
          <a href="/List">List Search</a>
        </li>
        <li>
          <a href="/Instructions">Instructions</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
