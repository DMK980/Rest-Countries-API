import Btn from "../Button/button";
import details from "./details.module.css"
import {useSelector} from "react-redux";

    

const Details = ()=>{
    // getting data from store
    const data = useSelector((state)=>state.selectedcountry.value)

    // data required / cleaning data

    // getting native name from object
    let nativeName;
    for ( let key in data.name.nativeName){
        nativeName = data.name.nativeName[key].common
    } 

    // getting the border countries and maping 
    const borderCountries = data.borders.map((country,index)=>{
        return (
        <Btn key={index} text={country} padding="0.25rem 2rem"/>
        )
    })
    
    // getting currency from object
    let currency;
    for ( let key in data.currencies){
        currency = data.currencies[key].name
    } 

    // getting languages from object
    let lang = [];
    for ( let key in data.languages){
        if (Object.keys(data.languages).length === 1){
            lang.push(data.languages[key])
        }else {
            lang.push(data.languages[key])
            lang.push(",")
        }
    } 
    lang[lang.length-1] === "," ? lang.pop(): null;
    let language = lang.map((element)=>element)

    // standardizing the population data by adding dots
    let popu = data.population
    const population = popu.toLocaleString("en-US");

    // standardized data from object not needing cleaning
    const name = data.name.common;
    const region = data.region;
    const subRegion = data.subregion ? data.subRegion:"No Subregion";
    const capital = data.capital[0] ? data.capital[0]:"No capital";
    const topLevelDomain = data.tld[0] ? data.tld[0]:"No topLevelDomain";
    return (
        <section className={details.container}>
            <img className={details.image}src={data.flags.svg}/>
            <div className={details.detailsSection}>
                <h2 className={`${details.heading} ${details.grid_span_2}`}>{name}</h2>
                <div className={details.text_left_container}>
                    <p className={`${details.text_left} ${details.text_info}`}><span className={details.subheading}>Native Name: </span>{nativeName ? nativeName : "No nativename"}</p>
                    <p className={`${details.text_left} ${details.text_info}`}><span className={details.subheading}>Population: </span>{population}</p>
                    <p className={`${details.text_left} ${details.text_info}`}><span className={details.subheading}>Region: </span>{region}</p>
                    <p className={`${details.text_left} ${details.text_info}`}><span className={details.subheading}>Sub Region: </span>{subRegion}</p>
                    <p className={`${details.text_left} ${details.text_info}`}><span className={details.subheading}>Capital: </span>{capital}</p>
                </div>
                <div className={details.text_right_container}>
                    <p className={`${details.text_right} ${details.text_info}`}><span className={details.subheading}>Top Level Domain: </span>{topLevelDomain}</p>
                    <p className={`${details.text_right} ${details.text_info}`}><span className={details.subheading}>Currencies: </span>{currency ? currency : "No currencies"}</p>
                    <p className={`${details.text_right} ${details.text_info}`}><span className={details.subheading}>Languages: </span>{language.length ? language : "No languages"}</p>
                </div>
                <div className={`${details.brdctr} ${details.grid_span_2}`}>
                    <p className={`${details.subheading} ${details.bordercountries}`}>Border Countries: </p>
                    <div className={details.borderbtns}>
                        {borderCountries.length ? borderCountries : "No Border Countries"}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details;