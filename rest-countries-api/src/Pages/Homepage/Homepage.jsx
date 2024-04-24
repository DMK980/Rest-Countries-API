import CountryList from "../../Components/list/countrylist"
import Header from "../../Components/Header/header"
import Searchfilter from "../../Components/Search_Filter/search_filter"
import homepage from "./Homepage.module.css"
import {useEffect,useRef } from "react"
import { useSelector } from "react-redux"


const Homepage = ()=> {
  
  const search_filter = useRef()
  const countrlist_elem = useRef()
  const header_elem = useRef()

  const scrollposition = useSelector((state)=>state.scrollPosition.value)
  // sticky search bar on scroll
  useEffect(()=>{

    const searchFilter = search_filter.current
    const count_elem = countrlist_elem.current
    const searchHeight = searchFilter.offsetHeight
    const hearderHeight = header_elem.current.offsetHeight
    scrollTo({
      top: scrollposition
    })
    window.onscroll = ()=>{
        if (window.scrollY >= hearderHeight){
            if (searchFilter.classList[0] == undefined){
              searchFilter.classList.add(`${homepage.sticky_search}`)
            }
            if (count_elem.classList[0] == undefined){
              if (searchHeight < 150){
                count_elem.classList.add(`${homepage.sticky_country}`)
              }
              if (searchHeight > 150){
                count_elem.classList.add(`${homepage.sticky_country_resp}`)
              }
            }
        } else if( window.scrollY <= hearderHeight){
            if (searchFilter.classList[0] != undefined){
                searchFilter.classList.remove(`${homepage.sticky_search}`)
            }
            if (count_elem.classList[0] != undefined){
              if (searchHeight < 150){
                count_elem.classList.remove(`${homepage.sticky_country}`)
              }
              if (searchHeight > 150){
                count_elem.classList.remove(`${homepage.sticky_country_resp}`)
              }
          }
        }
    }
},[]);

  return (
    <>
      {/* divs strictly for animation purposes for UX */}
      <div className={homepage.header} ref={header_elem}>
        <Header/>
      </div>
      <div className={homepage.searchfilter} ref={search_filter}>
        <Searchfilter/>
      </div>
      <div className={homepage.countrylist} ref={countrlist_elem}>
        <CountryList/>
      </div>
    </>
  )
}

export default Homepage;
