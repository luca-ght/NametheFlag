import {useState} from "react";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";

const colors = [
    "#000000", "#3a2516", "#6D0C0C", "#042f03", "#350751", "#0e0c69",
    "#2f2f2f", "#73482F", "#D87316", "#136e24", "#6900ad", "#0250bb",
    "#545454", "#ad6e4a", "#FFD700", "#1DE619", "#F434CA", "#19AFE6",
    "#ffffff", "#ffb68a", "#b46363", "#0d724c", "#c798ec", "#6368bd",

];

const Design = ({goBack, setPrimaryColor}) => {
    const [currentColor, setCurrentColor] = useState(localStorage.getItem("primary-color") || "#350751");

    const update = () => setPrimaryColor(currentColor);

    return (
        <>
            <Navigation onArrowLeft={goBack} showSettings={false}/>

            <div className='cl'>
                <h1>{t("choose_color")}</h1>

                <div className='main'>
                    {colors.map((color, index) => (
                        <button key={index} className={"color" + (currentColor === color ? " current" : "")}
                                style={{background: color}} onClick={() => setCurrentColor(color)}></button>
                    ))}

                </div>

                <button className="fa" onClick={update}>{t("choose")}</button>
            </div>

        </>
    )
}

export default Design;