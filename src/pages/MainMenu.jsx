import {faLandmarkFlag, faMap} from "@fortawesome/free-solid-svg-icons";
import HoverButton from "../components/HoverButton.jsx";
import {faFlag, faSquare} from "@fortawesome/free-regular-svg-icons";
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
<div className="row md">
                <HoverButton text={t("flag")} icon={faFlag} onClick={() => {
                    setMode("flag")
                    setPage("chooser")
                }} />

                <HoverButton text={t("capital")} icon={faLandmarkFlag} onClick={() => {
                    setMode("capital")
                    setPage("chooser")
                }} />
</div>
                <div className="row md">
                <HoverButton text={t("shapes")} icon={faSquare} onClick={() => {
                    setMode("shapes")
                    setPage("chooser")
                }} />
                <HoverButton text={t("map")} icon={faMap} onClick={() => {
                    setMode("card")
                    setPage("chooser")
                }} />
                </div>

                <button className='nw'>
                    Name the flag
                </button>
            </div>
        </>
    )
}

export default MainMenu;