import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const onChangeValueUsuario = (e) => {
    setUsuario(e.target.value);
    console.log(usuario);
  };

  const onChangeValuePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const onSubmitSesion = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <div className="HomeLogin">
          <form onSubmit={onSubmitSesion}>
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
              <button type="submit">Iniciar</button>
            </Link>
          </form>
        </div>
        <div className="HomeImg"></div>
      </div>
    </>
  );
}

export default Home;
