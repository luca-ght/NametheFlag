import Navigation from "../components/Navigation.jsx";
import {useState} from "react";
import "./Atlas.css";

export const Atlas = ({countries, continent, setPage, goBack, mode}) => {

    const [currentCountry, setCurrentCountry] = useState(null);

    const countryName = (country, mode) => {
        return country[mode === "capital" ? "capital" : "country"]?.toString().charAt(0).toUpperCase() + country[mode === "capital" ? "capital" : "country"].toString()?.slice(1);
    }

    return (
      <>
          <Navigation onArrowLeft={goBack} onSettings={() => setPage("design")}/>

          {currentCountry !== null && <div className="fullscreen-img" onClick={() => setCurrentCountry(null)}>

              <img src={mode === "shapes" ? currentCountry.shapes : mode === "card" || mode === "capital" ? currentCountry.card : currentCountry?.url} />

          </div>}

          <div className='hintergrund-atlas'>


              {countries.map((country, key) => (
                  <>
                      {key % 3 === 0 && (
                          <div className="row atlas-row" key={key}>
                              <div className='aimg' onClick={() => setCurrentCountry(countries[key])}>
                                  {mode === "capital" &&
                                      <h2>{countryName(countries[key], "country")?.split(",")[0]}</h2>}
                                  <img
                                      src={mode === "shapes" ? countries[key]?.shapes : mode === "card" || mode === "capital" ? countries[key]?.card : countries[key]?.url}/>
                                  <h2>{countryName(countries[key], mode)?.split(",")[0]}</h2>
                              </div>
                              {countries[key + 1] &&
                                  <div className='aimg' onClick={() => setCurrentCountry(countries[key + 1])}>
                                      {mode === "capital" &&
                                          <h2>{countryName(countries[key + 1], "country")?.split(",")[0]}</h2>}
                                      <img
                                          src={mode === "shapes" ? countries[key + 1]?.shapes : mode === "card" || mode === "capital" ? countries[key + 1]?.card : countries[key + 1]?.url}/>
                                      <h2>{countryName(countries[key + 1], mode)?.split(",")[0]}</h2>
                                  </div>}
                              {countries[key + 2] &&
                                  <div className='aimg' onClick={() => setCurrentCountry(countries[key + 2])}>
                                      {mode === "capital" &&
                                          <h2>{countryName(countries[key + 2], "country")?.split(",")[0]}</h2>}
                                      <img
                                          src={mode === "shapes" ? countries[key + 2]?.shapes : mode === "card" || mode === "capital" ? countries[key + 2]?.card : countries[key + 2]?.url}/>
                                      <h2>{countryName(countries[key + 2], mode)?.split(",")[0]}</h2>
                                  </div>}
                          </div>
                      )}
                      {key % 3 === 1 && <hr/>}
                  </>
              ))}
          </div>

      </>
    );
}

export default Atlas;