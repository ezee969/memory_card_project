import brainImg from "../assets/cerebro.png"

const Header = () => {
    return(
        <div id="header-cont">
            <h1 className="header-text"> 
                MEMORY
            </h1>
            <img id="header-image" alt="brain-img" src={brainImg}></img>
            <h1 className="header-text"> 
                CARD
            </h1>
        </div>
    )
}

export default Header