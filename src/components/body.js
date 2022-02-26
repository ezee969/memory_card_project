import React ,{ useState, useEffect} from "react"
import Cards from "./cards"
import scoreImg from "../assets/score.png"
export const MyContext = React.createContext()
    
const Body = () => {

    const [cards, setCards] = useState([]); //intended for an array of card objs, each one with a number:x and an id:uniqid
    const [score, setScore] = useState(0);
    const [chosedCardVal, setChoosedCardVal] = useState(""); //state for the first card choosed by the user
    const [highScore, setHighScore] = useState("0"); 
    const [firstRound, setFirstRound] = useState(true)


    useEffect(() => {
        console.log("test")
    },[highScore])
    
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
            <Cards  setChoosedCardVal={setChoosedCardVal}
                    chosedCardVal={chosedCardVal} 
                    firstRound={firstRound} 
                    setFirstRound={setFirstRound}
                    setCards={setCards} 
                    cards={cards}
                    setScore={setScore} 
                    score={score} 
                    highScore = {highScore}
                    setHighScore = {setHighScore} 
                />
        </div>
    )
}

export default Body