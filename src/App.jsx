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
import Grundwissen from "./continents/grundwissen.json";
import Einfach from "./continents/einfach.json";
import Mittel from "./continents/mittel.json";
import Schwer from "./continents/schwer.json";
import Guatemala from "./continents/guatemala.json";
import ElSalvador from "./continents/elsalvador.json";
import Belize from "./continents/belize.json";
import Honduras from "./continents/honduras.json";
import Mexiko from "./continents/mexiko.json";
import Nicaragua from "./continents/nicaragua.json";
import CostaRica from "./continents/costarica.json";
import Panama from "./continents/panama.json";
import Jamaika from "./continents/jamaika.json";
import Kuba from "./continents/kuba.json";
import Haiti from "./continents/haiti.json";
import DominikanischeRepublik from "./continents/dominikanischerepublik.json";
import Bahamas from "./continents/bahamas.json";
import AntiguaundBarbuda from "./continents/antiguaundbarbuda.json";
import Barbados from "./continents/barbados.json";
import StVincentunddieGrenadinen from "./continents/stvincentunddiegrenadinen.json";
import StLucia from "./continents/stlucia.json";
import StKittsundNevis from "./continents/stkittsundnevis.json";
import Bayern from "./continents/bayern.json";
import Dominica from "./continents/dominica.json";
import Grenada from "./continents/grenada.json";
import TrinidadundTobago from "./continents/trinidadundtobago.json";
import Kolumbien from "./continents/kolumbien.json";
import Venezuela from "./continents/venezuela.json";
import Ecuador from "./continents/ecuador.json";
import Peru from "./continents/peru.json";
import Chile from "./continents/chile.json";
import Bolivien from "./continents/bolivien.json";
import Brasilien from "./continents/brasilien.json";
import Argentinien from "./continents/argentinien.json";
import Uruguay from "./continents/uruguay.json";
import Paraguay from "./continents/paraguay.json";
import Suriname from "./continents/suriname.json";
import Guyana from "./continents/guyana.json";
import {changeLanguage} from "i18next";
import Atlas from "./pages/Atlas.jsx";

export default () => {
    const continents = {afrika: Afrika,grundwissen: Grundwissen,guatemala: Guatemala,dominica: Dominica,grenada: Grenada,trinidadundtobago: TrinidadundTobago,ecuador: Ecuador,venezuela: Venezuela,kolumbien: Kolumbien,peru: Peru,bolivien: Bolivien,chile: Chile,uruguay: Uruguay,paraguay: Paraguay,argentinien: Argentinien,brasilien: Brasilien,guyana: Guyana,suriname: Suriname,bayern: Bayern,stvincentunddiegrenadinen: StVincentunddieGrenadinen,stlucia: StLucia,stkittsundnevis: StKittsundNevis,barbados: Barbados,bahamas: Bahamas,antiguaundbarbuda: AntiguaundBarbuda,kuba: Kuba,haiti: Haiti,dominikanischerepublik: DominikanischeRepublik,mexiko: Mexiko,costarica: CostaRica,panama: Panama,jamaika: Jamaika,honduras: Honduras,nicaragua: Nicaragua,belize: Belize,elsalvador: ElSalvador,einfach: Einfach,mittel: Mittel,schwer: Schwer,südafrika: Südafrika,äthiopien: Äthiopien,schweden: Schweden,norwegen: Norwegen,finnland: Finnland,nigeria: Nigeria,lettland: Lettland,litauen: Litauen,estland: Estland,neuseeland: NeuSeeland,australien: Australien,kanada: Kanada,südkorea: SüdKorea,japan: Japan,schweiz: Schweiz,china: China,polen: Polen,tschechien: Tschechien,türkei: Türkei,belgien: Belgien,österreich: Österreich, russland: Russland, spanien: Spanien,frankreich: Frankreich,portugal: Portugal,uk: UK, niederlande: Niederlande,italien: Italien, amerika: Amerika, asien: Asien, deutschland: Deutschland, europa: Europa,
        ozeanien: Ozeanien, sonstige: Sonstige, usa: Usa, all: [ ...Amerika, ...Europa ,...Afrika, ...Asien, ...Ozeanien, ...Sonstige],
        off: [...Amerika, ...Europa ,...Afrika, ...Asien, ...Ozeanien]}

    const [translationsLoaded, setTranslationsLoaded] = useState(false);

    const [blur, setBlur] = useState(localStorage.getItem("blur") === "true" || false);
    const [gray, setGray] = useState(localStorage.getItem("gray") === "true" || false);

    const [subPage, setSubPage] = useState(0);

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
            {page === "chooser" && <Chooser setContinent={setContinent} setPage={updatePage} subPage={subPage}
                                            mode={mode} blur={blur} gray={gray} updateGray={updateGray}
                                            updateBlur={updateBlur} setSubPage={setSubPage}
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