
import gitIcon from "../assets/github-icon.png"

const Footer = () => {
    return(
        <div id="footer-cont">
            <p id="footer-text">Copyright © 2022 ezee969</p>
            <a href="https://github.com/ezee969" target="_blank" rel="noreferrer">
                <img src={gitIcon} alt="icon" id="footer-img"></img>
            </a>
        </div>
    )
}

export default Footer