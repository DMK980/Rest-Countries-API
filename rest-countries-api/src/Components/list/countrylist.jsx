import countrylist from "./countrylist.module.css"
import CountryCard from "../CountryCard/countrycard";
import { useSelector } from "react-redux";

// font awesome imports 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons"
import { Fragment } from "react";


const CountryList = ()=>{

    const data = useSelector((state)=>state.country.countries)
    const searchAndFilter = useSelector((state)=>state.search_filter)
    const search = searchAndFilter.search
    const filter = searchAndFilter.filter

    // filtering the result based on region and user input
    const list = data.filter((element)=>{
        if (filter === ""){
            return element
        }else {
            if (element.region === filter){
                return  element
            }
        }
    }).filter((element)=>{
        if (search === ""){
            return element
        }else {
            const namelower = element.name.common.toLowerCase()
            const searchlower = search.toLowerCase()
            if (namelower.includes(searchlower)){
                return element
            }
        }
    })

    return (
        <section className={countrylist.container} >
            {
                list.length != 0 ? 
                    list.map((element,index)=>{
                        return  (
                            <Fragment key={index}>
                                <CountryCard
                                    country={element}
                                    imgsrc={element.flags.svg}
                                    countryname={element.name.common}
                                    population={element.population}
                                    region={element.region}
                                    capital={element.capital[0]}
                                />
                            </Fragment>
                        )
                    }):
                    <div className={countrylist.err_container}>
                        <div className={countrylist.fontawe_container}>
                            <FontAwesomeIcon className={countrylist.err_symbol}icon={faTriangleExclamation} />
                        </div>
                        <div className={countrylist.err_mess_container}>
                            <p className={countrylist.err_message}>Please enter a valid country name</p>
                        </div>
                    </div>
            }
        </section>
    )
}

export default CountryList;