
import './App.css';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import SingleCard from './components/SingleCard';

const cardImages=[
  {"src":"img/helmet-1.png", matched:false},
  {"src":"img/potion-1.png", matched:false},
  {"src":"img/ring-1.png", matched:false},
  {"src":"img/scroll-1.png", matched:false},
  {"src":"img/sword-1.png", matched:false},
  {"src":"img/shield-1.png", matched:false}

]
function App() {

const [cards,setCards]= useState([])

const [turns,setTurns]= useState(0)

const [choice1,setChoice1]= useState(null);
const [choice2,setChoice2]= useState(null);

const shufflecards=()=>{

      const duplicate =[...cardImages, ...cardImages]
        .sort(()=> Math.random()- 0.5)
        .map((card)=>({...card, id: Math.random()}))

        setCards(duplicate)
        setTurns(0)
}

  const handleChoice=(card)=>{
    choice1 ? setChoice2(card) :setChoice1(card);

  }

  
  useEffect(() => {
        if(choice1 && choice2){

          if (choice1.src===choice2.src){
            setCards(prevCards=>{

              return prevCards.map(card=>{

                if(card.src===choice1.src){
                  return {...card, matched:true}
                }
                else
                {
                  return card
                }
              })

            })
            resetTurns()
          }
          else{
          
            setTimeout(()=>resetTurns(),1000);
          }
      }
    }
  , [choice1,choice2])

  console.log(cards)

  const resetTurns=()=>{
      setChoice1(null);
      setChoice2(null);
      setTurns((prevTurns)=>prevTurns+1)
  }

  return (
    <div className="App">
    <h1>Magic match</h1>
    <Button variant ="outlined" onClick={shufflecards}>New Game</Button>

    
    <div className="card-grid">
        {cards.map(card=>(
          
            <SingleCard key = {card.id} 
            handleChoice={handleChoice}
            card={card}
            flipped={card === choice1 || card===choice2 || card.matched}
            />
        ))}
        </div>
      </div>

  );
}

export default App;
