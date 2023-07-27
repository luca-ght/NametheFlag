import {useState} from "react";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";

const colors = [
    "#6D0C0C", "#73482F", "#0B4715", "#350751", "#120F9A",
    "#FFD700", "#D87316", "#1DE619", "#F434CA", "#19AFE6"
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