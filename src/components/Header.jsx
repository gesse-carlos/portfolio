import React from 'react';

function Header() {
  return (
    <header className="header-container">
      <div className="picture-container">
        <div className="picture"></div>
      </div>
      <div className="titles-container">
        <h1 id="title">Gessé Carlos</h1>
        <h2 id="subtitle">Fullstack Developer</h2>
      </div>
    </header>
  );
}

export default Header;
