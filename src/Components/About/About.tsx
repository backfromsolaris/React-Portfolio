import { makeStyles } from "@material-ui/styles";
import swirl_image from '../../Assets/Images/crossed.svg';

const aboutStyles = makeStyles({
    intro_left:{
        color: 'white',
        display: 'flex',
        position: 'absolute',
        justifyContent: 'flex-start',
        width: '35vw',
        marginLeft: '3vw',
    },
    intro_right:{
        color: 'white',
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '3vw',
    },
    heading_left:{
        marginTop: '-3vh',
        marginLeft: '5vw',
    },
    heading_right:{
        marginTop: '10vh',
        marginLeft: '5vw',
    },
    heading:{
        textAlign: 'left',
        marginBottom: '5vh',
    },
    list_left:{
        textAlign: 'left',
        listStyle: 'none',
        marginTop: '10vh',
    },
    list_right:{
        textAlign: 'left',
        listStyle: 'none',
        marginTop: '10vh',
        marginRight: '2vw',
    },
    list_right_item:{
        marginTop: '10vh',

        // background: 'rgb(23, 16, 16, 0.6)'
    }
})

export const About = () =>{
    const classes = aboutStyles();
    return(
        <main>
            <div className={classes.intro_left}>
                <div className={classes.heading_left}>
                    <h2 className={classes.heading}>Professional</h2>
                    <hr />
                    <ul className={classes.list_left}>
                        <li className={classes.list_left}>Full Stack Web Developer</li>
                        <li className={classes.list_left}>Flask--React--PostgreSQL</li>
                        <li className={classes.list_left}>Coding Temple Graduate</li>
                        <li className={classes.list_left}>Background in Management & Culinary Arts</li>
                    </ul>
                </div>
            </div>
            <div className={classes.intro_right}>
                <div className={classes.heading_right}>
                <h2 className={classes.heading}>Personal</h2>
                <hr />
                <ul className={classes.list_right}>
                        <li className={classes.list_right_item}>Currently Residing in Chicago</li>                        
                        <li className={classes.list_right_item}>Hiking -- Camping -- Cycling -- Climbing</li>
                        <li className={classes.list_right_item}>Avid Home Cook</li>
                        <li className={classes.list_right_item}>Reader of Star Wars Expanded Universe</li>

                    </ul>
                </div>
            </div>
        </main>
        
    )
}