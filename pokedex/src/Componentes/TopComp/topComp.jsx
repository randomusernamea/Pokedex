import './topComp.css'
import {useState} from 'react'

function TopComp(params) {
    const inputChange = (e) => {
        params.changeSearch(e.target.value)
    }

    return (
      <>
        <img id="pokeballImg"/>
        <h1>Pokedex</h1>
        <button className={`changeSortingButton changeSortingButton${params.sorting}`} onClick={() => params.changeSorting(!(params.sorting))}>Placeholder</button>
        <input onChange={inputChange} type="text" value={params.search}/>

      </>
    );
  }
  
  export default TopComp;