import {makeStyles} from "@material-ui/core";

export const handOmPageStyle = makeStyles(theme => ({
    page: {
        width: '100%',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        marginLeft: 60,
        textAlign: 'left',
        color: 'rgba(55,71,79,1)',
        fontFamily: 'Lato',
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
    divText:{
        marginBottom: 20,
        width: '90%'
    }
}));
