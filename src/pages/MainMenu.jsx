import {faAtlas, faGamepad, faLandmarkFlag, faMap} from "@fortawesome/free-solid-svg-icons";
import HoverButton from "../components/HoverButton.jsx";
import {faFlag, faSquare} from "@fortawesome/free-regular-svg-icons";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MainMenu = ({setPage, setMode, editMode, setEditMode}) => {
    return (
        <>
            <Navigation showLeftArrow={false} onSettings={() => setPage("options")} />

            <div className="container menu-container">
                <button className='sw'>
                    {t("mode_title")}
                </button>
                <button className="edit-btn" onClick={() => setEditMode(!editMode)}>
                    <FontAwesomeIcon icon={editMode ? faAtlas : faGamepad} />
                </button>

                <HoverButton text={t("flag")} icon={faFlag} onClick={() => {
                    setMode("flag")
                    setPage("chooser")
                }} />

                <HoverButton text={t("capital")} icon={faLandmarkFlag} onClick={() => {
                    setMode("capital")
                    setPage("chooser")
                }} />

                <div className="row md">

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