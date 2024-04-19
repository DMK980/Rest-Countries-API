import CountryList from "../../Components/list/countrylist"
import Header from "../../Components/Header/header"
import Searchfilter from "../../Components/Search_Filter/search_filter"
import homepage from "./Homepage.module.css"
import { useState, useEffect,useRef } from "react"


const Homepage = ()=> {
  
  const [search,setSearch] = useState("");
  const [filter,setFilter] = useState("");
  
  const header_elem = useRef()
  const countrlist_elem = useRef()
  // sticky search bar on scroll
  useEffect(()=>{

    const hed_elem = header_elem.current
    const count_elem = countrlist_elem.current

    window.onscroll = ()=>{
        if (window.scrollY >= 94){
            if (hed_elem.classList[0] == undefined){
              hed_elem.classList.add(`${homepage.sticky_header}`)
            }
            if (count_elem.classList[0] == undefined){
              count_elem.classList.add(`${homepage.sticky_country}`)
            }
        } else if( window.scrollY <= 94){
            if (hed_elem.classList[0] != undefined){
                hed_elem.classList.remove(`${homepage.sticky_header}`)
            }
            if (count_elem.classList[0] != undefined){
              count_elem.classList.remove(`${homepage.sticky_country}`)
          }
        }
    }
},[]);

  return (
    <>
      <Header/>
      {/* divs strictly for animation purposes for UX */}
      <div className={homepage.header} ref={header_elem}>
        <Searchfilter setSearch={setSearch} setFilter={setFilter} region={filter}/>
      </div>
      <div className={homepage.countrylist} ref={countrlist_elem}>
        <CountryList search={search} filter={filter}/>
      </div>
    </>
  )
}

export default Homepage;
