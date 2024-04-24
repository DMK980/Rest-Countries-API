

// Mui imports 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { countryselect } from '../../State/features/selectedcountryslice';
import { scrollsetting } from '../../State/features/scrollposition';


const CountryCard = ({key:keys,country,imgsrc,countryname,population,region,capital})=>{ 

    // update state for selected country
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleclick = ()=>{
        dispatch(countryselect(country))
        navigate("/Details")
        dispatch(scrollsetting(window.scrollY))
    }
    // adding commas to population
    const pop = population
    const clean_population = pop.toLocaleString("en-US");
    return (
        <Card sx={{
            maxWidth:300,
            width:270,
            flexGrow:1
            }}
            onClick={handleclick}
            keys ={keys}
        >
            <CardActionArea >
                <CardMedia
                component="img"
                height="150"
                image={imgsrc}
                alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h6" component="div"sx={{fontWeight:900}}>
                        {countryname} 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span style={{fontWeight: "bold"}}>Population: </span>
                        {clean_population}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span style={{fontWeight: "bold"}}>Region: </span>
                        {region}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span style={{fontWeight: "bold"}}>Capital: </span>
                        {capital}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        
        
    )
}

export default CountryCard;