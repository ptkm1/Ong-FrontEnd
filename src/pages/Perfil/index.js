import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

import { FiPower, FiTrash2 } from "react-icons/fi";

import Logo from "../../assets/Logo.png";

export default function Perfil() {
  return (
    <div className="perfil-content">
      <header>
        <div className="leftside">
          <img src={Logo} alt="MiAu!" />
          <span>Bem vinda, APAD</span>
        </div>

        <div className="rightside">
          <Link to="/casos/novo" className="button">
            Cadastrar novo caso
          </Link>

          <Link to="/" className="deslog">
            <FiPower />
          </Link>
        </div>
      </header>

      <h1>Casos cadastrados: </h1>

      <ul>
        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>

          <strong>VALOR</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>

          <strong>VALOR</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>

          <strong>VALOR</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>

          <strong>VALOR</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
