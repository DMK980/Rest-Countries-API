import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@mui/material"
import button from "./button.module.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const Btn = ({key,fontawesome,text,padding})=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = ()=>{
        if (text === "Back"){
            navigate("/")
        }
    }

    return (
        <Button 
            className={button.btn}
            variant="outlined"
            sx={{
                padding:`${padding}`,
                boxShadow: "0px 0px 7.5px -5px black"
            }} 
            onClick={handleClick}
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