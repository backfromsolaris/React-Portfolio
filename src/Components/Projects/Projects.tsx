import { makeStyles } from "@material-ui/styles";
import { Button, 
    CardMedia, 
    Card, 
    CardActionArea, 
    CardContent, 
    CardActions, 
    Typography } from "@material-ui/core";
import mos_eisley from '../../Assets/Images/mos_eisley.jpg';
import { useState } from "react";
import { ProjectData } from "../../ProjectData/ProjectData";


const projectStyles = makeStyles({
    card:{
        marginLeft: '5vw',
        marginRight: '25vw',
        padding: 10,
        width: '25vw',
        background: 'rgb(66, 63, 62, 0.5)'
    },
    white: {
        color: 'white'
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
    },
    media: {
        height: 140
    },
    project_media:{
        color: 'white',
        position: 'absolute',
        left: '67vw',
        top: '30vh',
        padding: 10,
        background: 'rgb(66, 63, 62, 0.5)',
        height: 'auto',
        width: '23rem'
    },
    project_img: {
        maxHeight: '100%',
        maxWidth: '100%'
    }
})


export const Projects = () =>{
    const classes = projectStyles();
    const [project, changeProject] = useState<any>(ProjectData);

    // const nextProject = () => {
    //     changeProject()
    // }

    return(
        <div>
        <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography 
          gutterBottom 
          variant="h5" 
          className={classes.white} 
          component="h2">
            {project[0].title}
          </Typography>
          <Typography gutterBottom variant="body2" className={classes.white} component="p">
          {project[0].technologies}
          </Typography>
          <Typography variant="body2" className={classes.white} component="p">
          {project[0].description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.white} size="small">
          Github
        </Button>
        <Button className={classes.white} size="small">
          Deployment
        </Button>
        {/* <Button onClick={nextProject} className={classes.white} size="small">
          Next
        </Button> */}
      </CardActions>
    </Card>
    <Card className={classes.project_media}>
        <img className={classes.project_img} src={mos_eisley} alt="project image" />
    </Card>
        </div>

    )
}