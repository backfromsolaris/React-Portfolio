import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    root:{
        lineHeight: '5vh',
        background: 'rgb(23, 16, 16, 0.4)',
        borderRadius: '4px'
      },
    form_div:{
        width: '25vw',
        position: 'absolute',
        left: '12vw',
        top: '35vh',
        color: 'white',
        },
    header:{
        marginBottom: '5vh',
        color: 'lightgrey',
        fontSize: '2.5rem'
    },
    items: {
        textDecoration: 'none',
        color: 'lightgrey',
        fontSize: '2rem'
    },
    thanks_div: {
        width: '20rem',
        position: 'absolute',
        right: '4rem',
        top: '9rem',
    },
    thanks: {
        position: 'absolute',
        fontSize: '2.5rem',
        color: 'lightgrey'
    }
}));


export const Contact = () =>{
    const classes = useStyles();
    return(
        <div>
            <div className={classes.form_div}>
                <h2 className={classes.header}>Contact Me</h2>
                <a target="_blank" className={classes.items} href="mailto:porraszach@gmail.com">Email</a><br/><br/>
                <a target="_blank" className={classes.items} href="https://www.linkedin.com/in/zachporras/">LinkedIn</a><br/><br/>
                <a target="_blank" className={classes.items} href="https://github.com/zachPorras">GitHub</a>
            </div>
            <div className={classes.thanks_div}>
                <h2 className={classes.thanks}>I'm eager to contribute to your success!</h2>
            </div>
        </div>
        
    )
}