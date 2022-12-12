import "./bottomComp.css";
import Card from "../Card/card";
import { Link } from "react-router-dom";

function BottomComp(props) {
  return (
    <>
      <div className="cards">
        {props.pokemones?.map((poke) => {
          return (
            <Link to={`/pokemons/${poke.id}`}>
              <Card
                tipo={poke.tipo1}
                nombre={poke.nombre}
                pokeid={poke.id}
                pokeimg={poke.img}
              ></Card>
            </Link>
          );
        })}
      </div>{" "}
    </>
  );
}

export default BottomComp;
