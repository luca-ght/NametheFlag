import "./Impressum.css";
import Navigation from "../components/Navigation.jsx";



export default function ({goBack}) {

    return (
        <>
            <Navigation onArrowLeft={goBack} showSettings={false}/>

            <h2 className="imp">Impressum</h2>
            <h2 className="imp1">Angaben gemäß § 5 DDG</h2>
            <h2 className="imp2">Mathias Wagner</h2>
            <h2 className="imp2">c/o COCENTER</h2>
            <h2 className="imp2">Koppoldstr. 1</h2>
            <h2 className="imp2">86551 Aichach</h2>
            <h2 className="imp1">Kontakt</h2>
            <h2 className="imp2">E-Mail: fragenova@gnymt.dev</h2>
        </>
    )
}