import TopComp from "../TopComp/topComp";
import BottomComp from "../BottomComp/bottomComp";
import "./pokedex.css";
import { useEffect, useState } from "react";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  const consultarPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/", {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        setPokemons(data);
      })
      .catch((error) => {
        alert(error.statusText);
      });
  };

  useEffect(() => {
    consultarPokemons();
  }, []);

  return (
    <>
      <TopComp />
      <BottomComp pokemones={pokemons} />
    </>
  );
}

export default Pokedex;
