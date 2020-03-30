import React from "react";
import { FiUserPlus } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import "./styles.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.png";

export default function logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <div className="Logotipo">
          <img src={Logo} alt="Logo" />
        </div>
        <form>
          <h1>Faça logon</h1>
          <input placeholder="Sua ID" />
          <button type="submit">
            <FiUserCheck />
          </button>

          <Link to="/cadastro">
            <FiUserPlus size={25} color="white" /> Não tenho cadastro
          </Link>
        </form>
      </section>
    </div>
  );
}
