import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRotateLeft, faForward} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import Ending from "./Ending.jsx";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";

const InGame = ({countries, continent, setPage, goBack, mode, gray, blur}) => {
    const [progress, setProgress] = useState(JSON.parse(localStorage.getItem(`${mode}-progress-${continent}`)) || []);
    const [skippedProgress, setSkippedProgress] = useState(JSON.parse(localStorage.getItem(`${mode}-skipped-${continent}`)) || []);

    const [skipHover, setSkipHover] = useState(false);
    const [skipped, setSkipped] = useState(false);
    const [input, setInput] = useState("");
    const [country, setCountry] = useState();
    const [wrong, setWrong] = useState(false);

    const countriesLeft = countries.length - progress.length - skippedProgress.length;

    const countryName = () => country?.country?.toString().charAt(0).toUpperCase() + country?.country.toString()?.slice(1);

    const updateProgress = (country) => {
        const newProgress = [...progress];
        newProgress.push(country);
        setProgress(newProgress);
        localStorage.setItem(`${mode}-progress-${continent}`, JSON.stringify(newProgress));
    }

    const getCountry = () => {
        if (countriesLeft === 0) return;

        let country = countries[Math.floor(Math.random() * countries.length)];
        while (progress.includes(country.country) || skippedProgress.includes(country.country))
            country = countries[Math.floor(Math.random() * countries.length)];
        setCountry(country);
    }

    const onEnter= (event) => {
        event.preventDefault();
        if (skipped) return;

        let correct = false;
        (mode === "capital" ? country.capital : country.country).split(",").forEach((c) => {
            if (c.toLowerCase().replace(/ /g, "") === input.toLowerCase().replace(/ /g, "")) {
                updateProgress(country.country);
                setInput("");
                setWrong(false);
                correct = true;
            }
        });

        if (!correct) setWrong(true);
    }

    const onChange = (event) => {
        setInput(event.target.value);

        (mode === "capital" ? country.capital : country.country).split(",").forEach((c) => {
            if (c.toLowerCase().replace(/ /g, "") === event.target.value.toLowerCase().replace(/ /g, "")) {
                updateProgress(country.country);
                setInput("");
                setWrong(false);
            }
        });

        setWrong(false);
    }

    const skip = () => {
        if (!skipped) {
            setSkipped(true);
            return;
        }
        setInput("");
        setSkipped(false);

        const newSkipped = [...skippedProgress];
        newSkipped.push(country.country);
        setSkippedProgress(newSkipped);
        localStorage.setItem(`${mode}-skipped-${continent}`, JSON.stringify(newSkipped));
    }

    const onKeyDown = (e) => {
        if (e.code === "Enter" && e.ctrlKey) skip();
    }

    useEffect(() => {
        getCountry()
    }, [skippedProgress, progress]);

    useEffect(() => {
        document.addEventListener("keyup", onKeyDown);
        return () => document.removeEventListener("keyup", onKeyDown);
    }, [skipped]);

    const reset = () => {
        setSkipped(false);
        setInput("");
        setProgress([]);
        localStorage.setItem(`${mode}-progress-${continent}`, JSON.stringify([]));
        setSkippedProgress([]);
        localStorage.setItem(`${mode}-skipped-${continent}`, JSON.stringify([]));
    }

    if (countriesLeft === 0)
        return <Ending setPage={setPage} max={countries.length} guessed={progress.length} reset={reset} goBack={goBack}
                       wrong={countries.filter((c) => skippedProgress.includes(c.country))} mode={mode}
                       correct={countries.filter((c) => !skippedProgress.includes(c.country))} />

    if (!country) return <></>;

    return (
        <>
            <button className="rb" onClick={reset}>
                <FontAwesomeIcon icon={faArrowRotateLeft}/>
            </button>

            <Navigation onArrowLeft={() => setPage("chooser")} onSettings={() => setPage("options")} />

            <div className="mitte">
                <div className="info"><h1>{countries.length-countriesLeft+1}/{countries.length}</h1></div>

                <div className="ig-stack">
                    {mode !== "capital" && <div className={'ig' + (mode === "shapes" || mode === "card" ? " shapes-img" : "") }>
                    <img src={mode === "shapes" ? country.shapes : mode === "card" ? country.card : country.url}
                                                                                       style={{
                                                                                           filter: (blur && mode === "flag" ? "blur(10px)" : "") + (gray && mode === "flag" ? " grayscale(1)" : "")
                                                                                               + (mode === "shapes" ? " grayscale(80%)" : "")}}/>
                         </div>}
                    {mode === "capital" && <div className={'ig card card-smaller' }>
                        <img src={country.url || country.card}/></div>}
                </div>

                {mode === "capital" && <div className="info zwei">
                    <h1>{countryName().split(",")[0]}</h1>
                </div>}

                <form onSubmit={onEnter}>
                    <div className="row2">
                        <input className='tf' type="text"
                               style={skipped ? {color: "green"} : wrong ? {color: "red"} : {}}
                               value={skipped ? (mode === "capital" ? country.capital : country.country).split(",")[0] : input}
                               spellCheck={false} onChange={onChange} placeholder={t("text_flag")}/>


                    </div>
                    <button className={'sk' + (skipHover ? " sk-icon" : "")} onClick={skip} type="button"
                            onMouseEnter={() => setSkipHover(true)}
                            onMouseLeave={() => setSkipHover(false)}>
                        {skipHover ? <FontAwesomeIcon icon={faForward}/> : t("skip")}
                    </button>
                </form>
            </div>
        </>
    )
}

export default InGame;