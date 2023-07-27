import {faLandmarkFlag} from "@fortawesome/free-solid-svg-icons";
import HoverButton from "../components/HoverButton.jsx";
import {faFlag} from "@fortawesome/free-regular-svg-icons";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";

const MainMenu = ({setPage, setMode}) => {
    return (
        <>
            <Navigation showLeftArrow={false} onSettings={() => setPage("options")} />

            <div className="container menu-container">
                <button className='sw'>
                    {t("mode_title")}
                </button>

                <HoverButton text={t("flag")} icon={faFlag} onClick={() => {
                    setMode("flag")
                    setPage("chooser")
                }} />

                <HoverButton text={t("capital")} icon={faLandmarkFlag} onClick={() => {
                    setMode("capital")
                    setPage("chooser")
                }} />

                <button className='nw'>
                    Name the flag
                </button>
            </div>
        </>
    )
}

export default MainMenu;