import { Thumbnail } from "../Thumbnails";
import marvel_image from '../../Assets/Images/marvel_homies.jpg';
import parking_garage_image from '../../Assets/Images/parking-garage.jpg';
import weather_api_image from '../../Assets/Images/weather-api.jpg';
import double_tap_image from '../../Assets/Images/double_tap.jpg';
import { makeStyles } from "@material-ui/styles";
import { Paper, CardMedia, Card, CardContent } from "@material-ui/core";

const projectStyles = makeStyles({
    card:{
        marginLeft: '5vw',
        marginRight: '25vw',
        padding: 10,
        width: '25vw',
        background: 'rgb(66, 63, 62, 0.5)'
    },
    h2:{
        color: 'white',
        marginBottom: '5vh',
    },
    grid_container:{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        gridTemplateRows: 'auto auto',
        columnGap: '50px',
        rowGap: '5px',
        marginTop: '10vh',
    },
    grid_item:{
        fontSize: '.9em',
    }
})


const marvel = 'https://github.com/backfromsolaris/Flask-Marvel'
const garage = 'https://github.com/backfromsolaris/oop-parking-garage'
const weather = 'https://github.com/backfromsolaris/JS-API-Weather-App'
const double_tap = 'https://github.com/backfromsolaris/group_project_1'

export const Projects = () =>{
    const classes = projectStyles();
    return(
        <Card elevation={24} className={classes.card}>
            <h2 className={classes.h2}>Projects</h2>
            <hr />
            <div className={classes.grid_container}>
                <div className={classes.grid_item}>
                    <Thumbnail 
                    link={marvel}
                    image= {marvel_image}
                    title="Marvel Flask API"
                     />
                </div>
                <div className={classes.grid_item}>
                    <Thumbnail 
                    link={garage}
                    image= {parking_garage_image}
                    title="Parking Garage OOP"
                    />
                </div>
                <div className={classes.grid_item}>
                    <Thumbnail 
                    link={weather}
                    image= {weather_api_image}
                    title="Weather App"
                    />
                </div>
                <div className={classes.grid_item}>
                    <Thumbnail 
                    link={double_tap}
                    image= {double_tap_image}
                    title="Group CRM Project"
                    />
                </div>

{/* create new thumbails with further work */}
                
                {/* <div className={classes.grid_item}>
                    <Thumbnail 
                    link=""
                    image= {}
                    title=""
                    />
                </div>
                <div className={classes.grid_item}>
                    <Thumbnail 
                    link=""
                    image= {}
                    title=""
                    />
                </div> */}

            </div>
        </Card>
    )
}