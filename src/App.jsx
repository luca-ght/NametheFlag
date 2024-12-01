import i18n from "./i18n.js";
import {useEffect, useState} from "react";
import "./styles/Button.css";
import MainMenu from "./pages/MainMenu.jsx";
import Chooser from "./pages/Chooser.jsx";
import {Language} from "./pages/Language.jsx";
import Design from "./pages/Design.jsx";
import InGame from "./pages/InGame.jsx";
import Impressum from "./pages/Impressum.jsx";
import Privacy from "./pages/Privacy.jsx";

import Afrika from "./continents/afrika.json";
import Nordamerika from "./continents/nordamerika.json";
import Südamerika from "./continents/südamerika.json";
import Asien from "./continents/asien.json";
import Deutschland from "./continents/deutschland.json";
import Europa from "./continents/europa.json";
import Ozeanien from "./continents/ozeanien.json";
import Territorien from "./continents/territorien.json";
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
import Andorra from "./continents/andorra.json";
import Monaco from "./continents/monaco.json";
import Liechtenstein from "./continents/liechtenstein.json";
import SanMarino from "./continents/sanmarino.json";
import Malta from "./continents/malta.json";
import Luxemburg from "./continents/luxemburg.json";
import Irland from "./continents/irland.json";
import Island from "./continents/island.json";
import Dänemark from "./continents/dänemark.json";
import Belarus from "./continents/belarus.json";
import Ukraine from "./continents/ukraine.json";
import Ungarn from "./continents/ungarn.json";
import Moldawien from "./continents/moldawien.json";
import Rumänien from "./continents/rumänien.json";
import Bulgarien from "./continents/bulgarien.json";
import Slowakei from "./continents/slowakei.json";
import Slowenien from "./continents/slowenien.json";
import Kroatien from "./continents/kroatien.json";
import BosnienundHerzegowina from "./continents/bosnienundherzegowina.json";
import Serbien from "./continents/serbien.json";
import Montenegro from "./continents/montenegro.json";
import Kosovo from "./continents/kosovo.json";
import Nordmazedonien from "./continents/nordmazedonien.json";
import Albanien from "./continents/albanien.json";
import Griechenland from "./continents/griechenland.json";
import Zypern from "./continents/zypern.json";
import Marokko from "./continents/marokko.json";
import Algerien from "./continents/algerien.json";
import Tunesien from "./continents/tunesien.json";
import Libyen from "./continents/libyen.json";
import Ägypten from "./continents/ägypten.json";
import Mauretanien from "./continents/mauretanien.json";
import Mali from "./continents/mali.json";
import Senegal from "./continents/senegal.json";
import Gambia from "./continents/gambia.json";
import Guinea from "./continents/guinea.json";
import GuineaBissau from "./continents/guineabissau.json";
import SierraLeone from "./continents/sierraleone.json";
import Liberia from "./continents/liberia.json";
import Elfenbeinküste from "./continents/elfenbeinküste.json";
import Ghana from "./continents/ghana.json";
import Togo from "./continents/togo.json";
import Benin from "./continents/benin.json";
import BurkinaFaso from "./continents/burkinafaso.json";
import Niger from "./continents/niger.json";
import Sudan from "./continents/sudan.json";
import Südsudan from "./continents/südsudan.json";
import Tschad from "./continents/tschad.json";
import Angola from "./continents/angola.json";
import SaoTomeundPrincipe from "./continents/saotomeundprincipe.json";
import KapVerde from "./continents/kapverde.json";
import Äquatorialguinea from "./continents/äquatorialguinea.json";
import Botswana from "./continents/botswana.json";
import Burundi from "./continents/burundi.json";
import Dschibuti from "./continents/dschibuti.json";
import Eritrea from "./continents/eritrea.json";
import Eswatini from "./continents/eswatini.json";
import Gabun from "./continents/gabun.json";
import Kamerun from "./continents/kamerun.json";
import Kenia from "./continents/kenia.json";
import Komoren from "./continents/komoren.json";
import Kongo from "./continents/kongo.json";
import DemokratischeRepublikKongo from "./continents/demokratischerepublikkongo.json";
import Lesotho from "./continents/lesotho.json";
import Madagaskar from "./continents/madagaskar.json";
import Malawi from "./continents/malawi.json";
import Mauritius from "./continents/mauritius.json";
import Mosambik from "./continents/mosambik.json";
import Namibia from "./continents/namibia.json";
import Ruanda from "./continents/ruanda.json";
import Sambia from "./continents/sambia.json";
import Seychellen from "./continents/seychellen.json";
import Simbabwe from "./continents/simbabwe.json";
import Somalia from "./continents/somalia.json";
import Tansania from "./continents/tansania.json";
import Uganda from "./continents/uganda.json";
import Zentralafrikanischerepublik from "./continents/zentralafrikanischerepublik.json";
import Afghanistan from "./continents/afghanistan.json";
import Armenien from "./continents/armenien.json";
import Aserbaidschan from "./continents/aserbaidschan.json";
import Taiwan from "./continents/taiwan.json";
import Bahrain from "./continents/bahrain.json";
import Brunei from "./continents/brunei.json";
import Bangladesch from "./continents/bangladesch.json";
import Bhutan from "./continents/bhutan.json";
import Georgien from "./continents/georgien.json";
import Indien from "./continents/indien.json";
import Indonesien from "./continents/indonesien.json";
import Irak from "./continents/irak.json";
import Iran from "./continents/iran.json";
import Israel from "./continents/israel.json";
import Jemen from "./continents/jemen.json";
import Jordanien from "./continents/jordanien.json";
import Kambodscha from "./continents/kambodscha.json";
import Kasachstan from "./continents/kasachstan.json";
import Katar from "./continents/katar.json";
import Kirgisistan from "./continents/kirgisistan.json";
import Nordkorea from "./continents/nordkorea.json";
import Kuwait from "./continents/kuwait.json";
import Laos from "./continents/laos.json";
import Libanon from "./continents/libanon.json";
import Malaysia from "./continents/malaysia.json";
import Malediven from "./continents/malediven.json";
import Mongolei from "./continents/mongolei.json";
import Myanmar from "./continents/myanmar.json";
import Nepal from "./continents/nepal.json";
import Oman from "./continents/oman.json";
import Pakistan from "./continents/pakistan.json";
import Philippinen from "./continents/philippinen.json";
import SaudiArabien from "./continents/saudiarabien.json";
import Singapur from "./continents/singapur.json";
import SriLanka from "./continents/srilanka.json";
import Syrien from "./continents/syrien.json";
import Tadschikistan from "./continents/tadschikistan.json";
import Thailand from "./continents/thailand.json";
import TimorLeste from "./continents/timorleste.json";
import Turkmenistan from "./continents/turkmenistan.json";
import Usbekistan from "./continents/usbekistan.json";
import Palau from "./continents/palau.json";
import Nauru from "./continents/nauru.json";
import Mikronesien from "./continents/mikronesien.json";
import Samoa from "./continents/samoa.json";
import Salomonen from "./continents/salomonen.json";
import Vanuatu from "./continents/vanuatu.json";
import Tuvalu from "./continents/tuvalu.json";
import Fidschi from "./continents/fidschi.json";
import Tonga from "./continents/tonga.json";
import PapuaNeuguinea from "./continents/papuaneuguinea.json";
import VereinigteArabischeEmirate from "./continents/vereinigtearabischeemirate.json";
import Vietnam from "./continents/vietnam.json";
import {changeLanguage} from "i18next";
import Atlas from "./pages/Atlas.jsx";


