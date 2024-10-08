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

const Chooser = ({subPage, setContinent, mode, gray, blur, updateGray, updateBlur, setSubPage, editMode, setEditMode, setPage}) => {

    const switchC = (continent) => {
        if (mode === "shapes" && (continent === "sonstige" || continent === "all")) return;
        setContinent(continent);
        setPage(editMode ? "atlas" : "game");
    }

    return (
        <>
            <Navigation onArrowLeft={() => subPage !== 0 ? setSubPage(0) : setPage("home")}
                        onSettings={() => setPage("options")}/>

            <button className="edit-btn" onClick={() => setEditMode(!editMode)}>
                <FontAwesomeIcon icon={editMode ? faAtlas : faGamepad} />
            </button>

            <div className={"container ch" + (subPage === 1 ? " regions" : "")}>


                {subPage === 0 && <>
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
                        <HoverButton text={t("schwierigkeit")} icon={faStarSolid} onClick={() => setSubPage(2)}/>
                    </div>

                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "Coming soon" : t("other")}
                                     icon={mode === "shapes" ? faPersonDigging : faUmbrellaBeach}
                                     onClick={() => mode === "shapes" ? "" : switchC("sonstige")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={t("regions")} icon={faGlobe} onClick={() => setSubPage(1)}/>
                    </div>
                    <div className="row">
                        <HoverButton className="off" text={t("official_countries")} icon={faGlobe}
                                     onClick={() => switchC("off")}/>
                        <HoverButton text={mode === "shapes" ? "Coming soon" : t("all")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe}
                                     onClick={() => switchC("all")} className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="mz">

                    </div>
                </>}

                {subPage === 1 && <>
                    <div className="row">
                        <HoverButton text={t("germany")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png"
                                     onClick={() => switchC("deutschland")}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("austria")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1280px-Flag_of_Austria.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("österreich")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("switzerland")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://cdn.pixabay.com/photo/2018/01/26/17/15/swiss-flag-3109178_1280.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("schweiz")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("spain")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://media.istockphoto.com/id/967321166/de/vektor/vektor-flagge-von-spanien-verh%C3%A4ltnis-2-3-spanische-nationalflagge-bicolor-rojigualda.jpg?s=612x612&w=0&k=20&c=8sKOPbXSGVRG8W6VLLtR6BrLSDA1nweu9BV9IbR8THs="
                                     onClick={() => mode === "shapes" ? "" : switchC("spanien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("italy")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://www.nationalflaggen.de/media/39/flagge-italien.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("italien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("france")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_France_%282020%E2%80%93present%29.svg/1200px-Flag_of_France_%282020%E2%80%93present%29.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("frankreich")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={t("usa")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_the_United_States_%281863-1865%29.svg/2560px-Flag_of_the_United_States_%281863-1865%29.svg.png"
                                     onClick={() => switchC("usa")}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("uk")}
                                     image="https://www.nationalflaggen.de/media/29/flagge-grossbritannien.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("uk")}
                                     className={(mode === "shapes" ? "red" : "") + " domrep"}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("turkey")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("türkei")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("portugal")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("portugal")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("netherlands")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/800px-Flag_of_the_Netherlands.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("niederlande")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("belgium")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/1280px-Flag_of_Belgium_%28civil%29.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("belgien")}
                                     className={mode === "shapes" ? "red" : ""}/>

                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("russia")}
                                     image="https://www.nationalflaggen.de/media/447/flagge-russland.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("russland")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("poland")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/2000px-Flag_of_Poland.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("polen")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("czechia")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1280px-Flag_of_the_Czech_Republic.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("tschechien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>

                    <div className="row">
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("china")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1536px-Flag_of_the_People%27s_Republic_of_China.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("china")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("japan")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1536px-Flag_of_Japan.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("japan")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("south korea")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/640px-Flag_of_South_Korea.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("südkorea")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>

                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("canada")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1920px-Flag_of_Canada_%28Pantone%29.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("kanada")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("australia")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1920px-Flag_of_Australia_%28converted%29.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("australien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("new zealand")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1920px-Flag_of_New_Zealand.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("neuseeland")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("estonia")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1920px-Flag_of_Estonia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("estland")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("latvia")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image=" https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1920px-Flag_of_Latvia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("lettland")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("lithuania")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1920px-Flag_of_Lithuania.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("litauen")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("nigeria")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1920px-Flag_of_Nigeria.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("nigeria")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("ethiopia")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1920px-Flag_of_Ethiopia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("äthiopien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("southafrica")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1280px-Flag_of_South_Africa.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("südafrika")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("sweden")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("schweden")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("norway")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1280px-Flag_of_Norway.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("norwegen")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("finland")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1920px-Flag_of_Finland.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("finnland")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("guatemala")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/1024px-Flag_of_Guatemala.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("guatemala")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("belize")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1024px-Flag_of_Belize.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("belize")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("elsalvador")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/1024px-Flag_of_El_Salvador.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("elsalvador")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("mexico")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1024px-Flag_of_Mexico.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("mexiko")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("honduras")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1024px-Flag_of_Honduras.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("honduras")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("nicaragua")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/1024px-Flag_of_Nicaragua.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("nicaragua")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("costarica")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/1024px-Flag_of_Costa_Rica.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("costarica")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("panama")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/1024px-Flag_of_Panama.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("panama")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("jamaica")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1024px-Flag_of_Jamaica.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("jamaika")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("cuba")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1920px-Flag_of_Cuba.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("kuba")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("haiti")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/1920px-Flag_of_Haiti.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("haiti")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                        <HoverButton className="domrep" text={mode === "shapes" ? "No Data" : t("dominicanrepublic")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("dominikanischerepublik")}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "capital" || mode === "flag" ? "No Data" : t("bahamas")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/1920px-Flag_of_the_Bahamas.svg.png"
                                     onClick={() => mode === "capital" || mode === "flag" ? "" : switchC("bahamas")}
                                     className={mode === "capital" || mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("antiguaandbarbuda")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/1280px-Flag_of_Antigua_and_Barbuda.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("antiguaundbarbuda")}
                                     className={(mode === "shapes" || mode === "flag" ? "red" : "") + " domrep"}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("barbados")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/1280px-Flag_of_Barbados.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("barbados")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton
                            text={mode === "shapes" || mode === "flag" ? "No Data" : t("stvincentandthegrenadines")}
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/1024px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png"
                            onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("stvincentunddiegrenadinen")}
                            className={(mode === "shapes" || mode === "flag" ? "red" : "") + " domrep"}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("stlucia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/1024px-Flag_of_Saint_Lucia.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("stlucia")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("stkittsandnevis")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/1024px-Flag_of_Saint_Kitts_and_Nevis.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("stkittsundnevis")}
                                     className={(mode === "shapes" || mode === "flag" ? "red" : "") + " domrep"}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("dominica")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/1920px-Flag_of_Dominica.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("dominica")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("grenada")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/1920px-Flag_of_Grenada.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("grenada")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("trinidadandtobago")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/1920px-Flag_of_Trinidad_and_Tobago.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("trinidadundtobago")}
                                     className={(mode === "shapes" ? "red" : "") + " domrep"}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("venezuela")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1024px-Flag_of_Venezuela.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("venezuela")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("colombia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1024px-Flag_of_Colombia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("kolumbien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("ecuador")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1024px-Flag_of_Ecuador.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("ecuador")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("peru")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1280px-Flag_of_Peru.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("peru")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("bolivia")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/1280px-Flag_of_Bolivia.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("bolivien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("chile")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1280px-Flag_of_Chile.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("chile")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("paraguay")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1920px-Flag_of_Paraguay.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("paraguay")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("uruguay")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1280px-Flag_of_Uruguay.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("uruguay")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("argentina")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1920px-Flag_of_Argentina.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("argentinien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                    </div>
                    <div className="row">
                        <HoverButton text={mode === "shapes" ? "No Data" : t("brazil")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("brasilien")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("guyana")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/1920px-Flag_of_Guyana.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("guyana")}
                                     className={mode === "shapes" ? "red" : ""}/>
                        <HoverButton text={mode === "shapes" || mode === "flag" ? "No Data" : t("suriname")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/1280px-Flag_of_Suriname.svg.png"
                                     onClick={() => mode === "shapes" || mode === "flag" ? "" : switchC("suriname")}
                                     className={mode === "shapes" || mode === "flag" ? "red" : ""}/>
                    </div>
                    <div className="row">


                    </div>
                </>}

                {subPage === 2 && <>
                    <div className="row">
                        <HoverButton text={t("grundwissen")} icon={faStarHalf} onClick={() => switchC("grundwissen")}
                                     className="gw"
                        />
                        <HoverButton text={t("einfach")} icon={faStarRegular}
                                     onClick={() => switchC("einfach")}
                                     className="gw"
                        />
                    </div>

                    <div className="row">
                        <HoverButton text={t("mittel")} icon={faStarHalfStroke} onClick={() => switchC("mittel")}
                                     className="gw"
                        />
                        <HoverButton text={t("schwer")} icon={faStarSolid} onClick={() => switchC("schwer")}
                                     className="gw"
                        />
                    </div>
                </>}
            </div>
        </>
    )
}


export default Chooser;