import {
    faEarthAfrica, faEarthAmerica, faEarthAsia, faEarthEurope, faEarthOceania,
    faFlagUsa, faGlobe, faLocationArrow, faPersonDigging, faUmbrellaBeach
} from "@fortawesome/free-solid-svg-icons";
import HoverButton from "../components/HoverButton.jsx";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";

const Chooser = ({setPage, setContinent, mode}) => {

    const switchC = (continent) => {
        if (mode === "shapes" && (continent === "sonstige" || continent === "all")) return;
        setContinent(continent);
        setPage("game");
        }

    return (
        <>
            <Navigation onArrowLeft={() => setPage("home")} onSettings={() => setPage("options")} />

            <div className="container">

                <div className="row">
                    <HoverButton text={t("europe")} icon={faEarthEurope} onClick={() => switchC("europa")} />
                    <HoverButton text={t("africa")} icon={faEarthAfrica} onClick={() => switchC("afrika")} />
                </div>


                <div className="row">
                    <HoverButton text={t("america")} icon={faEarthAmerica} onClick={() => switchC("amerika")} />
                    <HoverButton text={t("asia")} icon={faEarthAsia} onClick={() => switchC("asien")} />
                </div>

                <div className="row">
                    <HoverButton text={t("oceania")} icon={faEarthOceania} onClick={() => switchC("ozeanien")} />
                    <HoverButton text={mode === "shapes" ? "Coming soon" : t("other")} icon={mode === "shapes" ? faPersonDigging : faUmbrellaBeach}
                                 onClick={() => switchC("sonstige")} className={mode === "shapes" ? "red" :""} />
                </div>

                <div className="row">
                    <HoverButton text={t("usa")} icon={faFlagUsa} onClick={() => switchC("usa")} />
                    <HoverButton text={t("germany")} icon={faLocationArrow} onClick={() => switchC("deutschland")}
                                 customHover='dhl-icon'/>
                </div>
                <div className="row">
                    <HoverButton className="off" text={t("official_countries")} icon={faGlobe} onClick={() => switchC("off")} />
                    <HoverButton text={mode === "shapes" ? "Coming soon" : t("all")} icon={mode === "shapes" ? faPersonDigging : faGlobe}
                                 onClick={() => switchC("all")} className={mode === "shapes" ? "red" :""} />
                </div>

            </div>
        </>
    )
}

export default Chooser;