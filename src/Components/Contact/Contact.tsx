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
        width: '25ch',
        position: 'absolute',
        right: '4vw',
        top: '25vh',
        color: 'white',
        },
    header:{
        marginBottom: '5vh',
        color: 'white',
    },
    inputs:{
        color: 'white'
    },
    inputsMessage:{
        color: 'white',
        lineHeight: '10vh',
        textAlign: 'start'
    }
}));


export const Contact = () =>{
    const classes = useStyles();
    return(
        <div className={classes.form_div}>
            <h2 className={classes.header}>Contact Me</h2>
            <form className={classes.root}>
                <label className={classes.inputs}>Name</label>
                    <input className={classes.inputs} type="text" />
                
                <label className={classes.inputs}>Email</label>
                    <input className={classes.inputs} type="text" />
                
                <label className={classes.inputs}>Message</label>
                    <textarea  className={classes.inputs} name="" id="" cols={30} rows={5}></textarea>
                
            </form>
        </div>
    )
}