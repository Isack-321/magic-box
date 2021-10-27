
import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';

const cardImages=[
  {"src":"img/helmet-1.png"},
  {"src":"img/potion-1.png"},
  {"src":"img/ring-1.png"},
  {"src":"img/scroll-1.png"},
  {"src":"img/sword-1.png"},
  {"src":"img/shield-1.png"}

]
function App() {

const [cards,setcards]= useState([])

const [turns,setTurns]= useState(0)
const shufflecards=()=>{

  const duplicate =[...cardImages, ...cardImages]
    .sort(()=> Math.random()- 0.5)
    .map((card)=>({...card, id: Math.random()}))

    setcards(duplicate)
    setTurns(0)
}
console.log(cards,turns)

  return (
    <div className="App">
    <h1>Magic match</h1>
    <Button variant ="outlined" onClick={shufflecards}>New Game</Button>
      </div>
  );
}

export default App;
