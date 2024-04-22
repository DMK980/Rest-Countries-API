import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@mui/material"
import button from "./button.module.css"

const Btn = ({fontawesome,text,padding})=>{

    return (
        <Button 
            className={button.btn}
            variant="outlined"
            sx={{
                padding:`${padding}`,
                boxShadow: "0px 0px 7.5px -5px black"
            }} 
        >
            {fontawesome ? 
                <FontAwesomeIcon className={button.arrowleft}icon={faArrowLeft}/>:
                undefined
            }
            {text}
        </Button>  
    )
}

export default Btn;