import {
    faAtlas,
    faEarthAfrica,
    faEarthAmerica,
    faEarthAsia,
    faEarthEurope,
    faEarthOceania,
    faFlagUsa,
    faGamepad,
    faGlobe,
    faLocationArrow,
    faPersonDigging,
    faUmbrellaBeach,
    faStar as faStarSolid
} from "@fortawesome/free-solid-svg-icons";
import HoverButton from "../components/HoverButton.jsx";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";
import {useState} from "react";
import {languages} from "./Language.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as faStarRegular, faStarHalf, faStarHalfStroke} from "@fortawesome/free-regular-svg-icons";
import "./Chooser.css";

const Chooser = ({subPage, setContinent, mode, gray, blur, updateGray, updateBlur, setSubPage, editMode, setEditMode, setPage, hidden}) => {

    const switchC = (continent) => {
        if (mode === "shapes" && (continent === "sonstige" || continent === "all")) return;
        setContinent(continent);
        setPage(editMode ? "atlas" : "game");
    }

    const regions = {
        "Nordamerika": [
            {
                text: mode === "shapes" || mode === "flag" ? "No Data" : t("antiguaandbarbuda"),
                search: "antiguaandbarbuda",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/1280px-Flag_of_Antigua_and_Barbuda.svg.png",
                onClick: () => mode === "shapes" || mode === "flag" ? "" : switchC("antiguaundbarbuda")
            }
        ]
    }

    return (
        <div style={hidden ? {display: "none"} : {}}>
            <Navigation onArrowLeft={() => subPage !== 0 ? setSubPage(0) : setPage("home")}
                        onSettings={() => setPage("options")}/>

            <button className="atlas" onClick={() => setEditMode(!editMode)}>
                <FontAwesomeIcon className="atlas-icon" icon={editMode ? faAtlas : faGamepad} />
            </button>



            <div className={"container ch" + (subPage === 1 ? " regions" : "")}>


                {subPage === 0 && <>

                    <div className="row abstand">
                        <HoverButton className="kontinente" text={t("northamerica")} icon={faEarthAmerica}
                                     onClick={() => switchC("nordamerika")}/>
                        <HoverButton className="kontinente" text={t("southamerica")} icon={faEarthAmerica}
                                     onClick={() => switchC("südamerika")}/>
                    </div>

                    <div className="row abstand">
                        <HoverButton className="kontinente" text={t("europe")} icon={faEarthEurope}
                                     onClick={() => switchC("europa")}/>
                        <HoverButton className="kontinente" text={t("africa")} icon={faEarthAfrica}
                                     onClick={() => switchC("afrika")}/>
                    </div>

                    <div className="row abstand">
                        <HoverButton className="kontinente" text={t("asia")} icon={faEarthAsia}
                                     onClick={() => switchC("asien")}/>
                        <HoverButton className="kontinente" text={t("oceania")} icon={faEarthOceania}
                                     onClick={() => switchC("ozeanien")}/>
                    </div>
                    <div className="row center">
                        <HoverButton className="kontinente" text={t("world")} icon={faGlobe}
                                     onClick={() => switchC("off")}/>
                    </div>
                    <div className="row abstand">
                        <HoverButton text={mode === "shapes" ? "Coming soon" : t("territories")}
                                     icon={mode === "shapes" ? faPersonDigging : faUmbrellaBeach}
                                     onClick={() => mode === "shapes" ? "" : switchC("territorien")}
                                     className={(mode === "shapes" ? "red" : "") + " kontinente"}/>
                        <HoverButton className="kontinente" text={t("regions")} icon={faGlobe}
                                     onClick={() => setSubPage(1)}/>
                    </div>
                </>}

                {subPage === 1 && <>
                    <div className="row">
                        <HoverButton className="regionen" text={t("germany")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png"
                                     onClick={() => switchC("deutschland")}/>
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("austria")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1280px-Flag_of_Austria.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("österreich")}/>
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("switzerland")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://cdn.pixabay.com/photo/2018/01/26/17/15/swiss-flag-3109178_1280.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("schweiz")}/>
                    </div>
                    <div className="row">
                        <HoverButton className="regionen" text={t("usa")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_the_United_States_%281863-1865%29.svg/2560px-Flag_of_the_United_States_%281863-1865%29.svg.png"
                                     onClick={() => switchC("usa")}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("uk")}
                                     image="https://www.nationalflaggen.de/media/29/flagge-grossbritannien.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("uk")}
                                     className={(mode === "shapes" ? "red" : "") + " domrep" + " regionen"}/>
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("bavaria")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_Bavaria_%28lozengy%29.svg/1920px-Flag_of_Bavaria_%28lozengy%29.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("bayern")}/>
                    </div>

                    <div className="row center">
                        <h2 className="america">━━━━━━━━━━━━━━━━━ Nordamerika ━━━━━━━━━━━━━━━━━</h2>
                    </div>

                    <div className="row">
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("antiguaandbarbuda")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/1280px-Flag_of_Antigua_and_Barbuda.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("antiguaundbarbuda")}
                                     className={(mode === "shapes" || mode === "flag" ? "red" : "") + " domrep"}/>
                        <HoverButton text={mode === "capital" || mode === "flag" ? "No Data" : t("bahamas")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/1920px-Flag_of_the_Bahamas.svg.png"
                                     onClick={() => mode === "capital" || mode === "flag" ? "" : switchC("bahamas")}
                                     className={mode === "capital" || mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("barbados")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/1280px-Flag_of_Barbados.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("barbados")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("belize")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1024px-Flag_of_Belize.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("belize")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("costarica")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/1024px-Flag_of_Costa_Rica.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("costarica")}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("dominica")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/1920px-Flag_of_Dominica.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("dominica")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("dominicanrepublic")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("dominikanischerepublik")}
                                     className={(mode === "shapes" ? "red" : "") + " domrep" + " regionen"}/>
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("elsalvador")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/1024px-Flag_of_El_Salvador.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("elsalvador")}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("grenada")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/1920px-Flag_of_Grenada.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("grenada")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("guatemala")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/1024px-Flag_of_Guatemala.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("guatemala")}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("haiti")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/1920px-Flag_of_Haiti.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("haiti")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("honduras")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1024px-Flag_of_Honduras.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("honduras")}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("jamaica")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1024px-Flag_of_Jamaica.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("jamaika")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("canada")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1920px-Flag_of_Canada_%28Pantone%29.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("kanada")}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("cuba")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1920px-Flag_of_Cuba.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("kuba")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("mexico")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1024px-Flag_of_Mexico.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("mexiko")}/>
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("nicaragua")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/1024px-Flag_of_Nicaragua.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("nicaragua")}/>
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("panama")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/1024px-Flag_of_Panama.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("panama")}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("stkittsandnevis")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/1024px-Flag_of_Saint_Kitts_and_Nevis.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("stkittsundnevis")}
                                     className={(mode === "shapes" || mode === "flag" ? "red" : "") + " domrep2"}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("stlucia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/1024px-Flag_of_Saint_Lucia.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("stlucia")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                        <HoverButton
                            text={mode === "shapes" || mode === "flag" ? "No Data" : t("stvincentandthegrenadines")}
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/1024px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png"
                            onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("stvincentunddiegrenadinen")}
                            className={(mode === "shapes" || mode === "flag" ? "red" : "") + " domrep2"}/>
                    </div>

                    <div className="row center">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("trinidadandtobago")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/1920px-Flag_of_Trinidad_and_Tobago.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("trinidadundtobago")}
                                     className={(mode === "shapes" ? "red" : "") + " domrep" + " regionen"}/>
                        <HoverButton className="regionen" text={t("usa")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_the_United_States_%281863-1865%29.svg/2560px-Flag_of_the_United_States_%281863-1865%29.svg.png"
                                     onClick={() => switchC("usa")}/>
                    </div>
                    <div className="row center">
                        <h2 className="america">━━━━━━━━━━━━━━━━━ Südamerika ━━━━━━━━━━━━━━━━━</h2>
                    </div>
                    <div className="row">
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("argentina")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1920px-Flag_of_Argentina.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("argentinien")}/>
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("bolivia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/1280px-Flag_of_Bolivia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("bolivien")}/>
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("brazil")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("brasilien")}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("chile")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1280px-Flag_of_Chile.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("chile")}
                                     className={(mode === "shapes" ? "red" : "") + " regionen"}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("ecuador")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1024px-Flag_of_Ecuador.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("ecuador")}
                                     className={(mode === "shapes" ? "red" : "") + " regionen"}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("guyana")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/1920px-Flag_of_Guyana.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("guyana")}
                                     className={(mode === "shapes" ? "red" : "") + " regionen"}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("colombia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1024px-Flag_of_Colombia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("kolumbien")}
                                     className={(mode === "shapes" ? "red" : "") + " regionen"}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("paraguay")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1920px-Flag_of_Paraguay.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("paraguay")}
                                     className={(mode === "shapes" ? "red" : "") + " regionen"}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("peru")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1280px-Flag_of_Peru.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("peru")}
                                     className={(mode === "shapes" ? "red" : "") + " regionen"}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("suriname")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/1280px-Flag_of_Suriname.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("suriname")}
                                     className={(mode === "flag" ? "red" : "") + " regionen"}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("uruguay")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1280px-Flag_of_Uruguay.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("uruguay")}
                                     className={(mode === "shapes" ? "red" : "") + " regionen"}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("venezuela")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1024px-Flag_of_Venezuela.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("venezuela")}
                                     className={(mode === "shapes" ? "red" : "") + " regionen"}/>
                    </div>
                    <div className="row center">
                        <h2 className="america">━━━━━━━━━━━━━━━━━━ Europa ━━━━━━━━━━━━━━━━━━</h2>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("albania")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1280px-Flag_of_Albania.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("albanien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("andorra")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/1024px-Flag_of_Andorra.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("andorra")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("belarus")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1024px-Flag_of_Belarus.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("belarus")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("belgium")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/1280px-Flag_of_Belgium_%28civil%29.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("belgien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("bosniaandherzegovina")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1920px-Flag_of_Bosnia_and_Herzegovina.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("bosnienundherzegowina")}
                                     className={(mode === "shapes" ? "red" : "") + " domrep"}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("bulgaria")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1920px-Flag_of_Bulgaria.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("bulgarien")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("denmark")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1024px-Flag_of_Denmark.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("dänemark")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={t("germany")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png"
                                     onClick={() => switchC("deutschland")}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("estonia")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1920px-Flag_of_Estonia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("estland")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("finland")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1920px-Flag_of_Finland.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("finnland")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("france")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_France_%282020%E2%80%93present%29.svg/1200px-Flag_of_France_%282020%E2%80%93present%29.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("frankreich")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("greece")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1024px-Flag_of_Greece.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("griechenland")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "capital" ? "No Data" : t("ireland")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1024px-Flag_of_Ireland.svg.png"
                                     onClick={() => mode === "capital" ? "" : switchC("irland")}
                                     className={mode === "capital" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("iceland")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1024px-Flag_of_Iceland.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("island")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("italy")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://www.nationalflaggen.de/media/39/flagge-italien.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("italien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("kosovo")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/1280px-Flag_of_Kosovo.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("kosovo")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("croatia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1920px-Flag_of_Croatia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("kroatien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("latvia")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image=" https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1920px-Flag_of_Latvia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("lettland")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" || mode === "capital" ? "No Data" : t("liechtenstein")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/1024px-Flag_of_Liechtenstein.svg.png"
                                     onClick={() => mode === "shapes" || mode === "capital" ? "" : switchC("liechtenstein")}
                                     className={mode === "shapes" || mode === "capital" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("lithuania")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1920px-Flag_of_Lithuania.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("litauen")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("luxembourg")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1024px-Flag_of_Luxembourg.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("luxemburg")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("malta")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/1024px-Flag_of_Malta.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("malta")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("moldova")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1024px-Flag_of_Moldova.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("moldawien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" || mode === "capital" ? "No Data" : t("monaco")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/1024px-Flag_of_Monaco.svg.png"
                                     onClick={() => mode === "flag" || mode === "capital" ? "" : switchC("monaco")}
                                     className={mode === "flag" || mode === "capital" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("montenegro")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/1920px-Flag_of_Montenegro.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("montenegro")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("netherlands")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/800px-Flag_of_the_Netherlands.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("niederlande")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" || mode === "capital" ? "No Data" : t("northmacedonia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/1920px-Flag_of_North_Macedonia.svg.png"
                                     onClick={() => mode === "flag" || mode === "capital" ? "" : switchC("nordmazedonien")}
                                     className={(mode === "flag" || mode === "capital" ? "red" : "") + " domrep"}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("norway")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1280px-Flag_of_Norway.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("norwegen")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("austria")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1280px-Flag_of_Austria.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("österreich")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("poland")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/2000px-Flag_of_Poland.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("polen")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("portugal")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("portugal")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("romania")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1280px-Flag_of_Romania.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("rumänien")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("russia")}
                                     image="https://www.nationalflaggen.de/media/447/flagge-russland.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("russland")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "capital" ? "No Data" : t("sanmarino")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/1024px-Flag_of_San_Marino.svg.png"
                                     onClick={() => mode === "capital" ? "" : switchC("sanmarino")}
                                     className={mode === "capital" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("sweden")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("schweden")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("switzerland")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://cdn.pixabay.com/photo/2018/01/26/17/15/swiss-flag-3109178_1280.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("schweiz")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("serbia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1280px-Flag_of_Serbia.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("serbien")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("slovakia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1280px-Flag_of_Slovakia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("slowakei")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("slovenia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1920px-Flag_of_Slovenia.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("slowenien")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("spain")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://media.istockphoto.com/id/967321166/de/vektor/vektor-flagge-von-spanien-verh%C3%A4ltnis-2-3-spanische-nationalflagge-bicolor-rojigualda.jpg?s=612x612&w=0&k=20&c=8sKOPbXSGVRG8W6VLLtR6BrLSDA1nweu9BV9IbR8THs="
                                     onClick={() => mode === "shapes" ? "" : switchC("spanien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("czechia")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1280px-Flag_of_the_Czech_Republic.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("tschechien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("turkey")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("türkei")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("ukraine")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1024px-Flag_of_Ukraine.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("ukraine")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("hungary")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1920px-Flag_of_Hungary.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("ungarn")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("uk")}
                                     image="https://www.nationalflaggen.de/media/29/flagge-grossbritannien.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("uk")}
                                     className={(mode === "shapes" ? "red" : "") + " domrep"}/>
                    </div>
                    <div className="row center">
                        <HoverButton text={mode === "flag" ? "No Data" : t("cyprus")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/1024px-Flag_of_Cyprus.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("zypern")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row center">
                        <h2 className="america">━━━━━━━━━━━━━━━━━━ Afrika ━━━━━━━━━━━━━━━━━━</h2>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("egypt")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1280px-Flag_of_Egypt.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("ägypten")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("algeria")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1024px-Flag_of_Algeria.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("algerien")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("angola")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1280px-Flag_of_Angola.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("angola")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("equatorialguinea")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/1024px-Flag_of_Equatorial_Guinea.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("äquatorialguinea")}
                                     className={(mode === "flag" ? "red" : "") + " domrep"}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("ethiopia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1920px-Flag_of_Ethiopia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("äthiopien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("benin")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/1024px-Flag_of_Benin.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("benin")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("botswana")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/1280px-Flag_of_Botswana.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("botswana")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("burkinafaso")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/1280px-Flag_of_Burkina_Faso.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("burkinafaso")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("burundi")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/1920px-Flag_of_Burundi.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("burundi")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("djibouti")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/1280px-Flag_of_Djibouti.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("dschibuti")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("ivorycoast")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/1280px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("elfenbeinküste")}
                                     className={(mode === "flag" ? "red" : "") + " domrep"}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("eritrea")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/1920px-Flag_of_Eritrea.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("eritrea")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("eswatini")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/1280px-Flag_of_Eswatini.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("eswatini")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("gabon")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/1280px-Flag_of_Gabon.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("gabun")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("gambia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/1280px-Flag_of_The_Gambia.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("gambia")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("ghana")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1024px-Flag_of_Ghana.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("ghana")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("guinea")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/1024px-Flag_of_Guinea.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("guinea")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("guineabissau")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/1024px-Flag_of_Guinea-Bissau.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("guineabissau")}
                                     className={(mode === "flag" ? "red" : "") + " domrep"}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("cameroon")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/1024px-Flag_of_Cameroon.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("kamerun")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("capeverde")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/1920px-Flag_of_Cape_Verde.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("kapverde")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("kenya")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1024px-Flag_of_Kenya.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("kenia")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("comoros")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/1024px-Flag_of_the_Comoros.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("komoren")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("democraticrepubliccongo")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/1024px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("demokratischerepublikkongo")}
                                     className={(mode === "flag" ? "red" : "") + " domrep2"}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("congo")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/1024px-Flag_of_the_Republic_of_the_Congo.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("kongo")}
                                     className={(mode === "flag" ? "red" : "") + " "}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("lesotho")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/1024px-Flag_of_Lesotho.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("lesotho")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("liberia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/1024px-Flag_of_Liberia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("liberia")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("libya")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/1920px-Flag_of_Libya.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("libyen")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("madagascar")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/1024px-Flag_of_Madagascar.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("madagaskar")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("malawi")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/1024px-Flag_of_Malawi.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("malawi")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("mali")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/1024px-Flag_of_Mali.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("mali")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("morocco")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/1024px-Flag_of_Morocco.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("marokko")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("mauritania")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/1024px-Flag_of_Mauritania.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("mauretanien")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("mauritius")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/1024px-Flag_of_Mauritius.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("mauritius")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("mozambique")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/1280px-Flag_of_Mozambique.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("mosambik")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("namibia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/1280px-Flag_of_Namibia.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("namibia")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("niger")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/1024px-Flag_of_Niger.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("niger")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("nigeria")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1920px-Flag_of_Nigeria.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("nigeria")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("rwanda")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/1280px-Flag_of_Rwanda.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("ruanda")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("zambia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/1280px-Flag_of_Zambia.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("sambia")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("saotomeandprincipe")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/1920px-Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("saotomeundprincipe")}
                                     className={(mode === "flag" ? "red" : "") + " domrep2"}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("senegal")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1280px-Flag_of_Senegal.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("senegal")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("seychelles")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/1920px-Flag_of_Seychelles.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("seychellen")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("sierraleone")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/1280px-Flag_of_Sierra_Leone.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("sierraleone")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("zimbabwe")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/1920px-Flag_of_Zimbabwe.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("simbabwe")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("somalia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/1280px-Flag_of_Somalia.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("somalia")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("southafrica")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1280px-Flag_of_South_Africa.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("südafrika")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("sudan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/1920px-Flag_of_Sudan.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("sudan")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("southsudan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/1920px-Flag_of_South_Sudan.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("südsudan")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("tanzania")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/1280px-Flag_of_Tanzania.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("tansania")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("togo")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/1920px-Flag_of_Togo.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("togo")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("chad")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/1280px-Flag_of_Chad.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("tschad")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row center">
                        <HoverButton text={mode === "flag" ? "No Data" : t("tunisia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1024px-Flag_of_Tunisia.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("tunesien")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("uganda")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/1280px-Flag_of_Uganda.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("uganda")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("centralafricanrepublic")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/1280px-Flag_of_the_Central_African_Republic.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("zentralafrikanischerepublik")}
                                     className={(mode === "flag" ? "red" : "") + " domrep2"}/>
                    </div>
                    <div className="row center">
                        <h2 className="america">━━━━━━━━━━━━━━━━━━ Asien ━━━━━━━━━━━━━━━━━━</h2>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("afghanistan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/1920px-Flag_of_the_Taliban.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("afghanistan")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("armenia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1920px-Flag_of_Armenia.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("armenien")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("azerbaijan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1920px-Flag_of_Azerbaijan.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("aserbaidschan")}
                                     className={(mode === "flag" ? "red" : "") + " domrep"}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "capital" ? "No Data" : t("bahrain")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/1024px-Flag_of_Bahrain.svg.png"
                                     onClick={() => mode === "capital" ? "" : switchC("bahrain")}
                                     className={mode === "capital" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("bangladesh")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1024px-Flag_of_Bangladesh.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("bangladesch")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("bhutan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/1024px-Flag_of_Bhutan.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("bhutan")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("brunei")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/1024px-Flag_of_Brunei.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("brunei")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("china")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1536px-Flag_of_the_People%27s_Republic_of_China.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("china")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("georgia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1024px-Flag_of_Georgia.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("georgien")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("india")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1024px-Flag_of_India.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("indien")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("indonesia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1024px-Flag_of_Indonesia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("indonesien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("iraq")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/1024px-Flag_of_Iraq.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("irak")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("iran")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/1920px-Flag_of_Iran.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("iran")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("israel")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1280px-Flag_of_Israel.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("israel")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("japan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1536px-Flag_of_Japan.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("japan")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("yemen")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/1280px-Flag_of_Yemen.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("jemen")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("jordan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1920px-Flag_of_Jordan.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("jordanien")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("cambodia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1920px-Flag_of_Cambodia.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("kambodscha")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("kazakhstan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Kazakhstan_%28President_of_Kazakhstan_website%29.svg/1024px-Flag_of_Kazakhstan_%28President_of_Kazakhstan_website%29.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("kasachstan")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("qatar")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1024px-Flag_of_Qatar.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("katar")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("kyrgyzstan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1024px-Flag_of_Kyrgyzstan.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("kirgisistan")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("kuwait")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/1024px-Flag_of_Kuwait.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("kuwait")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("laos")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/1024px-Flag_of_Laos.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("laos")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("lebanon")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/1024px-Flag_of_Lebanon.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("libanon")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("malaysia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1024px-Flag_of_Malaysia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("malaysia")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("maledives")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/1024px-Flag_of_Maldives.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("malediven")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("mongolia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/1024px-Flag_of_Mongolia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("mongolei")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("myanmar")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/1024px-Flag_of_Myanmar.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("myanmar")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("nepal")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/800px-Flag_of_Nepal.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("nepal")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("northkorea")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1024px-Flag_of_North_Korea.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("nordkorea")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row center">
                        <HoverButton text={mode === "flag" ? "No Data" : t("oman")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/1024px-Flag_of_Oman.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("oman")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("pakistan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1024px-Flag_of_Pakistan.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("pakistan")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("philippines")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1024px-Flag_of_the_Philippines.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("philippinen")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("saudiarabia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1024px-Flag_of_Saudi_Arabia.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("saudiarabien")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" || mode === "capital" ? "No Data" : t("singapore")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1024px-Flag_of_Singapore.svg.png"
                                     onClick={() => mode === "flag" || mode === "capital" ? "" : switchC("singapur")}
                                     className={mode === "flag" || mode === "capital" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("srilanka")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1024px-Flag_of_Sri_Lanka.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("srilanka")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("southkorea")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/640px-Flag_of_South_Korea.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("südkorea")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("syria")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/1024px-Flag_of_Syria.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("syrien")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("tajikistan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/1024px-Flag_of_Tajikistan.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("tadschikistan")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row center">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("taiwan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1280px-Flag_of_the_Republic_of_China.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("taiwan")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("thailand")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1024px-Flag_of_Thailand.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("thailand")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("timorleste")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/1024px-Flag_of_East_Timor.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("timorleste")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row center">
                        <HoverButton text={mode === "flag" ? "No Data" : t("turkmenistan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/1024px-Flag_of_Turkmenistan.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("turkmenistan")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("uzbekistan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1024px-Flag_of_Uzbekistan.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("usbekistan")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("unitedarabicemirates")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1024px-Flag_of_the_United_Arab_Emirates.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("vereinigtearabischeemirate")}
                                     className={(mode === "shapes" ? "red" : "") + " domrep2"}/>
                    </div>
                    <div className="row center">
                        <HoverButton text={mode === "flag" ? "No Data" : t("vietnam")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1024px-Flag_of_Vietnam.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("vietnam")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row center">
                        <h2 className="america">━━━━━━━━━━━━━━━━━ Ozeanien ━━━━━━━━━━━━━━━━━</h2>
                    </div>
                    <div className="row center">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("australia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1920px-Flag_of_Australia_%28converted%29.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("australien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("fiji")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/1920px-Flag_of_Fiji.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("fidschi")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("micronesia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/1920px-Flag_of_the_Federated_States_of_Micronesia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("mikronesien")}
                                     className={(mode === "shapes" ? "red" : "") + " domrep2"}/>
                    </div>
                    <div className="row center">
                        <HoverButton text={mode === "flag" ? "No Data" : t("nauru")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/1920px-Flag_of_Nauru.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("nauru")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("new zealand")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1920px-Flag_of_New_Zealand.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("neuseeland")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("palau")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/1920px-Flag_of_Palau.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("palau")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row center">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("papuanewguinea")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/1280px-Flag_of_Papua_New_Guinea.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("papuaneuguinea")}
                                     className={(mode === "shapes" ? "red" : "") + " domrep"}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("solomonislands")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/1920px-Flag_of_the_Solomon_Islands.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("salomonen")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("samoa")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/1920px-Flag_of_Samoa.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("samoa")}
                                     className={mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "flag" ? "No Data" : t("tonga")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/1920px-Flag_of_Tonga.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("tonga")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "flag" ? "No Data" : t("tuvalu")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/1920px-Flag_of_Tuvalu.svg.png"
                                     onClick={() => mode === "flag" ? "" : switchC("tuvalu")}
                                     className={mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("vanuatu")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/1920px-Flag_of_Vanuatu.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("vanuatu")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                </>}

                {subPage === 2 && <>
                    <div className="row">
                        <HoverButton text={t("grundwissen")} icon={faStarHalf} onClick={() => switchC("grundwissen")}
                                     className="schwierigkeit"
                        />
                        <HoverButton text={t("einfach")} icon={faStarRegular}
                                     onClick={() => switchC("einfach")}
                                     className="schwierigkeit"
                        />
                    </div>

                    <div className="row">
                        <HoverButton text={t("mittel")} icon={faStarHalfStroke} onClick={() => switchC("mittel")}
                                     className="schwierigkeit"
                        />
                        <HoverButton text={t("schwer")} icon={faStarSolid} onClick={() => switchC("schwer")}
                                     className="schwierigkeit"
                        />
                    </div>
                </>}
            </div>
        </div>
    )
}


export default Chooser;