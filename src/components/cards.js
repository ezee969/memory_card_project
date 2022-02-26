import Card from "./card"
import { useEffect } from "react"
import uniqid from "uniqid";

const Cards = (props) => {
     //destructuring the setState props so no warning is given when i use it inside useEffect
    const setCards = props.setCards
    
    useEffect(() => {
        const addCards = () => {
            for (let i=0; i < 40; i++) {
                setCards(currentArray => currentArray.concat({number:Math.floor(Math.random()*100),id:uniqid()}))
            }
        };
        addCards();
    },[setCards]);

    const handleCardPick = (event) => {
        const pickedCardValue = event.target.innerHTML;

        if (props.firstRound) { 
            props.setChoosedCardVal(pickedCardValue)
            props.setFirstRound(false)
        }
        else {
            compareCardPick(pickedCardValue);
        };
    };

    const shuffleCards = () => {
        return props.cards.sort((a, b) => 0.5 - Math.random());
    };
    
    const compareCardPick = (pickedCardValue) =>{
        if (pickedCardValue === props.chosedCardVal) {
            props.setScore(props.score+1);
            props.setCards(shuffleCards());
        }
        else {
            compareScores()
        };
    };

    const compareScores = () => {
        if (props.score > props.highScore) props.setHighScore(props.score); 
    };

    return(
        <div id="cards-cont">
            {props.cards.map( card => {
                return <Card handleCardPick={handleCardPick} number={card.number} id={card.id} />
            })}
        </div>
    )
}

export default Cards