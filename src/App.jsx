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
import Inseln from "./continents/inseln.json";
import Usa from "./continents/usa.json";
import Spanien from "./continents/spanien.json";
import Niederlande from "./continents/niederlande.json";
import Italien from "./continents/italien.json";
import Frankreich from "./continents/frankreich.json";
import Portugal from "./continents/portugal.json";
import UK from "./continents/uk.json";
import Russland from "./continents/russland.json";
import Türkei from "./continents/türkei.json";
import Österreich from "./continents/österreich.json";
import Belgien from "./continents/belgien.json";
import Schweiz from "./continents/schweiz.json";
import Tschechien from "./continents/tschechien.json";
import Polen from "./continents/polen.json";
import Japan from "./continents/japan.json";
import China from "./continents/china.json";
import SüdKorea from "./continents/südkorea.json";
import Kanada from "./continents/kanada.json";
import Australien from "./continents/australien.json";
import NeuSeeland from "./continents/neuseeland.json";
import Estland from "./continents/estland.json";
import Lettland from "./continents/lettland.json";
import Litauen from "./continents/litauen.json";
import Nigeria from "./continents/nigeria.json";
import Äthiopien from "./continents/äthiopien.json";
import Südafrika from "./continents/südafrika.json";
import Schweden from "./continents/schweden.json";
import Norwegen from "./continents/norwegen.json";
import Finnland from "./continents/finnland.json";
import {changeLanguage} from "i18next";
import Atlas from "./pages/Atlas.jsx";

export default () => {
    const continents = {afrika: Afrika,südafrika: Südafrika,äthiopien: Äthiopien,schweden: Schweden,norwegen: Norwegen,finnland: Finnland,nigeria: Nigeria,lettland: Lettland,litauen: Litauen,estland: Estland,neuseeland: NeuSeeland,australien: Australien,kanada: Kanada,südkorea: SüdKorea,japan: Japan,schweiz: Schweiz,china: China,polen: Polen,tschechien: Tschechien,türkei: Türkei,belgien: Belgien,österreich: Österreich, russland: Russland, spanien: Spanien,frankreich: Frankreich,portugal: Portugal,uk: UK, niederlande: Niederlande,italien: Italien, amerika: Amerika, asien: Asien, deutschland: Deutschland, europa: Europa,
        ozeanien: Ozeanien,inseln: Inseln, sonstige: Sonstige, usa: Usa, all: [ ...Amerika, ...Europa ,...Afrika, ...Asien, ...Ozeanien, ...Sonstige, ...Inseln],
        off: [...Amerika, ...Europa ,...Afrika, ...Asien, ...Ozeanien]}

    const [translationsLoaded, setTranslationsLoaded] = useState(false);

    const [blur, setBlur] = useState(localStorage.getItem("blur") === "true" || false);
    const [gray, setGray] = useState(localStorage.getItem("gray") === "true" || false);

    const [region, setRegion] = useState(false);

    const [mode, setMode] = useState("flag");
    const [editMode, setEditMode] = useState(localStorage.getItem("edit-mode") === "true" || false);
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

    const updateBlur = (event) => {
        console.log(event.target.checked)
        setBlur(event.target.checked);
        localStorage.setItem("blur", event.target.checked + "");
    }

    const updateGray = (event) => {
        setGray(event.target.checked);
        localStorage.setItem("gray", event.target.checked + "");
    }

    const onKeyDown = (e) => {
        if (e.code === "Escape") {
            updatePage("options");
        }
    }

    const updateEditMode = () => {
        localStorage.setItem("edit-mode", !editMode + "");
        setEditMode(!editMode);
    }

    useEffect(() => {
        document.addEventListener("keyup", onKeyDown);
        return () => document.removeEventListener("keyup", onKeyDown);
    }, [pagesBefore]);

    if (!translationsLoaded) return <></>;

    return (
        <>
            {page === "home" && <MainMenu setPage={updatePage} setMode={setMode} editMode={editMode} setEditMode={updateEditMode} />}
            {page === "chooser" && <Chooser setContinent={setContinent} setPage={updatePage} region={region}
                                            mode={mode} blur={blur} gray={gray} updateGray={updateGray}
                                            updateBlur={updateBlur} setRegion={setRegion}
                                            editMode={editMode} setEditMode={updateEditMode} />}
            {page === "language" && <Language goBack={goBack} updateLanguage={updateLanguage} i18n={i18n} />}
            {page === "options" && <Options setPage={updatePage} goBack={goBack} pagesBefore={pagesBefore} />}
            {page === "design" && <Design goBack={goBack} setPrimaryColor={setPrimaryColor}  />}
            {page === "game" && <InGame countries={continents[continent]} continent={continent} setPage={updatePage}
                                        goBack={goBack} mode={mode} blur={blur} gray={gray} />}
            {page === "atlas" && <Atlas countries={continents[continent]} continent={continent} setPage={updatePage}
                                        goBack={goBack} mode={mode} />}
        </>
    )
}