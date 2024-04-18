import CountryList from "../../Components/list/countrylist"
import Header from "../../Components/Header/header"
import Searchfilter from "../../Components/Search_Filter/search_filter"
import "./Homepage.css"
import { useState } from "react"


const Homepage = ()=> {
  // search value
  const [search,setSearch] = useState("")

  return (
    <>
      <Header/>
      <Searchfilter search = {setSearch}/>
      <CountryList search = {search}/>
    </>
  )
}

export default Homepage;
