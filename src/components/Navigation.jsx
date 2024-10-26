import "../styles/Navigation.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faGear, faPalette} from "@fortawesome/free-solid-svg-icons";

export default ({onArrowLeft, onSettings, showLeftArrow = true, showSettings = true}) => <nav>
    <button className='back' onClick={onArrowLeft} style={showLeftArrow ? {} : {visibility: "hidden"}}>
        <FontAwesomeIcon className="back-icon" icon={faArrowLeft}/>
    </button>

    <button className='design' onClick={onSettings} style={showSettings ? {} : {visibility: "hidden"}}>
        <FontAwesomeIcon className="design-icon" icon={faPalette}/>
    </button>
</nav>