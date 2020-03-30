import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

import { FiArrowLeft, FiPlusCircle } from "react-icons/fi";

import Logo from "../../assets/Logo.png";

export default function Casos() {
  return (
    <div className="cadastroCasos">
      <div className="content">
        <div className="leftSide">
          <img src={Logo} alt="Logo" />
          <h1>Cadastre um caso</h1>
          <p>
            Descreva o caso, Adicione um titulo que chame atenção dos doadores!
          </p>
          <Link
            to="/perfil"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none"
            }}
          >
            <FiArrowLeft size={16} color="#710d7f" />
            Voltar para Home
          </Link>
        </div>

        <div className="form">
          <form>
            <input placeholder="Titulo" />
            <textarea type="email" placeholder="Descrição" />
            <input placeholder="Valor em reais" />
            <button type="submit">
              <FiPlusCircle />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
