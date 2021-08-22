import { makeStyles } from "@material-ui/styles";

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
    navigation: {
      display: 'flex'
    },
    navbar_container:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'black'
    },
    nav_a:{
      display: 'block',
      padding: '1em',
      color: 'white',
      textDecoration: 'none'
    }
  })


export const Home = () =>{
    const classes = useStyles();
    return(<main className={classes.main}>
    <div className={classes.main_text}>
        <p className={classes.subTitle}>I'm Zach</p>
        
    </div>
</main>
    )}