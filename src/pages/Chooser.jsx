import {
    faAtlas,
    faEarthAfrica,
    faEarthAmerica,
    faEarthAsia,
    faEarthEurope,
    faEarthOceania,
    faFlagUsa,
    faGamepad,
    faGlobe,
    faLocationArrow,
    faPersonDigging,
    faUmbrellaBeach,
    faStar as faStarSolid, faSearch
} from "@fortawesome/free-solid-svg-icons";
import HoverButton from "../components/HoverButton.jsx";
import {t} from "i18next";
import Navigation from "../components/Navigation.jsx";
import {Fragment, useState} from "react";
import {languages} from "./Language.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as faStarRegular, faStarHalf, faStarHalfStroke} from "@fortawesome/free-regular-svg-icons";
import "./Chooser.css";

const Chooser = ({subPage, setContinent, mode, gray, blur, updateGray, updateBlur, setSubPage, editMode, setEditMode, setPage, hidden}) => {

    const [search, setSearch] = useState("");

    const switchC = (continent) => {
        if (mode === "shapes" && (continent === "sonstige" || continent === "all")) return;
        setContinent(continent);
        setPage(editMode ? "atlas" : "game");
    }

    const regions = {
        "Nordamerika": [
            {
                text: () => mode === "flag" ? "No Data" : t("antiguaandbarbuda"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/1280px-Flag_of_Antigua_and_Barbuda.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("antiguaundbarbuda"),
                className: () => (mode === "flag" ? "red" : "") + " domrep",
                searches: ["antiguaundbarbuda","antiguaandbarbuda"]
            },
            {
                text: () =>  mode === "capital" || mode === "flag" ? "No Data" : t("bahamas"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/1920px-Flag_of_the_Bahamas.svg.png",
                onClick: () => mode === "capital" || mode === "flag" ? "" : switchC("bahamas"),
                className: () => mode === "capital" || mode === "flag" ? "red" : "",
                searches: ["bahamas"]
            },
     {
                text: () => mode === "flag" ? "No Data" : t("barbados"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/1280px-Flag_of_Barbados.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("barbados"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["barbados"]
            },
     {
                text: () => mode === "flag" ? "No Data" : t("belize"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1024px-Flag_of_Belize.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("belize"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["belize"]
            },
     {
                text: () => t("costarica"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/1024px-Flag_of_Costa_Rica.svg.png",
                onClick: () => switchC("costarica"),
                searches: ["costarica",]
            },
     {
                text: () => mode === "flag" ? "No Data" : t("dominica"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/1920px-Flag_of_Dominica.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("dominica"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["dominica"]
            },
     {
                text: () => t("dominicanrepublic"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png",
                onClick: () => switchC("dominikanischerepublik"),
                className: () => "domrep",
                searches: ["dominikanischerepublik","dominicanrepublic"]
            },
 {
                text: () => t("elsalvador"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/1024px-Flag_of_El_Salvador.svg.png",
                onClick: () => switchC("elsalvador"),
                searches: ["elsalvador"]
            },
 {
                text: () => mode === "flag" ? "No Data" : t("grenada"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/1920px-Flag_of_Grenada.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("grenada"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["grenada"]
            },
 {
                text: () => t("guatemala"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/1024px-Flag_of_Guatemala.svg.png",
                onClick: () => switchC("guatemala"),
                className: () => mode === "" ? "red" : "",
                searches: ["guatemala"]
            },
 {
                text: () => mode === "flag" ? "No Data" : t("haiti"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/1920px-Flag_of_Haiti.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("haiti"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["haiti"]
            },
 {
                text: () => t("honduras"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1024px-Flag_of_Honduras.svg.png",
                onClick: () => mode === "" ? "" : switchC("honduras"),
                searches: ["honduras"]
            },
 {
                text: () => mode === "flag" ? "No Data" : t("jamaica"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1024px-Flag_of_Jamaica.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("jamaika"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["jamaika","jamaica"]
            },
 {
                text: () => t("canada"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1920px-Flag_of_Canada_%28Pantone%29.svg.png",
                onClick: () => switchC("kanada"),
                searches: ["kanada","canada"]
            },
 {
                text: () => mode === "flag" ? "No Data" : t("cuba"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1920px-Flag_of_Cuba.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("kuba"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["kuba","cuba"]
            },
 {
                text: () => t("mexico"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1024px-Flag_of_Mexico.svg.png",
                onClick: () => switchC("mexiko"),
                searches: ["mexiko","mexico"]
            },
 {
                text: () => t("nicaragua"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/1024px-Flag_of_Nicaragua.svg.png",
                onClick: () => switchC("nicaragua"),
                searches: ["nicaragua"]
            },
 {
                text: () => t("panama"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/1024px-Flag_of_Panama.svg.png",
                onClick: () => switchC("panama"),
                searches: ["panama"]
            },
 {
                text: () => mode === "flag" ? "No Data" : t("stkittsandnevis"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/1024px-Flag_of_Saint_Kitts_and_Nevis.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("stkittsundnevis"),
                className: () => mode === "flag" ? "red" : "domrep2",
                searches: ["stkittsandnevis","stkittsundnevis","sainttkittsundnevis","sainttkittsandnevis"]
            },
 {
                text: () => mode === "flag" ? "No Data" : t("stlucia"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/1024px-Flag_of_Saint_Lucia.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("stlucia"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["stlucia","saintlucia"]
            },
 {
                text: () => mode === "flag" ? "No Data" : t("stvincentandthegrenadines"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/1024px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("stvincentunddiegrenadinen"),
                className: () => mode === "flag" ? "red" : "domrep2",
                searches: ["stvincentandthegrenadines","saintvincentandthegrenadines","stvincentunddiegrenadinen","saintvincentunddiegrenadinen"]
            },
            {
                text: () => t("trinidadandtobago"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/1920px-Flag_of_Trinidad_and_Tobago.svg.png",
                onClick: () => switchC("trinidadundtobago"),
                className: () => "domrep",
                searches: ["trinidadundtobago","trinidadandtobago"]
            },
            {
                text: () => t("usa"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_the_United_States_%281863-1865%29.svg/2560px-Flag_of_the_United_States_%281863-1865%29.svg.png",
                onClick: () => switchC("usa"),
                className: () => "domrep",
                searches: ["usa","vereinigte staaten von amerike","united states of america"]
            },
        ],
        "Südamerika": [
            {
                text: () => t("argentina"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1920px-Flag_of_Argentina.svg.png",
                onClick: () => switchC("argentinien"),
                searches: ["argentinien","argentina"]
            },
            {
                text: () => t("bolivia"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/1280px-Flag_of_Bolivia.svg.png",
                onClick: () => switchC("bolivien"),
                searches: ["bolivien","bolivia"]
            },
            {
                text: () => t("brazil"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png",
                onClick: () => switchC("brasilien"),
                searches: ["brasilien","brazil"]
            },
            {
                text: () => t("chile"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1280px-Flag_of_Chile.svg.png",
                onClick: () => switchC("chile"),
                searches: ["chile"]
            },
            {
                text: () => t("ecuador"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1024px-Flag_of_Ecuador.svg.png",
                onClick: () => switchC("ecuador"),
                searches: ["ecuador"]
            },
            {
                text: () => t("guyana"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/1920px-Flag_of_Guyana.svg.png",
                onClick: () => switchC("guyana"),
                searches: ["guyana"]
            },
            {
                text: () => t("colombia"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1024px-Flag_of_Colombia.svg.png",
                onClick: () => switchC("kolumbien"),
                searches: ["kolumbien","colombia"]
            },
            {
                text: () => t("paraguay"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1920px-Flag_of_Paraguay.svg.png",
                onClick: () => switchC("paraguay"),
                searches: ["paraguay"]
            },
            {
                text: () => t("peru"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1280px-Flag_of_Peru.svg.png",
                onClick: () => switchC("peru"),
                searches: ["peru"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("suriname"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/1280px-Flag_of_Suriname.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("suriname"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["suriname"]
            },
            {
                text: () => t("uruguay"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1280px-Flag_of_Uruguay.svg.png",
                onClick: () => switchC("uruguay"),
                searches: ["uruguay"]
            },
            {
                text: () => t("venezuela"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1024px-Flag_of_Venezuela.svg.png",
                onClick: () => switchC("venezuela"),
                searches: ["venezuela"]
            },
        ],
        "Europa": [
            {
                text: () => t("albania"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1280px-Flag_of_Albania.svg.png",
                onClick: () => switchC("albanien"),
                searches: ["albanien","albania"]
            },
            {
                text: () => t("andorra"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/1024px-Flag_of_Andorra.svg.png",
                onClick: () => switchC("andorra"),
                searches: ["andorra"]
            },
            {
                text: () => t("belarus"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1024px-Flag_of_Belarus.svg.png",
                onClick: () => switchC("belarus"),
                searches: ["belarus"]
            },
            {
                text: () => t("belgium"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/1280px-Flag_of_Belgium_%28civil%29.svg.png",
                onClick: () => switchC("belgien"),
                searches: ["belgien","belgium"]
            },
            {
                text: () => t("bosniaandherzegovina"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1920px-Flag_of_Bosnia_and_Herzegovina.svg.png",
                onClick: () => switchC("bosnienundherzegowina"),
                className: () => "domrep",
                searches: ["bosnienundherzegowina","bosniaandherzegovina"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("bulgaria"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1920px-Flag_of_Bulgaria.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("bulgarien"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["bulgarien","bulgaria"]
            },
            {
                text: () => t("denmark"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1024px-Flag_of_Denmark.svg.png",
                onClick: () => switchC("dänemark"),
                searches: ["dänemark","denmark"]
            },
            {
                text: () => t("germany"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
                onClick: () => switchC("deutschland"),
                searches: ["deutschland","germany"]
            },
            {
                text: () => t("estonia"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1920px-Flag_of_Estonia.svg.png",
                onClick: () => switchC("estland"),
                searches: ["estland","estonia"]
            },
            {
                text: () => t("finland"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1920px-Flag_of_Finland.svg.png",
                onClick: () => switchC("finnland"),
                searches: ["finnland","finland"]
            },
            {
                text: () => t("france"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_France_%282020%E2%80%93present%29.svg/1200px-Flag_of_France_%282020%E2%80%93present%29.svg.png",
                onClick: () => switchC("frankreich"),
                searches: ["frankreich","france"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("greece"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1024px-Flag_of_Greece.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("griechenland"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["griechenland","greece"]
            },
            {
                text: () => mode === "capital" ? "No Data" : t("ireland"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1024px-Flag_of_Ireland.svg.png",
                onClick: () => mode === "capital" ? "" : switchC("irland"),
                className: () => mode === "capital" ? "red" : "",
                searches: ["irland","ireland"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("iceland"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1024px-Flag_of_Iceland.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("island"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["island","iceland"]
            },
            {
                text: () => t("italy"),
                image: "https://www.nationalflaggen.de/media/39/flagge-italien.png",
                onClick: () => switchC("italien"),
                searches: ["italien","italy"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("kosovo"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/1280px-Flag_of_Kosovo.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("kosovo"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["kosovo"]
            },
            {
                text: () => t("croatia"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1920px-Flag_of_Croatia.svg.png",
                onClick: () => switchC("kroatien"),
                searches: ["kroatien","croatia"]
            },
            {
                text: () => t("latvia"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1920px-Flag_of_Latvia.svg.png",
                onClick: () => switchC("lettland"),
                searches: ["lettland","latvia"]
            },
            {
                text: () => mode === "capital" ? "No Data" : t("liechtenstein"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/1024px-Flag_of_Liechtenstein.svg.png",
                onClick: () => mode === "capital" ? "" : switchC("liechtenstein"),
                className: () => mode === "capital" ? "red" : "",
                searches: ["liechtenstein"]
            },
            {
                text: () => t("lithuania"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1920px-Flag_of_Lithuania.svg.png",
                onClick: () => switchC("litauen"),
                searches: ["litauen","lithuania"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("luxembourg"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1024px-Flag_of_Luxembourg.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("luxemburg"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["luxemburg","luxembourg"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("malta"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/1024px-Flag_of_Malta.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("malta"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["malta"]
            },
            {
                text: () => t("moldova"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1024px-Flag_of_Moldova.svg.png",
                onClick: () => switchC("moldawien"),
                searches: ["moldawien","moldova","republik moldau","republic moldau"]
            },
            {
                text: () => mode === "flag" || mode === "capital" ? "No Data" : t("monaco"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/1024px-Flag_of_Monaco.svg.png",
                onClick: () => mode === "flag" || mode === "capital" ? "" : switchC("monaco"),
                className: () => mode === "flag" || mode === "capital" ? "red" : "",
                searches: ["monaco"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("montenegro"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/1920px-Flag_of_Montenegro.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("montenegro"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["montenegro"]
            },
            {
                text: () => t("netherlands"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/800px-Flag_of_the_Netherlands.svg.png",
                onClick: () => switchC("niederlande"),
                searches: ["niederlande","netherlands","the netherlands","die niederlande"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("northmacedonia"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/1920px-Flag_of_North_Macedonia.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("nordmazedonien"),
                className: () => mode === "flag" ? "red" : "domrep",
                searches: ["nordmazedonien","northmacedonia"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("norway"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1280px-Flag_of_Norway.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("norwegen"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["norwegen","norway"]
            },
            {
                text: () => t("austria"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1280px-Flag_of_Austria.svg.png",
                onClick: () => switchC("österreich"),
                searches: ["österreich","austria"]
            },
            {
                text: () => t("poland"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/2000px-Flag_of_Poland.svg.png",
                onClick: () => switchC("polen"),
                searches: ["polen","poland"]
            },
            {
                text: () => t("portugal"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png",
                onClick: () => switchC("portugal"),
                searches: ["portugal"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("romania"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1280px-Flag_of_Romania.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("rumänien"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["rumänien","romania"]
            },
            {
                text: () => mode === "" ? "No Data" : t("russia"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png",
                onClick: () => mode === "" ? "" : switchC("russland"),
                className: () => mode === "" ? "red" : "",
                searches: ["russland","russia"]
            },
            {
                text: () => mode === "capital" ? "No Data" : t("sanmarino"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/1024px-Flag_of_San_Marino.svg.png",
                onClick: () => mode === "capital" ? "" : switchC("sanmarino"),
                className: () => mode === "capital" ? "red" : "",
                searches: ["sanmarino"]
            },
            {
                text: () => t("sweden"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png",
                onClick: () => switchC("schweden"),
                searches: ["schweden","sweden"]
            },
            {
                text: () => t("switzerland"),
                image: "https://cdn.pixabay.com/photo/2018/01/26/17/15/swiss-flag-3109178_1280.png",
                onClick: () => switchC("schweiz"),
                searches: ["schweiz","switzerland"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("serbia"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1280px-Flag_of_Serbia.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("serbien"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["serbien","serbia"]
            },
            {
                text: () => t("slovakia"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1280px-Flag_of_Slovakia.svg.png",
                onClick: () => switchC("slowakei"),
                searches: ["slowakei","slovakia"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("slovenia"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1920px-Flag_of_Slovenia.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("slowenien"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["slowenien","slovenia"]
            }, {
                text: () => t("spain"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png",
                onClick: () => switchC("spanien"),
                searches: ["spanien","spain"]
            },
            {
                text: () => t("czechia"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1280px-Flag_of_the_Czech_Republic.svg.png",
                onClick: () => switchC("tschechien"),
                searches: ["tschechien","czechia","czech republic"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("turkey"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("türkei"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["türkei","turkey","Türkiye"]
            },
            {
                text: () => t("ukraine"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1024px-Flag_of_Ukraine.svg.png",
                onClick: () => switchC("ukraine"),
                searches: ["ukraine"]
            },
            {
                text: () => t("hungary"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1920px-Flag_of_Hungary.svg.png",
                onClick: () => switchC("ungarn"),
                searches: ["ungarn","hungary"]
            },
            {
                text: () => t("uk"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1920px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
                onClick: () => switchC("uk"),
                className: () => "domrep",
                searches: ["vereinigtes köningreich","united kingdom","england","great britain","großbritannien"]
            },
            {
                text: () => mode === "flag" ? "No Data" : t("cyprus"),
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/1024px-Flag_of_Cyprus.svg.png",
                onClick: () => mode === "flag" ? "" : switchC("zypern"),
                className: () => mode === "flag" ? "red" : "",
                searches: ["zypern","cyprus"]
            },
        ]
    };

    const filteredRegions = Object.keys(regions).reduce((result, regionKey) => {
        const filtered = regions[regionKey].filter((region) =>
            region.searches.some((s) => s.toLowerCase().includes(search.replace(" ", "").toLowerCase()))
        );
        if (filtered.length > 0) {
            result[regionKey] = filtered;
        }
        return result;
    }, {});

    return (
        <div style={hidden ? {display: "none"} : {}}>
            <Navigation onArrowLeft={() => subPage !== 0 ? setSubPage(0) : setPage("home")}
                        onSettings={() => setPage("design")}/>

            {subPage === 1 && <div className="centered-search">
                <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input type="text" placeholder="Suchen..." value={search} onChange={(event) => setSearch(event.target.value)}/>
                </div></div>}

            <button className="atlas" onClick={() => setEditMode(!editMode)}>
                <FontAwesomeIcon className="atlas-icon" icon={editMode ? faAtlas : faGamepad}/>
            </button>


            <div className={"container ch" + (subPage === 1 ? " regions" : "")}>


                {subPage === 0 && <>

                    <div className="row abstand">
                        <HoverButton className="kontinente" text={t("northamerica")} icon={faEarthAmerica}
                                     onClick={() => switchC("nordamerika")}/>
                        <HoverButton className="kontinente" text={t("southamerica")} icon={faEarthAmerica}
                                     onClick={() => switchC("südamerika")}/>
                    </div>

                    <div className="row abstand">
                        <HoverButton className="kontinente" text={t("europe")} icon={faEarthEurope}
                                     onClick={() => switchC("europa")}/>
                        <HoverButton className="kontinente" text={t("africa")} icon={faEarthAfrica}
                                     onClick={() => switchC("afrika")}/>
                    </div>

                    <div className="row abstand">
                        <HoverButton className="kontinente" text={t("asia")} icon={faEarthAsia}
                                     onClick={() => switchC("asien")}/>
                        <HoverButton className="kontinente" text={t("oceania")} icon={faEarthOceania}
                                     onClick={() => switchC("ozeanien")}/>
                    </div>
                    <div className="row center">
                        <HoverButton className="kontinente" text={t("world")} icon={faGlobe}
                                     onClick={() => switchC("off")}/>
                    </div>
                    <div className="row abstand">
                        <HoverButton text={mode === "shapes" ? "Coming soon" : t("territories")}
                                     icon={mode === "shapes" ? faPersonDigging : faUmbrellaBeach}
                                     onClick={() => mode === "shapes" ? "" : switchC("territorien")}
                                     className={(mode === "shapes" ? "red" : "") + " kontinente"}/>
                        <HoverButton className="kontinente" text={t("regions")} icon={faGlobe}
                                     onClick={() => setSubPage(1)}/>
                    </div>
                </>}

                {subPage === 1 && <>
                    {search === "" && <>
                    <div className="row">
                        <HoverButton className="regionen" text={t("germany")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png"
                                     onClick={() => switchC("deutschland")}/>
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("austria")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1280px-Flag_of_Austria.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("österreich")}/>
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("switzerland")}
                                     icon={mode === "shapes" ? faPersonDigging : faGlobe} comingSoon={mode === "shapes"}
                                     image="https://cdn.pixabay.com/photo/2018/01/26/17/15/swiss-flag-3109178_1280.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("schweiz")}/>
                    </div>
                    <div className="row">
                        <HoverButton className="regionen" text={t("usa")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_the_United_States_%281863-1865%29.svg/2560px-Flag_of_the_United_States_%281863-1865%29.svg.png"
                                     onClick={() => switchC("usa")}/>
                        <HoverButton text={mode === "shapes" ? "No Data" : t("uk")}
                                     image="https://www.nationalflaggen.de/media/29/flagge-grossbritannien.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("uk")}
                                     className={(mode === "shapes" ? "red" : "") + " domrep" + " regionen"}/>
                        <HoverButton className="regionen" text={mode === "shapes" ? "No Data" : t("bavaria")}
                                     image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_Bavaria_%28lozengy%29.svg/1920px-Flag_of_Bavaria_%28lozengy%29.svg.png"
                                     onClick={() => mode === "shapes" ? "" : switchC("bayern")}/>
                    </div>
                        </>}


                    {Object.keys(filteredRegions).map((element) => (
                        <Fragment key={element}>
                            <div className="row center">
                                <h2 className="america">━━━━━━━━━━━━━━━━━ {element} ━━━━━━━━━━━━━━━━━</h2>
                            </div>

                            {filteredRegions[element].reduce((acc, region, index) => {
                                const groupIndex = Math.floor(index / 3);
                                if (!acc[groupIndex]) {
                                    acc[groupIndex] = [];
                                }
                                acc[groupIndex].push(region);
                                return acc;
                            }, []).map((group, index) => (
                                <div className="row" key={index}>
                                    {group.map((region, regionIndex) => (
                                        <HoverButton text={region.text()} image={region.image} onClick={() => region.onClick()}
                                                     className={region.className && region.className()} key={regionIndex}/>
                                        ))}
                                </div>
                            ))}
                        </Fragment>
                    ))}
                </>}

                {subPage === 2 && <>
                    <div className="row">
                        <HoverButton text={t("grundwissen")} icon={faStarHalf} onClick={() => switchC("grundwissen")}
                                     className="schwierigkeit"
                        />
                        <HoverButton text={t("einfach")} icon={faStarRegular}
                                     onClick={() => switchC("einfach")}
                                     className="schwierigkeit"
                        />
                    </div>

                    <div className="row">
                        <HoverButton text={t("mittel")} icon={faStarHalfStroke} onClick={() => switchC("mittel")}
                                     className="schwierigkeit"
                        />
                        <HoverButton text={t("schwer")} icon={faStarSolid} onClick={() => switchC("schwer")}
                                     className="schwierigkeit"
                        />
                    </div>
                </>}
            </div>
        </div>
    )
}


export default Chooser;