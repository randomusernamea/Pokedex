import "./bigCard.css";
import { tipoAcolor } from "../../Utilities/utilities";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function BigCard() {
  const { idPokemons } = useParams();

  const [poke, setPoke] = useState({
    id: "000",
    nombre: "missingNo",
    img: "/images/001.png",
    tipo1: "Grass",
    tipo2: "Poison",
    weight: "6,9kg",
    height: "0,7m",
    ability1: "Chlorophyll",
    ability2: "Overgrow",
    stats: {
      hp: "045",
      atk: "049",
      def: "049",
      satk: "065",
      sdef: "065",
      spd: "045",
    },

    descripcion:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
  });

  function consultarId() {
    fetch("http://localhost:3000/pokemons/" + idPokemons, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        setPoke(data);
      })
      .catch((error) => {
        alert(error.statusText);
      });
  }
  useEffect(() => {
    consultarId();
    console.log(toString(255 - parseInt(poke.stats.spd)).concat("px"));
    //   setPoke(
    //     poke.filter((pokes) => {
    //       return pokes.id == idPokemons;
    //     })
    //   );
  }, []);

  return (
    <div id="bigCardDiv" style={{ backgroundColor: tipoAcolor(poke.tipo1) }}>
      <div id="bigCardTopDiv">
        <a href="http://localhost:3001" id="bigCardArrow" />
        <p id="bigCardName">{poke.nombre}</p>
        <p id="bigCardId">#{poke.id}</p>
        <div id="bigCardArrowLeft"></div>
        <img src={poke.img} id="bigCardPokeImg" />
        <div></div>
      </div>
      <div id="bigCardBottomDiv">
        <p style={{ color: tipoAcolor(poke.tipo1) }} id="bigCardPAbout">
          About
        </p>
        <div id="bigCardTipos">
          <p
            className="tipo"
            style={{ backgroundColor: tipoAcolor(poke.tipo1) }}
            id="tipo1"
          >
            {poke.tipo1}
          </p>
          {poke.tipo2 !== "" && (
            <p
              className="tipo"
              style={{ backgroundColor: tipoAcolor(poke.tipo2) }}
              id="tipo2"
            >
              {poke.tipo2}
            </p>
          )}
        </div>
        <div id="bigCardPokeParams">
          <div id="bigCardWeight">
            <img id="bigCardWeightImage" src="/images/Weight.svg" />
            <p className="bigCardPokeParamsP">{poke.weight}</p>
            <p id="bigCardParamsWeight" className="bigCardPokeParamsDesc">
              Weight
            </p>
          </div>
          <div id="bigCardHeight">
            <img id="bigCardHeightImage" src="/images/Height.svg" />
            <p className="bigCardPokeParamsP">{poke.height}</p>
            <p id="bigCardParamsHeight" className="bigCardPokeParamsDesc">
              Height
            </p>
          </div>
          <div id="bigCardAbilities">
            <p className="bigCardPokeParamsP">{poke.ability1}</p>
            {poke.ability2 !== "" && (
              <p className="bigCardPokeParamsP">{poke.ability2}</p>
            )}
            <p className="bigCardPokeParamsDesc ">Abilities</p>
          </div>
        </div>
        <div>
          <p id="bigCardDesc">{poke.descripcion}</p>
        </div>
        <div id="bigCardStats">
          <p id="bigCardBaseStats">Base Stats</p>
          <div style={{ color: tipoAcolor(poke.tipo1) }} id="bigCardStatNames">
            <p className="bigCardPStat">HP</p>
            <p className="bigCardPStat">ATK</p>
            <p className="bigCardPStat">DEF</p>
            <p className="bigCardPStat">SPA</p>
            <p className="bigCardPStat">SPD</p>
            <p className="bigCardPStat">SPE</p>
          </div>
          <div id="bigCardStatValues">
            <p>{poke.stats.hp}</p>
            <p>{poke.stats.atk}</p>
            <p>{poke.stats.def}</p>
            <p>{poke.stats.satk}</p>
            <p>{poke.stats.sdef}</p>
            <p>{poke.stats.spd}</p>
          </div>
          <div id="bigCardStatBars">
            <div className="bigCardContentStats">
              <div
                className="bigCardStatsLengs"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1),
                  width: poke.stats.hp.concat("px"),
                }}
              ></div>
              <div
                className="bigCardStatsRest"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1).concat("66"),
                  width: (255 - parseInt(poke.stats.hp))
                    .toString()
                    .concat("px"),
                }}
              ></div>
            </div>
            <div className="bigCardContentStats">
              <div
                className="bigCardStatsLengs"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1),
                  width: poke.stats.atk.concat("px"),
                }}
              ></div>
              <div
                className="bigCardStatsRest"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1).concat("66"),
                  width: (255 - parseInt(poke.stats.atk))
                    .toString()
                    .concat("px"),
                }}
              ></div>
            </div>
            <div className="bigCardContentStats">
              <div
                className="bigCardStatsLengs"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1),
                  width: poke.stats.def.concat("px"),
                }}
              ></div>
              <div
                className="bigCardStatsRest"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1).concat("66"),
                  width: (255 - parseInt(poke.stats.def))
                    .toString()
                    .concat("px"),
                }}
              ></div>
            </div>
            <div className="bigCardContentStats">
              <div
                className="bigCardStatsLengs"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1),
                  width: poke.stats.satk.concat("px"),
                }}
              ></div>
              <div
                className="bigCardStatsRest"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1).concat("66"),
                  width: (255 - parseInt(poke.stats.satk))
                    .toString()
                    .concat("px"),
                }}
              ></div>
            </div>
            <div className="bigCardContentStats">
              <div
                className="bigCardStatsLengs"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1),
                  width: poke.stats.sdef.concat("px"),
                }}
              ></div>
              <div
                className="bigCardStatsRest"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1).concat("66"),
                  width: (255 - parseInt(poke.stats.sdef))
                    .toString()
                    .concat("px"),
                }}
              ></div>
            </div>
            <div className="bigCardContentStats">
              <div
                className="bigCardStatsLengs"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1),
                  width: poke.stats.spd.concat("px"),
                }}
              ></div>
              <div
                className="bigCardStatsRest"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1).concat("66"),
                  width: (255 - parseInt(poke.stats.spd))
                    .toString()
                    .concat("px"),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
