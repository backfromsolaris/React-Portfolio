import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/styles";

const navStyles = makeStyles({
  root:{
    padding: '0',
    margin: '0',
  },
  navigation:{
    display: 'flex',
  },
  navbar_container:{
    display: 'flex',
    justifyContent: 'flex-end',
  },
  nav_a:{
    marginTop: "3vh",
    display: 'block',
    padding: '1em 2em',
    color: 'white',
    textDecoration: 'none',
  },
  item:{
    listStyleType: 'none'
  }
})


export const Navbar = () =>{
    const classes = navStyles();
    return(
        <div className={classes.root}>
            <nav className={classes.root}>
                <div className={classes.navbar_container}>
                    <ul className={classes.navigation}>
                        <li className={classes.item}>
                            <Link to='/' 
                              className={classes.nav_a}>Home</Link>
                        </li>                        
                        <li className={classes.item}>
                            <Link to='/About' 
                              className={classes.nav_a}>About</Link>
                        </li>
                        <li className={classes.item}>
                            <Link to='/Projects' 
                              className={classes.nav_a}>My Work</Link>
                        </li>
                        <li className={classes.item}>
                            <Link to='/Contact' 
                              className={classes.nav_a}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}