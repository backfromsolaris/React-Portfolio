import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

interface Props{
    link:string;
    image:string;
    title:string;
}

const thumbStyles = makeStyles({
    project:{
        background: 'none'
      },
      project_image:{
        width: '10vw',
        marginBottom: '1vh',
        background: 'none'
      },
      project_title:{
        color: 'white',
        display: 'flex',
        marginBottom: '5vh',
        background: 'none'
      }
})


export const Thumbnail = (props:Props) =>{
    const classes = thumbStyles();
    return(
        <div className={classes.project}>
                <div className={classes.project_image}>
                    <a href={props.link}>
                        <img className={classes.project_image} src={props.image} alt="Project Image" />
                    </a>
                </div>
                <div className={classes.project_title}>{props.title}</div>              
        </div>
    );
}