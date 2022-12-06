import TopComp from "../TopComp/topComp";
import BottomComp from "../BottomComp/bottomComp";
import "./pokedex.css";
import { useEffect, useState } from "react";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
      const [sorting, setSorting] = useState(false);
    const [search, setSearch] = useState('');

  const consultarPokemons = () => {
    fetch("http://localhost:3000/pokemons", {
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
    <div id="pokedex">
      <TopComp id="topComp" sorting={sorting} changeSorting={setSorting} search={search} changeSearch={setSearch}/>
      <BottomComp pokemones={pokemons} />
    </div>
  );
}

export default Pokedex;

