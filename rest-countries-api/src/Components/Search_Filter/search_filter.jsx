import search_filter from "./search_filter.module.css"
import { useState, useRef, useEffect } from "react";

// fontawesome imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

// MUI imports
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';



const Searchfilter = (props)=>{

    const [region,setregion] = useState("") 
    const search_bar = useRef()   

    const handlechange = (event)=>{
        setregion(event.target.value)
    }

    const onChange = (event) =>{
        
    }
    useEffect(()=>{
        window.onscroll = ()=>{
            if (window.scrollY >= 94){
                if (search_bar.current.classList[1] == undefined){
                    search_bar.current.classList.add(`${search_filter.sticky}`)
                }
            } else if( window.scrollY <= 94){
                if (search_bar.current.classList[1] != undefined){
                    search_bar.current.classList.remove(`${search_filter.sticky}`)
                }
            }
        }
    },[]);

    return(
        <section className={search_filter.container} ref={search_bar}>
            <div className={search_filter.input_container}>
                <FontAwesomeIcon className={search_filter.searchicon}icon={faMagnifyingGlass}/>
                <TextField 
                    className={search_filter.textfield}
                    id="outlined-search" 
                    onChange={onChange}
                    type="search"
                    sx={{
                        "& fieldset":{border: "none"}
                    }} 
                    InputLabelProps={{
                        shrink:false
                    }}
                    inputProps={{
                        placeholder:"Search for a Country..."
                    }}
                    size="small"
                /> 
            </div>

            <Select 
                className={search_filter.select} 
                value={region} 
                onChange={handlechange} 
                displayEmpty 
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                    "& fieldset":{border: "none"}
                }}
            >
                <MenuItem value="">
                    <em>Filter by Region</em>
                </MenuItem>
                <MenuItem value={"Africa"}>Africa</MenuItem>
                <MenuItem value={"America"}>America</MenuItem>
                <MenuItem value={"Asia"}>Asia</MenuItem>
                <MenuItem value={"Europe"}>Europe</MenuItem>
                <MenuItem value={"Oceania"}>Oceania</MenuItem>
            </Select>
        </section>
    )
}



export default Searchfilter;