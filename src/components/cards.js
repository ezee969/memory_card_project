import Card from "./card"
import { useEffect } from "react"
import uniqid from "uniqid";

const Cards = (props) => {

    const setCards = props.setCards //destructuring the setState prop so no warning is given when i use it inside useEffect

    const handleCardClick = () =>{
        console.log(props.cards)
    }

    // useEffect(() => {
    //     // add event listener to every card on 1st mount to save the value of the first card, then errase it with a return
    // },[])

    useEffect(() => {
        const addCards = () => {
            for (let i=0; i < 8; i++) {
                setCards(currentArray => currentArray.concat({number:i,id:uniqid()}))
            }
        }
        addCards()
    },[setCards])

    return(
        <div id="cards-cont">
            {props.cards.map( card => {
                return <Card number={card.number} handleCardClick={handleCardClick} id={card.id} />
            })}
        </div>
    )
}

export default Cards