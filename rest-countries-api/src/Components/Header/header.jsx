import header from "./header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMoon as darkmoon} from "@fortawesome/free-solid-svg-icons"
import {faMoon as lightmoon} from "@fortawesome/free-regular-svg-icons"

const Header = ()=>{
    const darkmode = false;
    return (
        <header className={header.header}>
            <h2 className={header.heading}>Where in the World ?</h2>
            <div className={header.darkmodeContainer}>
                { darkmode === true ? 
                <FontAwesomeIcon icon={darkmoon} className={header.moon}/>:
                <FontAwesomeIcon icon={lightmoon} className={header.moon}/>}
                <p className={`${header.darkmodetext} ${header.darktheme}`}>Dark Mode</p>
            </div>
        </header>
    )
}

export default Header;
