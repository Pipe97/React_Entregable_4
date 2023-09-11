import "./Header.css";

import React from "react";

const Header = ({ onCreate }) => {
  return (
    <header className="header">
      <h1>Usuarios</h1>
      <button onClick={() => onCreate()}>Crear un nuevo formulario</button>
    </header>
  );
};

export default Header;
