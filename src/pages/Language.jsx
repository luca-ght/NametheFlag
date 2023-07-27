import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";

const Language = ({goBack}) => {

    const [language, setLanguage] = useState(localStorage.getItem("language") || "de");

    return (
        <div className="language">
            <Navigation onArrowLeft={goBack}/>

            <div className='flag'>
                <div className="row">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png"
                        className={language === "de" ? "selected" : ""}
                        onClick={() => setLanguage("de")}/>
                    <img src="https://www.nationalflaggen.de/media/29/flagge-grossbritannien.png"
                         className={language === "en" ? "selected" : ""}
                         onClick={() => setLanguage("en")}/>
                    <img
                        src="https://media.istockphoto.com/id/967321166/de/vektor/vektor-flagge-von-spanien-verh%C3%A4ltnis-2-3-spanische-nationalflagge-bicolor-rojigualda.jpg?s=612x612&w=0&k=20&c=8sKOPbXSGVRG8W6VLLtR6BrLSDA1nweu9BV9IbR8THs="
                        className={language === "es" ? "selected" : ""} onClick={() => setLanguage("es")}/>
                </div>
                <div className="row">
                    <img src="https://www.nationalflaggen.de/media/39/flagge-italien.png"
                         className={language === "it" ? "selected" : ""} onClick={() => setLanguage("it")}/>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_France_%282020%E2%80%93present%29.svg/1200px-Flag_of_France_%282020%E2%80%93present%29.svg.png"
                        className={language === "fr" ? "selected" : ""} onClick={() => setLanguage("fr")}/>
                    <img
                        src="https://www.flaggenmeer.de/media/weedesign_images2webp/2000/flagge-portugal-querformat.webp"
                        className={language === "pt" ? "selected" : ""} onClick={() => setLanguage("pt")}/>
                </div>
                <div className="row">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png"
                        className={language === "tr" ? "selected" : ""} onClick={() => setLanguage("tr")}/>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/2560px-Flag_of_Greece.svg.png"
                        className={language === "gr" ? "selected" : ""} onClick={() => setLanguage("gr")}/>
                    <img src="https://www.nationalflaggen.de/media/447/flagge-russland.png"
                         className={language === "ru" ? "selected" : ""} onClick={() => setLanguage("ru")}/>
                </div>
                <div className="row">
                    <img src="https://www.flaggenmeer.de/media/6b/54/2e/1622821571/flagge-china-querformat.jpg"
                         className={language === "cn" ? "selected" : ""} onClick={() => setLanguage("cn")}/>
                    <img src="https://www.kohaido.de/wp-content/uploads/2013/02/flag-japan.png"
                         className={language === "jp" ? "selected" : ""} onClick={() => setLanguage("jp")}/>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/2560px-Flag_of_South_Korea.svg.png"
                        className={language === "kr" ? "selected" : ""} onClick={() => setLanguage("kr")}/>
                </div>

            </div>
            <button className='kb aw'>{t("choose")}</button>
        </div>
    )
}

export default Language;