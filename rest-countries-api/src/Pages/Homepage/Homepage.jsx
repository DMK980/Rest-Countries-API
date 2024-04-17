import CountryList from "../../Components/list/countrylist"
import Header from "../../Components/Header/header"
import Searchfilter from "../../Components/Search_Filter/search_filter"
import "./Homepage.css"
import {useSelector} from "react-redux"


const Homepage = ()=> {
  return (
    <>
      <Header/>
      <Searchfilter/>
      <CountryList/>
    </>
  )
}

export default Homepage;
