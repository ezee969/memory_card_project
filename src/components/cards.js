import Card from "./card"

const Cards = (props) => {
    return(
        <div id="cards-cont">
            {props.cards.map( card => {
                return <Card number={card.number} />
            })}
        </div>
    )
}

export default Cards