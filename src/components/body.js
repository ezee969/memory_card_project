import { useState, useEffect } from "react"
import Cards from "./cards"
import scoreImg from "../assets/score.png"

const Body = () => {

    const [cards,setCards] = useState([])
    const [score,setScore] = useState(0)
    const [chosedCardVal , setChoosedCardVal] = useState("")
    const [highScore,setHighScore] = useState("0") 
    
    // useEffect(() => {
    //     // add event listener to every card on every render to compare its value to the chosedCardVal, if its the same {score++}
    //     // also to shuffle all cards 
    // },[])

    // useEffect(() => {
    //     // ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    //     // when higscores updates unmount Cards component and mount it again (new g)
    // },[highScore])
    
    return(
        <div id="body-cont">
            <div id="scores-cont">
                <div id="score-cont">
                    SCORE: {score}
                </div>
                <div id="high-score-cont">
                    <img id="score-img" src={scoreImg} alt="score img"></img>
                    HIGH-SCORE: {highScore}
                </div>
            </div>
            <Cards setCards={setCards} cards={cards}/>
        </div>
    )
}

export default Body