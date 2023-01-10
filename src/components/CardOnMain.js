import './CardOnMain.css'
import { useNavigate } from 'react-router-dom';



function CardOnMain(props) {
    const nav = useNavigate();


    function CardAction() {

        nav('/CountryPage', { state: { country: props.name, countryCode: props.countryCode } })
    }

    return (
        <div onClick={CardAction} className="CardOnMain">
            <img className="image" src={props.name.flags.svg} width="264" height="160" />
            <p id="card-header">{props.name.name.common}</p>
            <p className='card-info'><b>Population: </b>{props.name.population.toLocaleString()}
                <br /><b>Region: </b> {props.name.continents[0]}
                <br /><b>Capital: </b>{props.name.capital}</p>
        </div>
    );
}

export default CardOnMain;