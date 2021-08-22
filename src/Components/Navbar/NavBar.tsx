import { useStyles } from '../Home';
import {Link} from 'react-router-dom';


export const Navbar = () =>{
    const classes = useStyles();
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