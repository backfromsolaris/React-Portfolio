import { makeStyles } from "@material-ui/styles";
import { Card, Typography } from "@material-ui/core";

const aboutStyles = makeStyles({
    card_left:{
        color: 'white',
        position: 'absolute',
        top: '35vh',
        width: '22vw',
        marginLeft: '6vw',
        padding: 10,
        background: 'rgb(66, 63, 62, 0.5)'
    },
    card_right:{
        color: 'white',
        position: 'absolute',
        left: '70vw',
        top: '18vh',
        padding: 10,
        background: 'rgb(66, 63, 62, 0.5)'
    },
    title: {
        fontSize: 24
      },
    items:{
        justifySelf: 'right'
    },
    heading_right:{
        marginTop: '10vh',
        marginLeft: '5vw'
    },
    heading:{
        textAlign: 'left',
        marginBottom: '5vh'
    },
    list_right:{
        textAlign: 'left',
        listStyle: 'none',
        marginTop: '10vh',
        marginRight: '2vw'
    },
    list_right_item:{
        marginTop: '10vh'
    }
})


// to do:
// continue edits on text (reference linkedIn)
// style text further: differentiate between title & body/p
// animation!!!  slide in from sides? or something else...
// 


export const About_Cards = () =>{
    const classes = aboutStyles();
    return(
        <div>
            <Card elevation={24} className={classes.card_left}>
                <Typography className={classes.title}>
                    Professional
                </Typography>
                <br />
                <Typography className={classes.items} 
                    variant="body2" 
                    component="p">
                    Full Stack Web Developer
                </Typography>
                <br />
                <Typography className={classes.items}
                    variant="body2" 
                    component="p">
                    React -- Flask -- PostgreSQL
                </Typography>
                <br />
                <Typography className={classes.items} 
                    variant="body2" 
                    component="p">
                    Bootstrap -- Material-UI
                </Typography>
                <br />
                <Typography className={classes.items} 
                    variant="body2" 
                    component="p">
                    Background in Management & Culinary Arts
                    </Typography>
            </Card>

            <Card elevation={24} className={classes.card_right}>
                <Typography className={classes.title}>
                    Personal
                </Typography>
                <br />
                <Typography className={classes.items} 
                    variant="body2" 
                    component="p">
                    Currently in Chicago
                </Typography>
                <br />
                <Typography className={classes.items} 
                    variant="body2" 
                    component="p">
                    Hiking -- Camping -- Cycling -- Climbing
                </Typography>
                <br />
                <Typography className={classes.items} 
                    variant="body2" 
                    component="p">
                    Avid Home Cook
                </Typography>
                <br />
                <Typography className={classes.items} 
                    variant="body2" 
                    component="p">
                    Fan of Star Wars Expanded Universe
                    </Typography>
            </Card>
        </div>
            
    )
}