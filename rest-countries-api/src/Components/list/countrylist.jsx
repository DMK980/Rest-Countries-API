import countrylist from "./countrylist.module.css"
import CountryCard from "../CountryCard/countrycard";
import { useSelector } from "react-redux";
import { Fragment } from "react";


const CountryList = ({search,filter})=>{

    const data = useSelector((state)=>state.country.countries)

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
    }).map((element,index)=>{
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
        <section className={countrylist.container} >
            {list}
        </section>
    )
}

export default CountryList;