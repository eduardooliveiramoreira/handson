import {makeStyles} from "@material-ui/core";

export const topDivStyle = makeStyles(theme => ({
    div: {
        height: '340px',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: 'url(https://lh5.googleusercontent.com/K0NdHvgKNiVZhNsPNr46S3F8CDiMONrGM1SwBWGD94Ff1gdk8pEY8EPn7Qe02QS30Z2_AhGK=w16383)',
        opacity: 0.8,
        paddingTop: 100
    },
    imgLogo:{
        float: 'right',
        marginRight: '100px',
        marginTop: 20,
        opacity: 1
    },
    text:{
        float: 'left',
        marginLeft:'100px',
        marginTop: 20,
        opacity: 1
    },
    title:{
        color: "black",
        fontsize: 85
    }
}));
