import search_filter from "./search_filter.module.css"

// fontawesome imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

// MUI imports
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import { filterSetting, searchSetting } from "../../State/features/searchslice";




const Searchfilter = ()=>{  

    const dispatch = useDispatch()
    const values = useSelector((state)=>state.search_filter)
    const darkOrNah = useSelector((state)=>state.darkmode.value)

    const dark_text = darkOrNah ? "hsl(0, 0%, 100%)":"hsl(200, 15%, 8%)";
    const dark_background = darkOrNah ? "hsl(209, 23%, 22%)":"hsl(0, 0%, 100%)";

    const handlechange_dropdown = (event)=>{
        dispatch(filterSetting(event.target.value))
    }

    const onChange_search = (event) =>{
        dispatch(searchSetting(event.target.value))
    }

    return(
        <section className={search_filter.container}>
            <div className={search_filter.input_container}>
                <FontAwesomeIcon className={search_filter.searchicon}icon={faMagnifyingGlass}/>
                <TextField 
                    className={search_filter.textfield}
                    id="outlined-search" 
                    onChange={onChange_search}
                    value={values.search}
                    type="search"
                    sx={{
                        "& fieldset":{border: "none"},
                        input:{
                            color:dark_text
                        }
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
                value={values.filter} 
                onChange={handlechange_dropdown} 
                displayEmpty 
                inputProps={{ 
                    'aria-label': 'Without label',
                    MenuProps:{
                        MenuListProps:{
                            sx:{
                                color: dark_text,
                                backgroundColor: dark_background,
                                borderRadius: 0
                            }
                        }
                    }
                 }}
                sx={{
                    "& fieldset":{
                        border: "none"
                    },
                    icon:{
                        fill:dark_text
                    }
                    
                }}
            >
                <MenuItem value="">
                    <em>Filter by Region</em>
                </MenuItem>
                <MenuItem value={"Africa"}>Africa</MenuItem>
                <MenuItem value={"Americas"}>Americas</MenuItem>
                <MenuItem value={"Asia"}>Asia</MenuItem>
                <MenuItem value={"Europe"}>Europe</MenuItem>
                <MenuItem value={"Oceania"}>Oceania</MenuItem>
            </Select>
        </section>
    )
}



export default Searchfilter;