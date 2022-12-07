import "./bigCard.css";
import {tipoAcolor} from '../../Utilities/utilities'

function BigCard(props){
    return (
        <div id="bigCardDiv">
            <div id="bigCardTopDiv">
                <img id="bigCardArrow"/>
                <p id="bigCardName">{props.poke.nombre}</p>
                <p id="bigCardId">{props.poke.id}</p>
                <img id="bigCardPokeImg"/>
            </div>
            <div id="bigCardBottomDiv">
                <p id="bigCardPAbout">About</p>
                <div id="bigCardTipos">
                    <p id="tipo1">{props.poke.tipo1}</p>
                    {(props.poke.tipo2 !== "")&& <p id="tipo2">{props.poke.tipo}</p>}
                </div>
                <div id="bigCardPokeParams">
                    <div id="bigCardWeight">
                        <img/>
                        <p className="bigCardPokeParamsP">{props.poke.weight}</p>
                        <p className="bigCardPokeParamsDesc">Weight</p>
                    </div>
                    <div id="bigCardHeight">
                        <img/>
                        <p className="bigCardPokeParamsP">{props.poke.height}</p>
                        <p className="bigCardPokeParamsDesc">Height</p>
                    </div>
                    <div id="bigCardAbilities">
                        <img/>
                        <p className="bigCardPokeParamsP">{props.poke.ability1}</p>
                        {(props.poke.ability2 !== "" && <p className="bigCardPokeParamsP">{props.poke.ability2}</p>)}
                        <p className="bigCardPokeParamsDesc">Abilities</p>
                    </div>
                </div>
                <div><p id="bigCardDesc">{props.poke.descripcion}</p></div>
                <div id="bigCardStats">
                    <p id="bigCardBaseStats">Base Stats</p>
                    <div id="bigCardStatNames">
                        <p className="bigCardPStat">HP</p>
                        <p className="bigCardPStat">ATK</p>
                        <p className="bigCardPStat">DEF</p>
                        <p className="bigCardPStat">SPA</p>
                        <p className="bigCardPStat">SPD</p>
                        <p className="bigCardPStat">SPE</p>
                    </div>
                    <div id="bigCardStatValues">
                        <p>{props.poke.stats.hp}</p>
                        <p>{props.poke.stats.atk}</p>
                        <p>{props.poke.stats.def}</p>
                        <p>{props.poke.stats.satk}</p>
                        <p>{props.poke.stats.sdef}</p>
                        <p>{props.poke.stats.spd}</p>
                    </div>
                    <div id="bigCardStatBars">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default BigCard;