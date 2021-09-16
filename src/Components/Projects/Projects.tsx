import { makeStyles } from "@material-ui/styles";
import { Button, 
    CardMedia, 
    Card, 
    CardActionArea, 
    CardContent, 
    CardActions, 
    Divider,
    Typography } from "@material-ui/core";
import { useState } from "react";
import { ProjectData } from "../../ProjectData/ProjectData";
import github from '../../Assets/Images/github-white.png';


const projectStyles = makeStyles({
    card:{
        marginLeft: '5vw',
        marginRight: '25vw',
        paddingRight: 10,
        width: '25vw',
        height: '440px',
        background: 'rgb(66, 63, 62, 0.5)',
        position: 'relative'
    },
    white: {
        color: 'lightgrey',
        textDecoration: 'none'
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
    divider: {
        backgroundColor: 'grey',
        marginBottom: '.5rem',
        // lineHeight: '6px'
    },
    technologies: {
        color: 'grey',
        fontStyle: 'italic'
    },
    description: {
        color: 'white',
        marginTop: '2rem'
    },
    actions: {
        position: 'absolute',
        bottom: '0'
    },
    project_media:{
        color: 'white',
        position: 'absolute',
        left: '67vw',
        top: '30vh',
        padding: 5,
        height: 'auto',
        width: '23rem',
        background: 'rgb(66, 63, 62, 0.5)'
    },
    project_img: {
        maxHeight: '100%',
        maxWidth: '100%'
    }
})


export const Projects = () =>{ 
    const classes = projectStyles();
    let [index, setIndex] = useState<number>(0);
    const project = ProjectData



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
                    {project[index].title}
                </Typography>
                <Divider className={classes.divider}/>
                <Typography 
                    gutterBottom 
                    variant="body2" 
                    className={classes.technologies} 
                    component="p">
                    {project[index].technologies}
                </Typography>
                <Typography variant="body2" className={classes.description} component="p">
                {project[index].description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <Button className={classes.white} size="small">
                <a 
                href={project[index].github_link} 
                target="_blank"><img src={github} 
                alt="github icon" /></a>
                </Button>
                {project[index].hosted_link != '' ? 
                (
                <Button className={classes.white} size="small">
                    <a 
                    href={project[index].hosted_link} 
                    target="_blank" 
                    className={classes.white}>Deployment</a>
                </Button>
                ):(
                <Button disabled className={classes.white} size="small">
                    Deployment
                </Button>
                )}
                <Button onClick={()=>setIndex(
                    index > 0 ? (index-1):(index = project.length-1))}
                    className={classes.white} size="small">
                Prev
                </Button>
                <Button onClick={()=>setIndex(
                    index < project.length-1 ? (index+1):(index = 0))}
                    className={classes.white} size="small">
                Next
                </Button>
            </CardActions>
        </Card>
        <Card className={classes.project_media}>
            <img 
            className={classes.project_img} 
            src={project[index].image} 
            alt="project image" />
        </Card>
    </div>

    )
}