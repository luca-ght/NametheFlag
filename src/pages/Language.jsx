import {useState} from "react";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";

const languages = {
    "de": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
    "en": "https://www.nationalflaggen.de/media/29/flagge-grossbritannien.png",
    "es": "https://media.istockphoto.com/id/967321166/de/vektor/vektor-flagge-von-spanien-verh%C3%A4ltnis-2-3-spanische-nationalflagge-bicolor-rojigualda.jpg?s=612x612&w=0&k=20&c=8sKOPbXSGVRG8W6VLLtR6BrLSDA1nweu9BV9IbR8THs=",
    "it": "https://www.nationalflaggen.de/media/39/flagge-italien.png",
    "fr": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_France_%282020%E2%80%93present%29.svg/1200px-Flag_of_France_%282020%E2%80%93present%29.svg.png ",
    "pt": "https://www.flaggenmeer.de/media/weedesign_images2webp/2000/flagge-portugal-querformat.webp",
    "tr": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png",
    "gr": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/2560px-Flag_of_Greece.svg.png",
    "ru": "https://www.nationalflaggen.de/media/447/flagge-russland.png",
    "cn": "https://www.flaggenmeer.de/media/6b/54/2e/1622821571/flagge-china-querformat.jpg",
    "jp": "https://www.kohaido.de/wp-content/uploads/2013/02/flag-japan.png",
    "kr": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/2560px-Flag_of_South_Korea.svg.png"
}

const Language = ({goBack, updateLanguage}) => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || "de");

    const [render, setRender] = useState(false);

    const reRender = () => {
        setRender(!render);
        updateLanguage(language);
    }

    return (
        <div className="language">
            <Navigation onArrowLeft={goBack} showSettings={false}/>
            <div className='flag'>
                {Object.keys(languages).map((key, index) => (
                    <img key={index} src={languages[key]} className={language === key ? "selected" : ""}
                            onClick={() => setLanguage(key)}/>
                ))}
            </div>
            <button className='kb aw' onClick={reRender}>{t("choose")}</button>
        </div>
    )
}

export default Language;