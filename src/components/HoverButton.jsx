import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HoverButton = ({text, icon, onClick, className, customHover, image}) => {
    const [iconShown, setIconShown] = useState(false);

    return <button onMouseEnter={() => setIconShown(true)} onClick={onClick}
                   className={'kb' + (iconShown ? " " + (customHover ? customHover : "kb-icon") : "")
                       + (className ? " " + className : "")} onMouseLeave={() => setIconShown(false)}>
        <img src={image} style={image && iconShown ? {} : {display: "none"}}/>
        {!image && iconShown ? <FontAwesomeIcon icon={icon}/> : (image && iconShown ? "" : text)}</button>;
}

export default HoverButton;