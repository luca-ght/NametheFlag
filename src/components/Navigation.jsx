import "../styles/Navigation.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faGear} from "@fortawesome/free-solid-svg-icons";

export default ({onArrowLeft, onSettings, showLeftArrow = true, showSettings = true}) => <nav>
    <button className='lb' onClick={onArrowLeft} style={showLeftArrow ? {} : {visibility: "hidden"}}>
        <FontAwesomeIcon icon={faArrowLeft}/>
    </button>

    <button className='ob' onClick={onSettings} style={showSettings ? {} : {visibility: "hidden"}}>
        <FontAwesomeIcon icon={faGear}/>
    </button>
</nav>