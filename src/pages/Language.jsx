import {useEffect, useReducer, useState} from "react";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";
import "./Language.css";

export const languages = {
    "de": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
    "en": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/1920px-Flag_of_England.svg.png",
    "es": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png",
    "it": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png",
    "fr": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_France_%282020%E2%80%93present%29.svg/1200px-Flag_of_France_%282020%E2%80%93present%29.svg.png ",
    "pt": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png",
    "tr": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png",
    "el": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/2560px-Flag_of_Greece.svg.png",
    "ru": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png",
    "zh": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1280px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    "ja": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png",
    "ko": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/2560px-Flag_of_South_Korea.svg.png",
    "nl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png",
    "da": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1280px-Flag_of_Denmark.svg.png",
    "sv": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png",
    "uk": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1280px-Flag_of_Ukraine.svg.png",
    "no": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1280px-Flag_of_Norway.svg.png",
    "fi": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1920px-Flag_of_Finland.svg.png",
    "et": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1920px-Flag_of_Estonia.svg.png",
    "lv": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1200px-Flag_of_Latvia.svg.png",
    "lt": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1200px-Flag_of_Lithuania.svg.png",
    "hu": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1920px-Flag_of_Hungary.svg.png",
    "ro": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/2560px-Flag_of_Romania.svg.png",
    "bg": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1920px-Flag_of_Bulgaria.svg.png",
    "cs": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1280px-Flag_of_the_Czech_Republic.svg.png",
    "sk": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1280px-Flag_of_Slovakia.svg.png",
    "sl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1920px-Flag_of_Slovenia.svg.png",
    "pl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/1920px-Flag_of_Poland.svg.png",
    "sq": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1280px-Flag_of_Albania.svg.png",
    "mk": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/1200px-Flag_of_North_Macedonia.svg.png",
    "hi": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png",
    "he": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1200px-Flag_of_Israel.svg.png",
    "id": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/200px-Flag_of_Indonesia.svg.png",
    "ar": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1280px-Flag_of_Saudi_Arabia.svg.png",
    "af": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1280px-Flag_of_South_Africa.svg.png",
    "mn": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/1920px-Flag_of_Mongolia.svg.png",
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
            <button className='kb sprache-auswählen' onClick={() => updateLanguage(language)}>{t("choose")}</button>
        </div>
    )
}