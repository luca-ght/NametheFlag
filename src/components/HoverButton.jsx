import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HoverButton = ({text, icon, onClick, className, customHover}) => {
    const [iconShown, setIconShown] = useState(false);

    return <button onMouseEnter={() => setIconShown(true)} onClick={onClick}
                   className={'kb' + (iconShown ? " " + (customHover ? customHover : "kb-icon") : "")
                       + (className ? " " + className : "")} onMouseLeave={() => setIconShown(false)}>
        {iconShown ? <FontAwesomeIcon icon={icon}/> : text}</button>;
}

export default HoverButton;