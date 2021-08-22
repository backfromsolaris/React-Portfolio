import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/styles";

const navStyles = makeStyles({
  root:{
    padding: '0',
    margin: '0'
  },
  navigation:{
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


export const Navbar = () =>{
    const classes = navStyles();
    return(
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <ul className={classes.navigation}>
                        <li>
                            <Link to='/' className={classes.nav_a}>Home</Link>
                        </li>                        
                        <li>
                            <Link to='/About' className={classes.nav_a}>About</Link>
                        </li>
                        <li>
                            <Link to='/Projects' className={classes.nav_a}>Projects</Link>
                        </li>
                        <li>
                            <Link to='/Contact' className={classes.nav_a}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}