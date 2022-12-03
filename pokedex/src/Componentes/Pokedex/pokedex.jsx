import TopComp from '../TopComp/topComp'
import BottomComp from '../BottomComp/bottomComp'
import './pokedex.css'
import {useState} from 'react'

function Pokedex() {
    const [sorting, setSorting] = useState(false);
    const [search, setSearch] = useState('');


    return (
      <>
        <TopComp sorting={sorting} changeSorting={setSorting} search={search} changeSearch={setSearch}/>
        <BottomComp/>
      </>
    );
  }
  
  export default Pokedex;