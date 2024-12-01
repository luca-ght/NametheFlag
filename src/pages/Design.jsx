import {useState} from "react";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";
import "./Design.css";
import {hexToRgbA} from "../util.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const colors = [
    "#000000", "#3a2516", "#6D0C0C", "#042f03", "#350751", "#0e0c69",
    "#2f2f2f", "#73482F", "#D87316", "#136e24", "#6900ad", "#0250bb",
    "#545454", "#ad6e4a", "#FFD700", "#1DE619", "#F434CA", "#19AFE6",
    "#ffffff", "#ffb68a", "#b46363", "#0d724c", "#c798ec", "#6368bd",
];

const Design = ({goBack, primaryColor, setPrimaryColor}) => {
    const [currentMouseOver, setCurrentMouseOver] = useState(-1);

    return (
        <>
            <Navigation onArrowLeft={goBack} showSettings={false}/>

            <div className="design-page">
                <div className="farbe">
                    <h1>{t("choose_color")}</h1>
                </div>


                <div className='color-hintergrund'>

                    <div className='color-tabelle'>
                        {colors.map((color, index) => (
                            <button key={index} className={"color"}
                                    onMouseEnter={() => setCurrentMouseOver(index)}
                                    onMouseLeave={() => setCurrentMouseOver(-1)}
                                    style={{
                                        backgroundColor: hexToRgbA(color) + "100%)",
                                        filter: currentMouseOver === index ? "drop-shadow(0px 0px 8px " + hexToRgbA(color) + "90%)" : ""
                                    }}
                                    onClick={() => setPrimaryColor(color)}>
                                {primaryColor === color && <FontAwesomeIcon icon={faCheck}/>}
                            </button>
                        ))}

                    </div>
                </div>
            </div>


        </>
    )
}

export default Design;