import {makeStyles} from "@material-ui/core";
import {url} from "inspector";

export const mainPageStyle = makeStyles(theme => ({
    mainDiv: {
        height: '340px',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: 'url(https://lh5.googleusercontent.com/K0NdHvgKNiVZhNsPNr46S3F8CDiMONrGM1SwBWGD94Ff1gdk8pEY8EPn7Qe02QS30Z2_AhGK=w16383)',
        opacity: 0.6,
        paddingTop: 100
    },
    imgLogo:{
        float: 'right',
        marginRight: '100px',
        marginTop: 20,
        opacity: 1
    },
    div: {
        overflow: 'hidden',
        backgroundColor: '#363636',
        width: '100%',
        verticalAlign: 'middle'
    },
    title: {
        float: 'left',
        display: 'block',
        color: '#f2f2f2',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        fontSize: 25
    },
    img: {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '340px',
        width: '100%'
    },
    page: {
        width: '100%',
        justifyContent: 'center'
    },
    text:{
        fontSize: 16,
        marginLeft: 60,
        width:300,
        textAlign: 'left'
    }
}));
