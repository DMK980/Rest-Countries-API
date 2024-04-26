import header from "./header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSun as lightmode} from "@fortawesome/free-solid-svg-icons"
import {faMoon as lightmoon} from "@fortawesome/free-regular-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { switching } from "../../State/features/darkmodeslice"

const Header = ()=>{
    const rootelement = document.querySelector(":root");
    let theme = useSelector((state)=>state.darkmode.value)
    const dispatch = useDispatch()
    
    const handleclick = ()=>{ 
        dispatch(switching())
        const darkvalues = {
            "--Light-Mode-Background":"hsl(207, 26%, 17%)",
            "--Light-Mode-Text":"hsl(0, 0%, 100%)",
            "--Light-Mode-Elements":"hsl(209, 23%, 22%)",
            "--Light-Mode-Input": "hsl(0,100%,100%)"
        }
        const lightvalues = {
            "--Light-Mode-Text": "hsl(200, 15%, 8%)",
            "--Light-Mode-Input": "hsl(0, 0%, 52%)",
            "--Light-Mode-Background": "hsl(0, 0%, 98%)",
            "--Light-Mode-Elements": "hsl(0, 0%, 100%)"
        }
        if(!theme){
            Object.entries(darkvalues).forEach((element)=>{
                return rootelement.style.setProperty(element[0],element[1])
            })
        } else{
            Object.entries(lightvalues).forEach((element)=>{
                return rootelement.style.setProperty(element[0],element[1])
            })
        }
    }
    
    const moon = theme == true ? <><FontAwesomeIcon icon={lightmode} className={header.moon}/><p className={`${header.darkmodetext} ${header.darktheme}`}>Light Mode</p></> : <><FontAwesomeIcon icon={lightmoon} className={header.moon}/> <p className={`${header.darkmodetext} ${header.darktheme}`}>Dark Mode</p></>;
    return (
        <header className={header.header} >
            <h2 className={header.heading}>Where in the World ?</h2>
            <div className={header.darkmodeContainer} onClick={handleclick}>
                {moon}
            </div>
        </header>
    )
}

export default Header;
