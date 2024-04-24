import header from "./header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMoon as darkmoon} from "@fortawesome/free-solid-svg-icons"
import {faMoon as lightmoon} from "@fortawesome/free-regular-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { switching } from "../../State/features/darkmodeslice"
import { rootelement } from "../../main"

const Header = ()=>{

    let theme = useSelector((state)=>state.darkmode.value)
    const dispatch = useDispatch()
    
    const handleclick = ()=>{ 
        dispatch(switching())
    }
    
    const moon = theme == true ? <FontAwesomeIcon icon={darkmoon} className={header.moon}/> : <FontAwesomeIcon icon={lightmoon} className={header.moon}/>;
    return (
        <header className={header.header} >
            <h2 className={header.heading}>Where in the World ?</h2>
            <div className={header.darkmodeContainer} onClick={handleclick}>
                {moon}
                <p className={`${header.darkmodetext} ${header.darktheme}`}>Dark Mode</p>
            </div>
        </header>
    )
}

export default Header;
