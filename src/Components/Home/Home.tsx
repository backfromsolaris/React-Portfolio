import { makeStyles } from "@material-ui/styles";
import alaska_portfolio from '../../Assets/Images/alaska_portfolio.jpg'
import halibut_cove from '../../Assets/Images/halibut_cove.jpg'

const useStyles = makeStyles({
    container:{
        display: 'flex',
        background: 'none'
    },
    main:{
        width: '30%',
        position: 'absolute',
        left: '35vw',
        background: 'none'
    },
    img:{
        width: '20vw',
        marginTop: '10vh',
        borderRadius: '100%',
        background: 'none'
    },
    main_text:{
        textAlign: 'center',
        top: '12%',
        color: 'white',
        background: 'none'
    },
    subTitle:{
        marginTop: '3vh',
        marginBottom: '3vh',
        background: 'rgb(23, 16, 16, 0.5)',
        width: '30%',
        fontSize: '4vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '5px'
    },
    left_image:{
        width: '30vw',
        background: 'none'
    }
  })


export const Home = () =>{
    const classes = useStyles();
    return(
    <div className={classes.container}>
        <div className={classes.main}>
            <div className={classes.main_text}>
                <img src={alaska_portfolio} alt="Alaska Portrait" className={classes.img}/>
                <p className={classes.subTitle}>I'm Zach</p>
            </div>
        </div>
        <div>

        </div>
    </div>
    )}