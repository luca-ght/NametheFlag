import {faHouse, faRotateLeft} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import HoverButton from "../components/HoverButton.jsx";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";

const Ending = ({wrong, guessed, max, reset, setPage, goBack}) => {

    const [color, setColor] = useState("");

    const name = (name) => name.toString().charAt(0).toUpperCase() + name.toString()?.slice(1);

    useEffect(() => {
        const prozent = guessed / max * 100;

        if (prozent === 100) setColor("#5d0269");
        if (prozent <= 99) setColor("#07801d");
        if (prozent <= 74) setColor("#f1c50d");
        if (prozent <= 49) setColor("#e8610e");
        if (prozent <= 24) setColor("#a11010");
        if (prozent === 0) setColor("#440606");
    }, []);

    return (
        <>
            <Navigation onArrowLeft={goBack} onSettings={() => setPage("options")}/>

            <div className='hmb'>
                <h1 style={{color}}>{Math.round(guessed / max * 100)}%</h1>

                <h2>{guessed}/{max} {t("correct")}</h2>

                {wrong.length > 0 && <div className="hmb wrong-hmb">
                    {wrong.map((w) => <div className="wrong" key={w.country}>
                        <img src={w.url} alt={w.country}/>
                        <p>{name(w.country.split(",")[0])}</p>
                    </div>)}
                </div>}
            </div>

            <div className="row rw">
                <HoverButton text={t("home")} icon={faHouse} onClick={() => setPage("home")}/>
                <HoverButton text={t("again")} icon={faRotateLeft} onClick={reset}/>
            </div>
        </>
    )
}

export default Ending;