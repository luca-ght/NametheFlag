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
    faStar as faStarSolid, faSearch
} from "@fortawesome/free-solid-svg-icons";
import HoverButton from "../components/HoverButton.jsx";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";
import {Fragment, useState} from "react";
import {languages} from "./Language.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as faStarRegular, faStarHalf, faStarHalfStroke} from "@fortawesome/free-regular-svg-icons";
import "./Chooser.css";

const Chooser = ({subPage, setContinent, mode, gray, blur, updateGray, updateBlur, setSubPage, editMode, setEditMode, setPage, hidden}) => {

    const [search, setSearch] = useState("");

    const switchC = (continent) => {
        if (mode === "shapes" && (continent === "sonstige" || continent === "all")) return;
        setContinent(continent);
        setPage(editMode ? "atlas" : "game");
    }

    const regions = {
        "Nordamerika": [
            {
                text: () => mode === "flag" ? "No Data" : t("antiguaandbarbuda"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/1280px-Flag_of_Antigua_and_Barbuda.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("antiguaundbarbuda"),
                className: () => (mode === "flag" ? "red" : "") + " domrep",
                searches: ["antiguaundbarbuda","antiguaandbarbuda"]
            },
            {
                text: () =>  mode === "capital" || mode === "flag" ? "No Data" : t("bahamas"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/1920px-Flag_of_the_Bahamas.svg.png",
                onClick: () => mode === "capital" || mode === "flag" ? "" : switchC("bahamas"),
                className: () => mode === "capital" || mode === "flag" ? "red" : "",
                searches: ["bahamas"]
            },
     {
                text: () => mode === "flag" ? "No Data" : t("barbados"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/1280px-Flag_of_Barbados.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("barbados"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["barbados"]
            },
     {
                text: () => mode === "flag" ? "No Data" : t("belize"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1024px-Flag_of_Belize.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("belize"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["belize"]
            },
     {
                text: () => t("costarica"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/1024px-Flag_of_Costa_Rica.svg.png",
                onClick: () => switchC("costarica"),
                searches: ["costarica",]
            },
     {
                text: () => mode === "flag" ? "No Data" : t("dominica"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/1920px-Flag_of_Dominica.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("dominica"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["dominica"]
            },
     {
                text: () => t("dominicanrepublic"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png",
                onClick: () => switchC("dominikanischerepublik"),
                className: () => "domrep",
                searches: ["dominikanischerepublik","dominicanrepublic"]
            },
 {
                text: () => t("elsalvador"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/1024px-Flag_of_El_Salvador.svg.png",
                onClick: () => switchC("elsalvador"),
                searches: ["elsalvador"]
            },
 {
                text: () => mode === "flag" ? "No Data" : t("grenada"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/1920px-Flag_of_Grenada.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("grenada"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["grenada"]
            },
 {
                text: () => t("guatemala"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/1024px-Flag_of_Guatemala.svg.png",
                onClick: () => switchC("guatemala"),
                className: () => mode === "" ? "red" : "",
                searches: ["guatemala"]
            },
 {
                text: () => mode === "flag" ? "No Data" : t("haiti"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/1920px-Flag_of_Haiti.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("haiti"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["haiti"]
            },
 {
                text: () => t("honduras"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1024px-Flag_of_Honduras.svg.png",
                onClick: () => mode === "" ? "" : switchC("honduras"),
                searches: ["honduras"]
            },
 {
                text: () => mode === "" ? "No Data" : t(""),
                image: "",
                onClick: () => mode === "" ? "" : switchC(""),
                className: () => mode === "" ? "red" : "",
                searches: ["",""]
            },
 {
                text: () => mode === "" ? "No Data" : t(""),
                image: "",
                onClick: () => mode === "" ? "" : switchC(""),
                className: () => mode === "" ? "red" : "",
                searches: ["",""]
            },
 {
                text: () => mode === "" ? "No Data" : t(""),
                image: "",
                onClick: () => mode === "" ? "" : switchC(""),
                className: () => mode === "" ? "red" : "",
                searches: ["",""]
            },
 {
                text: () => mode === "" ? "No Data" : t(""),
                image: "",
                onClick: () => mode === "" ? "" : switchC(""),
                className: () => mode === "" ? "red" : "",
                searches: ["",""]
            },
 {
                text: () => mode === "" ? "No Data" : t(""),
                image: "",
                onClick: () => mode === "" ? "" : switchC(""),
                className: () => mode === "" ? "red" : "",
                searches: ["",""]
            },
 {
                text: () => mode === "" ? "No Data" : t(""),
                image: "",
                onClick: () => mode === "" ? "" : switchC(""),
                className: () => mode === "" ? "red" : "",
                searches: ["",""]
            },
 {
                text: () => mode === "" ? "No Data" : t(""),
                image: "",
                onClick: () => mode === "" ? "" : switchC(""),
                className: () => mode === "" ? "red" : "",
                searches: ["",""]
            },
 {
                text: () => mode === "" ? "No Data" : t(""),
                image: "",
                onClick: () => mode === "" ? "" : switchC(""),
                className: () => mode === "" ? "red" : "",
                searches: ["",""]
            },
 {
                text: () => mode === "" ? "No Data" : t(""),
                image: "",
                onClick: () => mode === "" ? "" : switchC(""),
                className: () => mode === "" ? "red" : "",
                searches: ["",""]
            },
        ],
        "Europa": [
            {
                text: () => t("guatemala"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/1024px-Flag_of_Guatemala.svg.png",
                onClick: () => switchC("guatemala"),
                className: () => mode === "" ? "red" : "",
                searches: ["guatemala"]
            }
        ],
        "Asien": [
            {
                text: () => t("dominicanrepublic"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png",
                onClick: () => switchC("dominikanischerepublik"),
                className: () => "domrep",
                searches: ["asdf"]
            },
        ]
    };

    const filteredRegions = Object.keys(regions).reduce((result, regionKey) => {
        const filtered = regions[regionKey].filter((region) =>
            region.searches.some((s) => s.toLowerCase().includes(search.replace(" ", "").toLowerCase()))
        );
        if (filtered.length > 0) {
            result[regionKey] = filtered;
        }
        return result;
    }, {});

    return (
        <div style={hidden ? {display: "none"} : {}}>
            <Navigation onArrowLeft={() => subPage !== 0 ? setSubPage(0) : setPage("home")}
                        onSettings={() => setPage("design")}/>

            {subPage === 1 && <div className="centered-search">
                <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input type="text" placeholder="Suchen..." value={search} onChange={(event) => setSearch(event.target.value)}/>
                </div></div>}

            <button className="atlas" onClick={() => setEditMode(!editMode)}>
                <FontAwesomeIcon className="atlas-icon" icon={editMode ? faAtlas : faGamepad}/>
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
                    {search === "" && <>
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
                        </>}


                    {Object.keys(filteredRegions).map((element) => (
                        <Fragment key={element}>
                            <div className="row center">
                                <h2 className="america">━━━━━━━━━━━━━━━━━ {element} ━━━━━━━━━━━━━━━━━</h2>
                            </div>

                            {filteredRegions[element].reduce((acc, region, index) => {
                                const groupIndex = Math.floor(index / 3);
                                if (!acc[groupIndex]) {
                                    acc[groupIndex] = [];
                                }
                                acc[groupIndex].push(region);
                                return acc;
                            }, []).map((group, index) => (
                                <div className="row" key={index}>
                                    {group.map((region, regionIndex) => (
                                        <HoverButton text={region.text()} image={region.image} onClick={() => region.onClick()}
                                                     className={region.className && region.className()} key={regionIndex}/>
                                        ))}
                                </div>
                            ))}
                        </Fragment>
                    ))}
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