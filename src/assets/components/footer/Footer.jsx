import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css"


export function Footer(){
 
    return (
<footer className="footer">Build with 
        <FontAwesomeIcon icon ={faHeart} className="footer-icon"
        aria-hidden="true"/> by
        <a href="" target="_blank"  rel="noreferrer">easybyte</a>

</footer>
    )

    
}
export default Footer;