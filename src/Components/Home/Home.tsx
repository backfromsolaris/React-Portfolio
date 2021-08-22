import { makeStyles } from "@material-ui/styles";
import alaska_portfolio from '../../Assets/Images/alaska_portfolio.jpg'

export const useStyles = makeStyles({
    main:{
      backgroundColor: 'black',
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      position: 'absolute',
    },
    main_text:{
      textAlign: 'center',
      position: 'relative',
      top: '12%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white'
    },
    subTitle:{
      marginTop: '3vh',
      marginBottom: '3vh'
    },
    project:{
      color: 'black'
    },
    project_image:{
      color: 'black',
      width: '30vw'
    },
    project_title:{
      color: 'black'
    },
    project_category:{
      color: 'black'
    },
    root:{
      padding: '0',
      margin: '0'
    },

  })


export const Home = () =>{
    const classes = useStyles();
    return(<main className={classes.main}>
    <div className={classes.main_text}>
        <img src={alaska_portfolio} alt="" />
        <p className={classes.subTitle}>I'm Zach</p>
        
    </div>
</main>
    )}