import Btn from "../Button/button";
import details from "./details.module.css"
import {useSelector} from "react-redux";

const Details = ()=>{

    const data = useSelector((state)=> state.country.countries[0])
    console.log(data)
    // data required
    const name = data.name.common;
    const nativeName = data.name.nativeName.ron.official;
    const population = data.population;
    const region = data.region;
    const subRegion = data.subregion;
    const capital = data.capital;
    const topLevelDomain = data.tld[0];
    const currency = data.currencies.MDL.symbol;
    const language = data.languages.ron;
    const borderCountries = data.borders.map((country)=>{
        return (
        <Btn text={country} padding="0.25rem 2rem"/>
        )
    })
    return (
        <section className={details.container}>
            <img className={details.image}src={data.flags.svg}/>
            <div className={details.detailsSection}>
                <h2 className={`${details.heading} ${details.grid_span_2}`}>{name}</h2>
                <div className={details.text_left_container}>
                    <p className={`${details.text_left} ${details.text_info}`}><span className={details.subheading}>Native Name: </span>{nativeName}</p>
                    <p className={`${details.text_left} ${details.text_info}`}><span className={details.subheading}>Population: </span>{population}</p>
                    <p className={`${details.text_left} ${details.text_info}`}><span className={details.subheading}>Region: </span>{region}</p>
                    <p className={`${details.text_left} ${details.text_info}`}><span className={details.subheading}>Sub Region: </span>{subRegion}</p>
                    <p className={`${details.text_left} ${details.text_info}`}><span className={details.subheading}>Capital: </span>{capital}</p>
                </div>
                <div className={details.text_right_container}>
                    <p className={`${details.text_right} ${details.text_info}`}><span className={details.subheading}>Top Level Domain: </span>{topLevelDomain}</p>
                    <p className={`${details.text_right} ${details.text_info}`}><span className={details.subheading}>Currencies: </span>{currency}</p>
                    <p className={`${details.text_right} ${details.text_info}`}><span className={details.subheading}>Languages: </span>{language}</p>
                </div>
                <div className={`${details.brdctr} ${details.grid_span_2}`}>
                    <p className={`${details.subheading} ${details.bordercountries}`}>Border Countries: </p>
                    <div className={details.borderbtns}>
                        {borderCountries}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details;