export default () => {
    const continents = {afrika: Afrika,grundwissen: Grundwissen,guatemala: Guatemala,saotomeundprincipe: SaoTomeundPrincipe,kapverde: KapVerde,dschibuti: Dschibuti,
        guineabisau: GuineaBissau,guinea: Guinea,burkinafaso: BurkinaFaso,niger: Niger,benin: Benin,togo: Togo,elfenbeinküste: Elfenbeinküste,ghana: Ghana,ruanda: Ruanda,
        liberia: Liberia,sierraleone: SierraLeone,gambia: Gambia,senegal: Senegal,mali: Mali,mauretanien: Mauretanien,südsudan: Südsudan,tschad: Tschad,eswatini: Eswatini,
        sudan: Sudan,ägypten: Ägypten,tunesien: Tunesien,libyen: Libyen,algerien: Algerien,marokko: Marokko,moldawien: Moldawien,monaco: Monaco,burundi: Burundi,
        liechtenstein: Liechtenstein,sanmarino: SanMarino,malta: Malta,luxemburg: Luxemburg,irland: Irland,island: Island,dänemark: Dänemark,belarus: Belarus,sambia: Sambia,
        ukraine: Ukraine,slowakei: Slowakei,slowenien: Slowenien,ungarn: Ungarn,rumänien: Rumänien,bulgarien: Bulgarien,albanien: Albanien,kroatien: Kroatien,
        bosnienundherzegowina: BosnienundHerzegowina,serbien: Serbien,montenegro: Montenegro,kosovo: Kosovo,nordmazedonien: Nordmazedonien,äquatorialguinea: Äquatorialguinea,
        griechenlnad: Griechenland,zypern: Zypern,andorra: Andorra,dominica: Dominica,grenada: Grenada,trinidadundtobago: TrinidadundTobago,ecuador: Ecuador,
        venezuela: Venezuela,kolumbien: Kolumbien,peru: Peru,bolivien: Bolivien,chile: Chile,uruguay: Uruguay,paraguay: Paraguay,argentinien: Argentinien,gabun: Gabun,
        brasilien: Brasilien,guyana: Guyana,suriname: Suriname,bayern: Bayern,stvincentunddiegrenadinen: StVincentunddieGrenadinen,stlucia: StLucia,botswana: Botswana,
        stkittsundnevis: StKittsundNevis,barbados: Barbados,bahamas: Bahamas,antiguaundbarbuda: AntiguaundBarbuda,kuba: Kuba,haiti: Haiti,angola: Angola,eritrea: Eritrea,
        dominikanischerepublik: DominikanischeRepublik,mexiko: Mexiko,costarica: CostaRica,panama: Panama,jamaika: Jamaika,honduras: Honduras,nicaragua: Nicaragua,
        belize: Belize,elsalvador: ElSalvador,einfach: Einfach,mittel: Mittel,schwer: Schwer,südafrika: Südafrika,äthiopien: Äthiopien,schweden: Schweden,namibia: Namibia,
        norwegen: Norwegen,finnland: Finnland,nigeria: Nigeria,lettland: Lettland,litauen: Litauen,estland: Estland,neuseeland: NeuSeeland,australien: Australien,
        kanada: Kanada,südkorea: SüdKorea,japan: Japan,schweiz: Schweiz,china: China,polen: Polen,tschechien: Tschechien,türkei: Türkei,belgien: Belgien,kongo: Kongo,
        österreich: Österreich, russland: Russland, spanien: Spanien,frankreich: Frankreich,portugal: Portugal,uk: UK, niederlande: Niederlande,italien: Italien,
        nordamerika: Nordamerika,südamerika: Südamerika, asien: Asien, deutschland: Deutschland, europa: Europa,kamerun: Kamerun,kenia: Kenia,komoren: Komoren,
        demokratischerepublikkongo: DemokratischeRepublikKongo,lesotho: Lesotho,madagaskar: Madagaskar,malawi: Malawi,mauritius: Mauritius,mosambik: Mosambik,
        seychellen: Seychellen,somalia: Somalia,simbabwe: Simbabwe,uganda: Uganda,tansania: Tansania,zentralafrikanischerepublik: Zentralafrikanischerepublik,syrien: Syrien,
        afghanistan: Afghanistan,armenien: Armenien,aserbaidschan: Aserbaidschan,taiwan: Taiwan,bangladesch: Bangladesch,brunei: Brunei,bhutan: Bhutan,georgien: Georgien,
        bahrain: Bahrain,indien: Indien,indonesien: Indonesien,israel: Israel,iran: Iran,irak: Irak,jemen: Jemen,jordanien: Jordanien,kambodscha: Kambodscha,nepal: Nepal,
        kasachstan: Kasachstan,katar: Katar,kirgisistan: Kirgisistan,nordkorea: Nordkorea,kuwait: Kuwait,laos: Laos,libanon: Libanon,malaysia: Malaysia,oman: Oman,
        vietnam: Vietnam,turkmenistan: Turkmenistan,usbekistan: Usbekistan,tadschikistan: Tadschikistan,timorleste: TimorLeste,saudiarabien: SaudiArabien,singapur: Singapur,
        thailand: Thailand,vereinigtearabischeemirate: VereinigteArabischeEmirate,srilanka: SriLanka,malediven: Malediven,mongolei: Mongolei,myanmar: Myanmar,pakistan: Pakistan,
        philippinen: Philippinen,palau: Palau,nauru: Nauru,mikronesien: Mikronesien,salomonen: Salomonen,samoa: Samoa,
        vanuatu: Vanuatu,tuvalu: Tuvalu,fidschi: Fidschi,tonga: Tonga,papuaneuguinea: PapuaNeuguinea,
        ozeanien: Ozeanien, territorien: Territorien, usa: Usa, all: [ ...Nordamerika,...Südamerika, ...Europa ,...Afrika, ...Asien, ...Ozeanien, ...Territorien],
        off: [...Nordamerika,...Südamerika, ...Europa ,...Afrika, ...Asien, ...Ozeanien]}

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
            goBack();
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
            <Chooser setContinent={setContinent} setPage={updatePage} subPage={subPage}
                                            mode={mode} blur={blur} gray={gray} updateGray={updateGray}
                                            updateBlur={updateBlur} setSubPage={setSubPage} hidden={page !== "chooser"}
                                            editMode={editMode} setEditMode={updateEditMode} />
            {page === "language" && <Language goBack={goBack} updateLanguage={updateLanguage} i18n={i18n} />}
            {page === "design" && <Design goBack={goBack} setPrimaryColor={setPrimaryColor} primaryColor={primaryColor} />}
            {page === "game" && <InGame countries={continents[continent]} continent={continent} setPage={updatePage}
                                        goBack={goBack} mode={mode} blur={blur} gray={gray} />}
            {page === "atlas" && <Atlas countries={continents[continent]} continent={continent} setPage={updatePage}
                                        goBack={goBack} mode={mode} />}
            {page === "impressum" && <Impressum setPage={updatePage} goBack={goBack} pagesBefore={pagesBefore} />}
            {page === "privacy" && <Privacy setPage={updatePage} goBack={goBack} pagesBefore={pagesBefore} />}
        </>
    )
}