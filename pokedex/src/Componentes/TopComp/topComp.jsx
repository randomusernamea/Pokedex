import './topComp.css'
import {useState} from 'react'

function TopComp(params) {
    const inputChange = (e) => {
        params.changeSearch(e.target.value)
    }

    return (
      <div id="topComp">
        <img id="pokeballImg"/>
        <h1 id="topCompTitle">Pokedex</h1>
        <button id="topCompSortingButton" className={`changeSortingButton changeSortingButton${params.sorting}`} onClick={() => params.changeSorting(!(params.sorting))}></button>
        <input id="topCompInput" placeholder="Search" onChange={inputChange} type="text" value={params.search}/>

      </div>
    );
  }
  
  export default TopComp;