import { Link } from "react-router-dom";
import { useStyles } from '../Home';

interface Props{
    link:string;
    image:string;
    title:string;
    category:string;
}

export const Thumbnail = (props:Props) =>{
    const classes = useStyles();
    return(
        <div className={classes.project}>
                <div className={classes.project_image}>
                    <img className={classes.project_image} src={props.image} alt="Project Image" />
                </div>
                <div className={classes.project_title}>{props.title}</div>
                <div className={classes.project_category}>{props.category}</div>                
        </div>
    );
}