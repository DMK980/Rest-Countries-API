import countrycard from "./countrycard.module.css";

// Mui imports 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CountryCard = (props)=>{
    return (
        <>
            <Card sx={{maxWidth: 270}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="150"
                    image={props.imagesrc}
                    alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.countryname}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span style={{fontWeight: "bold"}}>Population: </span>
                            {props.population}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span style={{fontWeight: "bold"}}>Region: </span>
                            [props.region]
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span style={{fontWeight: "bold"}}>Capital: </span>
                            [props.capital]
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default CountryCard;