import {
    faHouse,
    faLanguage,
    faPalette,
    faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import HoverButton from "../components/HoverButton.jsx";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";
import "./Options.css";

const Options = ({setPage, goBack, pagesBefore}) => {

    const checkPage = () => {
        const home = pagesBefore[pagesBefore.length-2] || "home";
        return home === "home";
    }

    const close = () => {
        location.href = "https://google.de"
    }

    return (
        <>
            <Navigation showSettings={false} onArrowLeft={goBack} />
            <div className="container">
                <HoverButton text={t("design")} icon={faPalette} onClick={() => setPage("design")} />
                {!checkPage() && <HoverButton className='hauptmenü' text={t("home")} icon={faHouse} onClick={() => setPage("home")} />}

                <HoverButton text={t("leave")} icon={faRightFromBracket} onClick={() => window.close()} className="red" />
            </div>
        </>
    )
}

export default Options;