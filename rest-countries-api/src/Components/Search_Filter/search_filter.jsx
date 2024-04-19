import search_filter from "./search_filter.module.css"

// fontawesome imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

// MUI imports
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';



const Searchfilter = ({setSearch,setFilter,region})=>{  

    const handlechange_dropdown = (event)=>{
        setFilter(event.target.value)
    }

    const onChange_search = (event) =>{
        setSearch(event.target.value)
    }

    return(
        <section className={search_filter.container}>
            <div className={search_filter.input_container}>
                <FontAwesomeIcon className={search_filter.searchicon}icon={faMagnifyingGlass}/>
                <TextField 
                    className={search_filter.textfield}
                    id="outlined-search" 
                    onChange={onChange_search}
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
                onChange={handlechange_dropdown} 
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