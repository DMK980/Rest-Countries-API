import CountryCard from "../../Components/CountryCard/countrycard"
import Header from "../../Components/Header/header"
import Searchfilter from "../../Components/Search_Filter/search_filter"
import "./Homepage.css"
import {useSelector} from "react-redux"


const Homepage = ()=> {
  
  return (
    <>
      <Header/>
      <Searchfilter/>
      {/* <CountryCard/> */}
    </>
  )
}

export default Homepage;
