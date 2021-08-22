import { Thumbnail } from "../Thumbnails";
import marvel_image from '../../Assets/Images/marvel_homies.jpg';
import parking_garage_image from '../../Assets/Images/parking-garage.jpg';
import weather_api_image from '../../Assets/Images/weather-api.jpg';

export const Projects = () =>{
    return(
        <div>
            <h1>Projects</h1>
            <Thumbnail 
                link="/marvel-api"
                image= {marvel_image}
                title="Marvel Flask API"
                category="Flask API"
            />
            <Thumbnail 
                link="/parking-garage-OOP"
                image= {parking_garage_image}
                title="Parking Garage OOP"
                category="Python OOP"
            />
            <Thumbnail 
                link="/weather-api"
                image= {weather_api_image}
                title="Weather App"
                category="JavaScript API"
                />
        </div>
    )
}