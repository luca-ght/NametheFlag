import "../styles/Navigation.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faGear} from "@fortawesome/free-solid-svg-icons";

export default ({onArrowLeft, onSettings, showLeftArrow = true, showSettings = true}) => <nav>
    <button className='back' onClick={onArrowLeft} style={showLeftArrow ? {} : {visibility: "hidden"}}>
        <FontAwesomeIcon className="back-icon" icon={faArrowLeft}/>
    </button>

    <button className='option' onClick={onSettings} style={showSettings ? {} : {visibility: "hidden"}}>
        <FontAwesomeIcon className="option-icon" icon={faGear}/>
    </button>
</nav>