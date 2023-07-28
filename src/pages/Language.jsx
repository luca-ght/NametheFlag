import {useEffect, useReducer, useState} from "react";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";

export const languages = {
    "de": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
    "en": "https://www.nationalflaggen.de/media/29/flagge-grossbritannien.png",
    "es": "https://media.istockphoto.com/id/967321166/de/vektor/vektor-flagge-von-spanien-verh%C3%A4ltnis-2-3-spanische-nationalflagge-bicolor-rojigualda.jpg?s=612x612&w=0&k=20&c=8sKOPbXSGVRG8W6VLLtR6BrLSDA1nweu9BV9IbR8THs=",
    "it": "https://www.nationalflaggen.de/media/39/flagge-italien.png",
    "fr": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_France_%282020%E2%80%93present%29.svg/1200px-Flag_of_France_%282020%E2%80%93present%29.svg.png ",
    "pt": "https://www.flaggenmeer.de/media/weedesign_images2webp/2000/flagge-portugal-querformat.webp",
    "tr": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png",
    "el": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/2560px-Flag_of_Greece.svg.png",
    "ru": "https://www.nationalflaggen.de/media/447/flagge-russland.png",
    "zh": "https://www.flaggenmeer.de/media/6b/54/2e/1622821571/flagge-china-querformat.jpg",
    "ja": "https://www.kohaido.de/wp-content/uploads/2013/02/flag-japan.png",
    "ko": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/2560px-Flag_of_South_Korea.svg.png",
    "nl": "https://www.sieunddieniederlande.nl/binaries/large/content/gallery/nl-netherlandsandyou/content-afbeeldingen/vlag-nederland.png",
    "da": "https://www.nationalflaggen.de/media/143/flagge-danemark.png",
    "sv": "https://www.nationalflaggen.de/media/477/flagge-schweden.png",
    "uk": "https://www.nationalflaggen.de/media/895/flagge-ukraine.png",
    "no": "https://www.flaggenmeer.de/media/e8/5c/96/1622821579/flagge-norwegen-querformat.jpg",
    "fi": "https://www.nationalflaggen.de/media/173/flagge-finnland.png",
    "et": "https://www.eiz-rostock.de/wp-content/uploads/2017/07/Flagge_Estland.png",
    "lv": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1200px-Flag_of_Latvia.svg.png",
    "lt": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1200px-Flag_of_Lithuania.svg.png",
    "hu": "https://www.flaggenmeer.de/media/weedesign_images2webp/2000/flagge-ungarn-ow-querformat.webp",
    "ro": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/2560px-Flag_of_Romania.svg.png",
    "bg": "https://www.nationalflaggen.de/media/124/flagge-bulgarien.png",
    "cs": "https://www.nationalflaggen.de/media/875/flagge-tschechische-republik.png",
    "sk": "https://www.nationalflaggen.de/media/827/flagge-slowakei.png",
    "sl": "https://www.nationalflaggen.de/media/830/flagge-slowenien.png",
    "hi": "https://www.nationalflaggen.de/media/33/flagge-indien.png",
    "he": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1200px-Flag_of_Israel.svg.png",
    "id": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/200px-Flag_of_Indonesia.svg.png",
    "pl": "https://www.nationalflaggen.de/media/435/flagge-polen.png",
    "sq": "https://www.nationalflaggen.de/media/23/flagge-albanien.png",
    "mk": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/1200px-Flag_of_North_Macedonia.svg.png",
    "ar": "https://www.nationalflaggen.de/media/474/flagge-saudi-arabien.png",
    "af": "https://www.nationalflaggen.de/media/839/flagge-sudafrika.png",
    "mn": "https://www.nationalflaggen.de/media/361/flagge-mongolei.png",
}

export const Language = ({goBack, updateLanguage, i18n}) => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || "de");

    const forceUpdate = useReducer(x => x + 1, 0)[1];

    useEffect(() => {
        const handle = () => forceUpdate();
        i18n.on("languageChanged", handle);
        return () => i18n.off("languageChanged", handle);
    }, []);

    return (
        <div className="language">
            <Navigation onArrowLeft={goBack} showSettings={false}/>
            <div className='flag'>
                {Object.keys(languages).map((key, index) => (
                    <img key={index} src={languages[key]} className={language === key ? "selected" : ""}
                            onClick={() => setLanguage(key)}/>
                ))}
            </div>
            <button className='kb aw' onClick={() => updateLanguage(language)}>{t("choose")}</button>
        </div>
    )
}