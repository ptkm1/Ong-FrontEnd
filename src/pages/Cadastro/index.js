import React from "react";
import { FiUserPlus } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <div className="cadastro">
      <div className="content">
        <div className="leftSide">
          <img src={Logo} alt="Logo" />
          <h1> Cadastro </h1>
          <p>
            Efetue um cadastro e receba informações sobre ongs que precisam de
            ajuda.
          </p>
          <Link
            to="/"
            style={{
              color: "#710d7f",
              textDecoration: "none",
              fontWeight: "bold",
              display:  "flex",
              alignItems: "center"
            }}
          >
            <FiArrowLeft /> Já Possuo um ID
          </Link>
        </div>

        <div className="form">
          <form>
            <input placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Numero" />

            <div className="cityuf">
              <input placeholder="Cidade" />
              <input placeholder="UF" style={{ width: 80 }} />
            </div>
            <button type="submit">
              <FiUserPlus />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
