const Card = (props) => {
    return(
        <div id={props.id} key={props.id} onClick={props.handleCardClick} className="card">
            {props.number}
        </div>
    )
}

export default Card