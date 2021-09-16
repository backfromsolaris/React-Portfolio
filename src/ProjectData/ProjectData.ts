import mos_eisley from '../Assets/Images/mos_eisley.jpg';
import weather from '../Assets/Images/weather-api.jpg';
import marvel from '../Assets/Images/marvel_homies.jpg';
import roi_calc from '../Assets/Images/roi_calc.jpg';
import double_tap from '../Assets/Images/double_tap.jpg';
import movie from '../Assets/Images/movie.jpg';
import parking from '../Assets/Images/parking-garage.jpg';


export const ProjectData = [
        {
            title: 'Mos Eisley Archives',
            image: mos_eisley,
            description: "A Star Wars fan's homage to the saga, crafted within a full-stack application, utilizing Flask to route authentication and other data stored on a PostgreSQL database, and React-Redux utilized for the front-end. A combination of fictional forum posts about a cantina on the planet Tattooine, with a page to store Star Wars books and their details.\nThis project could potentially evolve in many different directions, one of which being an educational UX for adults and/or children to learn abou the Star Wars universe.",
            technologies: 'HTML, CSS, Python, TypeScript, React-Redux, Flask, PostgreSQL, Material-UI',
            github_link: 'https://github.com/zachPorras/mos-eisley-hosted',
            hosted_link: 'https://mos-eisley-archives.herokuapp.com/'
        },
        {
            title: 'Weather App',
            image: weather,
            description: 'Single page application with exposure to two 3rd party APIs. Two separate forms allow users to either enter a US zip code, or a city/neighborhood and state/city/country combination. The app simultaneously loads current weather data from OpenWeatherMap API, and also a local satellite aerial map from Bing Maps API.',
            technologies: 'HTML, CSS, JavaScript, Bootstrap',
            github_link: 'https://github.com/zachPorras/JS-API-Weather-App',
            hosted_link: ''
        },
        {
            title: 'Marvel Heroes',
            image: marvel,
            description: 'A front-end application built with React which connects to an API in a separate Flask application. Utilizes Google authentication and allows users to enter different Marvel heroes to be stored in database. Full CRUD capabilities are available once users are logged in.',
            technologies: 'HTML, CSS, TypeScript, React, Material-UI',
            github_link: 'https://github.com/zachPorras/React-Marvel',
            hosted_link: ''
        },
        {
            title: 'ROI Calculator',
            image: roi_calc,
            description: 'A robust Object Oriented Program written with Python that allows users to enter various data in order to offer an estimated return on investment. Allows for information regarding tax rates, down payments, property management overhead, and labor costs, all with the ability to skip certain sections to make for an either simpler or more complex program.',
            technologies: 'Python, Jupyter Notebook',
            github_link: 'https://github.com/zachPorras/CT_homework_week_3/tree/main/5FRI',
            hosted_link: ''
        },
        {
            title: 'Double Tap CRM',
            image: double_tap,
            description: 'Serving as project lead, this CRM application was created on a team of three individuals while harnessing version-control via Github. Team was given a mock of the desired CRM, and utilized Bootstrap 5 to create a polished and fully routed final product.',
            technologies: 'HTML, CSS, Bootstrap',
            github_link: 'https://github.com/zachPorras/group_project_1',
            hosted_link: ''
        },
        {
            title: 'Movie Theater DB',
            image: movie,
            description: 'A preliminary ERD was created to design a high-level system outline of a membership-based movie theater. This design was migrated to a PostgreSQL database and utilized SQL commands for table creation & data insertion.',
            technologies: 'PostgreSQL, PGAdmin, Lucidcharts',
            github_link: 'https://github.com/zachPorras/CT_homework_week_4/tree/main/2TUES/homework',
            hosted_link: ''
        },
        {
            title: 'Parking Garage',
            image: parking,
            description: 'An Object Oriented program created with paired programming techniques. The program simulates a car entering a parking garage, and prompts the user to take a ticket, make a payment any time prior to departure, and displays remaining spaces and tickets at any point when queried by the user.',
            technologies: 'Python, Jupyter Notebook',
            github_link: 'https://github.com/zachPorras/oop-parking-garage',
            hosted_link: ''
        },
    ]