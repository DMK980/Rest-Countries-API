import countrylist from "./countrylist.module.css"
import CountryCard from "../CountryCard/countrycard";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { useRef, useEffect } from "react";

const CountryList = ()=>{

    const countrylist_ref = useRef()

    useEffect(() => {
        window.onscroll = ()=>{
            if (window.scrollY >= 94){
                if (countrylist_ref.current.classList[1] == undefined){
                    countrylist_ref.current.classList.add(`${countrylist.sticky}`)
                }
            } else if( window.scrollY <= 94){
                if (countrylist_ref.current.classList[1] != undefined){
                    countrylist_ref.current.classList.remove(`${countrylist.sticky}`)
                }
            }
        }
    }, []);


    const data = useSelector((state)=>state.country.countries)


    const list = data.map((element,index)=>{
        return  (
        <Fragment key={index}>
            <CountryCard 
                imgsrc={element.flags.svg}
                countryname={element.name.common}
                population={element.population}
                region={element.region}
                capital={element.capital[0]}
            />
        </Fragment>
        )
    })

    return (
        <section className={countrylist.container} ref={countrylist_ref}>
            {list}
        </section>
    )
}

export default CountryList;