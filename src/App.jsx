import i18n from "./i18n.js";
import {useEffect, useState} from "react";
import "./styles/Button.css";
import MainMenu from "./pages/MainMenu.jsx";
import Chooser from "./pages/Chooser.jsx";
import {Language} from "./pages/Language.jsx";
import Options from "./pages/Options.jsx";
import Design from "./pages/Design.jsx";
import InGame from "./pages/InGame.jsx";

import Afrika from "./continents/afrika.json";
import Amerika from "./continents/amerika.json";
import Asien from "./continents/asien.json";
import Deutschland from "./continents/deutschland.json";
import Europa from "./continents/europa.json";
import Ozeanien from "./continents/ozeanien.json";
import Sonstige from "./continents/sonstige.json";
import Usa from "./continents/usa.json";
import {changeLanguage} from "i18next";

export default () => {
    const continents = {afrika: Afrika, amerika: Amerika, asien: Asien, deutschland: Deutschland, europa: Europa,
        ozeanien: Ozeanien, sonstige: Sonstige, usa: Usa}

    const [translationsLoaded, setTranslationsLoaded] = useState(false);

    const [mode, setMode] = useState("flag");
    const [continent, setContinent] = useState("");
    const [pagesBefore, setPagesBefore] = useState([]);
    const [page, setPage] = useState("home");
    const [primaryColor, setPrimaryColor] = useState(localStorage.getItem("primary-color") || "#350751");

    useEffect(() => {
        document.documentElement.style.setProperty("--primary", primaryColor);
        localStorage.setItem("primary-color", primaryColor);
    }, [primaryColor]);


    const updateLanguage = (language) => {
        localStorage.setItem("language", language);
        changeLanguage(language);
    }

    i18n.on("initialized", () => setTranslationsLoaded(true));

    const updatePage = (page) => {
        setPagesBefore([...pagesBefore, page]);
        setPage(page);
    }

    const goBack = () => {
        const latestPage = pagesBefore[pagesBefore.length - 2];
        const pages = pagesBefore;
        pages.pop();
        setPagesBefore(pages);
        setPage(latestPage || "home");
    }

    if (!translationsLoaded) return <></>;

    return (
        <>
            {page === "home" && <MainMenu setPage={updatePage} setMode={setMode} />}
            {page === "chooser" && <Chooser setContinent={setContinent} setPage={updatePage} goBack={goBack} />}
            {page === "language" && <Language goBack={goBack} updateLanguage={updateLanguage} i18n={i18n} />}
            {page === "options" && <Options setPage={updatePage} goBack={goBack} pagesBefore={pagesBefore} />}
            {page === "design" && <Design goBack={goBack} setPrimaryColor={setPrimaryColor}  />}
            {page === "game" && <InGame countries={continents[continent]} continent={continent} setPage={updatePage} goBack={goBack} mode={mode} /> }
        </>
    )
}