import { useLocation } from 'react-router-dom';
import './CountryPage.css'
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';



function CountryPage() {

    const nav = useNavigate();

    const { state } = useLocation();

    console.log(state.countryCode)


    return (
        <div className="CountryPage">
            <div onClick={() => nav('/')} className='back-button'>
                <div id="arrow-icon">←</div>
                <div id="back-icon">Back</div>
            </div>
            <img style={{
                backgroundImage: 'url(' + state.country.flags.svg + ')',
                backgroundSize: "cover",
            }} className="country-flag" width="500" height="600" />
            <div className='content-wrapper'>
                <div className='country-name-header'>{state.country.name.common}</div>
            </div>
            <p className='country-info'><b>Native: </b> {typeof (state.country.name.nativeName)
                === 'object' ? state.country.name.nativeName[Object.keys(state.country.name.nativeName)[0]].official : state.country.name.common}
                <br /><b>Population: </b>{state.country.population.toLocaleString()}
                <br /><b>Region: </b> {state.country.continents[0]}
                <br /><b>Sub Region: </b> {state.country.subregion}
                <br /><b>Capital: </b>{state.country.capital}
            </p>
            <p className='country-info-right'><b>Top Level Domain: </b>{state.country.tld}
                <br /><b>Currencies: </b> {typeof (state.country.currencies)
                    === 'object' ? state.country.currencies[Object.keys(state.country.currencies)[0]].name : ""}
                <br /><b>Languages: </b> {typeof (state.country.languages)
                    === 'object' ? Object.values(state.country.languages) + " " : ""}
            </p>
            <div className='country-info-bottom'>
                <p className='country-info-bottom-part1'><b>Border Countries:  {'borders' in state.country ?
                    state.country.borders.map((curr) => (
                        <span className='country-borders'>{state.countryCode[curr] + " "}</span>
                    )) : "None"}</b>
                </p>
            </div>
        </div>
    );
}

export default CountryPage;