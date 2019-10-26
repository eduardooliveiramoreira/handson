import {makeStyles} from "@material-ui/core";

export const workshopStyle = makeStyles(theme => ({
    title: {
        fontSize: 24,
        color: "white",
        float: 'left',
        marginLeft: 60
    },
    divTitle: {
        height: 89,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: 'url(https://lh6.googleusercontent.com/aXOX76rHd59cm8T2rF-RA1KNLSASkwA3pPJMoigdYsHd50PxEUHhiM27sUbfUmKGyakK320=w16383)'
    },
    img: {
        width: 460,
        margin: '40px 40px 40px 40px'
    },
    text: {
        fontSize: 20,
        marginLeft: 60,
        textAlign: 'left',
        color: 'rgba(55,71,79,1)',
        fontFamily: 'Lato',
        fontWeight: 400,
        letterSpacing: '0.5px',
        lineHeight: 1.25,
    },
    textH1: {
        fontSize: 45,
        marginLeft: 60,
        textAlign: 'left',
        color: 'rgba(55,71,79,1)',
        fontFamily: 'Lato',
        fontWeight: 300,
        letterSpacing: '0.5px',
        lineHeight: 1.2,
    },
    textH2: {
        fontSize: 25,
        marginLeft: 60,
        textAlign: 'left',
        color: 'rgba(55,71,79,1)',
        fontFamily: 'Lato',
        fontWeight: 400,
        lineHeight: 1.4,
    }

}));
