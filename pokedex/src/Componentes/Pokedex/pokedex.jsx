import TopComp from '../TopComp/topComp'
import BottomComp from '../BottomComp/bottomComp'
import './pokedex.css'
import {useState} from 'react'


function Pokedex() {
    const [sorting, setSorting] = useState(false);
    const [search, setSearch] = useState('');


    return (
      <div id="pokedex">
        <TopComp id="topComp" sorting={sorting} changeSorting={setSorting} search={search} changeSearch={setSearch}/>
        <BottomComp/>
      </div>
    );
  }
  
  export default Pokedex;
  