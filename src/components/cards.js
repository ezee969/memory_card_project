import Card from "./card"
import { useEffect } from "react"
import uniqid from "uniqid";

const Cards = (props) => {
    let cards = props.cards
    let setCards = props.setCards

    useEffect(() => {
        const addNewCard = () => {
            setCards(currentArray => currentArray.concat({number:Math.floor(Math.random()*100),id:uniqid()}))
        }

        const addCards = () => {
        //effect thatruns when the Cards component is mounted, it fills the cards array (setCards) with 40 card objs
            for (let i=0; i < 40; i++) {
                addNewCard()
            }
        };

        addCards();

    },[setCards]);

    const handleCardPick = (event) => {
        //function that checks game state (1st round or 2nd round forward) and acts acordingly when a card is clicked
        const pickedCardValue = event.target.innerHTML;
        props.setCards(shuffleCards());
        if (props.firstRound) { 
            props.setChoosedCardVal(pickedCardValue)
            props.setFirstRound(false)
        }
        else {
            compareCardPick(pickedCardValue);
        };
    };

    const shuffleCards = () => {
        //shuffles all card objs inside cards array
        return props.cards.sort((a, b) => 0.5 - Math.random());
        
    };
    
    const compareCardPick = (pickedCardValue) =>{
        if (pickedCardValue === props.chosedCardVal) {
            props.setScore(props.score+1);
        }
        else {
            compareScores()
        };

    };

    const compareScores = () => {
        // compares the actual score to the highest score
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