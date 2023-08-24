import {
    faEarthAfrica, faEarthAmerica, faEarthAsia, faEarthEurope, faEarthOceania,
    faFlagUsa, faGlobe, faLocationArrow, faPersonDigging, faUmbrellaBeach
} from "@fortawesome/free-solid-svg-icons";
import HoverButton from "../components/HoverButton.jsx";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";
import {useState} from "react";
import {languages} from "./Language.jsx";

const Chooser = ({setPage, setContinent, mode, gray, blur, updateGray, updateBlur, region, setRegion}) => {

    const switchC = (continent) => {
        if (mode === "shapes" && (continent === "sonstige" || continent === "all")) return;
        setContinent(continent);
        setPage("game");
    }

    return (
        <>
            <Navigation onArrowLeft={() => region ? setRegion(false) : setPage("home")}
                        onSettings={() => setPage("options")}/>

            <div className="container ch">


                {!region && <>
                    <div className="row">
                        <HoverButton text={t("europe")} icon={faEarthEurope} onClick={() => switchC("europa")}/>
                        <HoverButton text={t("africa")} icon={faEarthAfrica} onClick={() => switchC("afrika")}/>
                    </div>


                    <div className="row">
                        <HoverButton text={t("america")} icon={faEarthAmerica} onClick={() => switchC("amerika")}/>
                        <HoverButton text={t("asia")} icon={faEarthAsia} onClick={() => switchC("asien")}/>
                    </div>

                    <div className="row">
                        <HoverButton text={t("oceania")} icon={faEarthOceania} onClick={() => switchC("ozeanien")}/>
                        <HoverButton className="off" text={t("official_countries")} icon={faGlobe}
                                     onClick={() => switchC("off")}/>
                    </div>

                    <div className="row">
                        <HoverButton text={t("Regionen")} icon={faGlobe} onClick={() => setRegion(true)}/>
                        <HoverButton text={mode === "shapes" || mode === "card" ? "Coming soon" : t("other")}
                                     icon={mode === "shapes" || mode === "card" ? faPersonDigging : faUmbrellaBeach}
                                     onClick={() => mode === "card" ? "" : switchC("sonstige")} className={mode === "shapes" || mode === "card" ? "red" : ""}/>
                    </div>
                    <div className="row all">
                        <HoverButton text={mode === "shapes" || mode === "card" ? "Coming soon" : t("all")}
                                     icon={mode === "shapes" || mode === "card" ? faPersonDigging : faGlobe}
                                     onClick={() => switchC("all")} className={mode === "shapes" || mode === "card" ? "red" : ""}/>
                    </div>
                </>}

                {region && <>
                    <div className="row">
                        <HoverButton text={t("germany")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png"
                                     onClick={() => switchC("deutschland")} />
                        <HoverButton text={t("usa")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_the_United_States_%281863-1865%29.svg/2560px-Flag_of_the_United_States_%281863-1865%29.svg.png"
                                     onClick={() => switchC("usa")} />
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "Coming soon" : t("spain")} icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://media.istockphoto.com/id/967321166/de/vektor/vektor-flagge-von-spanien-verh%C3%A4ltnis-2-3-spanische-nationalflagge-bicolor-rojigualda.jpg?s=612x612&w=0&k=20&c=8sKOPbXSGVRG8W6VLLtR6BrLSDA1nweu9BV9IbR8THs="
                                     onClick={() => mode === "shapes" ? "" : switchC("spanien")} className={mode === "shapes" ? "red" :""} />
                        <HoverButton text={mode === "shapes" ? "Coming soon" : t("italy")} icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://www.nationalflaggen.de/media/39/flagge-italien.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("italien")} className={mode === "shapes" ? "red" :""} />
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "Coming soon" : t("france")} icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_France_%282020%E2%80%93present%29.svg/1200px-Flag_of_France_%282020%E2%80%93present%29.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("frankreich")} className={mode === "shapes" ? "red" :""} />
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "Coming soon" : t("uk")} icon={mode === "shapes" || mode === "flag" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://www.nationalflaggen.de/media/29/flagge-grossbritannien.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("uk")} className={mode === "shapes" || mode === "flag" ? "red" :""} />
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "Coming soon" : t("portugal")} icon={mode === "shapes" || mode === "flag" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://www.flaggenmeer.de/media/weedesign_images2webp/2000/flagge-portugal-querformat.webp"
                                     onClick={() => mode === "shapes" ? "" : switchC("portugal")} className={mode === "shapes" || mode === "flag" ? "red" :""} />
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "Coming soon" : t("russia")} icon={mode === "shapes" || mode === "flag" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://www.nationalflaggen.de/media/447/flagge-russland.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("russland")} className={mode === "shapes" || mode === "flag" ? "red" :""} />
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "Coming soon" : t("turkey")} icon={mode === "shapes" || mode === "flag" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("türkei")} className={mode === "shapes" || mode === "flag" ? "red" :""} />
                        <HoverButton text={mode === "shapes" ? "Coming soon" : t("netherlands")} icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon
                                     image="https://www.sieunddieniederlande.nl/binaries/large/content/gallery/nl-netherlandsandyou/content-afbeeldingen/vlag-nederland.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("niederlande")} className={mode === "shapes" ? "red" :""} />
                    </div>
                </>}


                {mode === "flag" &&<div className="hk">
                    <div className="row">
                        <input type="checkbox" id="verschwommen" checked={blur} onChange={updateBlur} />
                        <label htmlFor="verschwommen">{t("blurred")}</label>
                    </div>
                    <div className="row">
                        <input type="checkbox" id="Grauton" checked={gray} onChange={updateGray} />
                        <label htmlFor="Grauton">{t("shade of grey")}</label>
                    </div>
                </div>}
            </div>
        </>
    )
}


export default Chooser;