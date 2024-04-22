import Btn from "../../Components/Button/button";
import Details from "../../Components/Details/details";
import Header from "../../Components/Header/header";
import details from "./Detailpage.module.css"

const Detailpage = ()=>{

    return (
        <>
            <Header/>
            <div className={details.backBtnContainer}>
                <Btn text="Back"fontawesome={true}padding="0.5rem 2rem"/>
            </div>
            <div className={details.detailssection}>
                <Details/>
            </div>
        </>
    )
} 

export default Detailpage;