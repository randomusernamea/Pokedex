import "./bottomComp.css";

function BottomComp({ pokemones }) {
  return (
    <>
      <div className="cards">
        {console.log(pokemones)}
        {pokemones?.results?.map((poke) => {
          return (
            <div>
              <h3>{poke.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BottomComp;
