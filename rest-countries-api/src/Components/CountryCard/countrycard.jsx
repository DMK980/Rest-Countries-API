

// Mui imports 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CountryCard = (props)=>{

    // destructuring props
    const {imgsrc,countryname,population,region,capital} = props;
    return (
        <>
            <Card sx={{
                width:270,
                flexGrow:1
                }}
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
                            {population}
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
        </>
    )
}

export default CountryCard;