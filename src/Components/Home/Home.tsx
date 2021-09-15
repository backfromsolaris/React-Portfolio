import { makeStyles } from "@material-ui/styles";
import alaska_portfolio from '../../Assets/Images/alaska_portfolio.jpg'
import halibut_cove from '../../Assets/Images/halibut_cove.jpg'

const useStyles = makeStyles({
    container:{
        display: 'flex',
    },
    main:{
        width: '30%',
        position: 'absolute',
        left: '35vw',
    },
    paper:{
        // width: '20vw',
        // marginTop: '10vh',
        borderRadius: '100%',
        backgroundImage: `url${alaska_portfolio}`
    },
    img:{
        borderRadius: '100%',
    },
    main_text:{
        textAlign: 'center',
        top: '12%',
        color: 'lightgrey',
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
    },
    bck:{
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        zIndex: -1,
        position: 'absolute'
    }
  })


export const Home = () =>{
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.main_text}>
                    <img src={alaska_portfolio} 
                        className={classes.img}/>
                    <p className={classes.subTitle}>I'm Zach</p>
                </div>
            </div>
        </div>
    )}

export const Background = () =>{
    const classes = useStyles();
    return(
        <img src={halibut_cove} className={classes.bck} />
    )
}
