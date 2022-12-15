import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const onChangeValueUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const onChangeValuePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitSesion = (e) => {
    e.preventDefault();
  };

  /*function consultarId(email) {
    fetch("http://localhost:3000/users/" + usuario, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {

      })
      .catch((error) => {
        alert(error.statusText);
      });
  }*/

  return (
    <>
      <div className="HomePageBackground">
        <div className="HomeLogin">
          <form className="HomePageForm" onSubmit={onSubmitSesion}>
            <label htmlFor="email">E-mail</label>
            <br />
            <input
              type="text"
              onChange={onChangeValueUsuario}
              value={usuario}
              required
              placeholder="e-mail"
            />
            <br />
            <label htmlFor="password" required>
              Password
            </label>
            <br />
            <input
              type="password"
              value={password}
              onChange={onChangeValuePassword}
              placeholder="password"
            />
            <br />
            <Link to={`pokedex`}>
              <button id="btn-neon" type="submit">
                Iniciar
              </button>
            </Link>
          </form>
        </div>
        <div className="HomeImg"></div>
      </div>
    </>
  );
}

export default Home;
