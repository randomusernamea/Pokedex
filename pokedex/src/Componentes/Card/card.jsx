import Pokedex from "../Pokedex/pokedex";
import "./card.css";
import { Link } from "react";

function Card(props) {
  const tipoAcolor = (tipo) => {
    switch (tipo) {
      case "Normal":
        return "#AAA67f";
      case "Rock":
        return "#B69E31";
      case "Ghost":
        return "#70559B";
      case "Steel":
        return "#B7B9D0";
      case "Water":
        return "#6493EB";
      case "Fighting":
        return "#C12239";
      case "Flying":
        return "#A891EC";
      case "Poison":
        return "#A43E9E";
      case "Fairy":
        return "#E69EAC";
      case "Dragon":
        return "#7037FF";
      case "Dark":
        return "#75574C";
      case "Electric":
        return "#F9CF30";
      case "Ice":
        return "#9AD6DF";
      case "Fire":
        return "#F57D31";
      case "Psychic":
        return "#FB5584";
      case "Bug":
        return "#A7B723";
      case "Grass":
        return "#74CB48";
      case "Ground":
        return "#DEC168";
    }
    return "#666666";
  };

  const divStyle = tipoAcolor(props.tipo);
  return (
    <div style={{ borderColor: divStyle }} className="bottomCompDiv">
      <p style={{ color: divStyle }} className="bottomCompP">
        #{props.pokeid}
      </p>
      <img className="bottomCompImg" src={props.pokeimg} alt={props.nombre} />
      <h5 style={{ backgroundColor: divStyle }} className="bottomCompNombres">
        {props.nombre}
      </h5>
    </div>
  );
}

export default Card;
