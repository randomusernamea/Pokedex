import "./bottomComp.css";
import Card from "../Card/card";

function BottomComp({ pokemones }) {
  return (
    <>
      <div className="cards">
        {/* {console.log(pokemones)} */}
        {pokemones?.map((poke) => {
          return (
            <Card
              tipo={poke.tipo1}
              nombre={poke.nombre}
              pokeid={poke.id}
              pokeimg={poke.img}
            ></Card>
          );
        })}
      </div>
    </>
  );
}

export default BottomComp;
