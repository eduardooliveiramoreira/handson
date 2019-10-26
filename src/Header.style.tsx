import {makeStyles} from "@material-ui/core";

export const headerStyle = makeStyles(theme => ({
    header: {
        overflow: 'hidden',
        backgroundColor: '#696969',
        position: 'fixed',
        top: 0,
        width: '100%',
        verticalAlign: 'middle',
        zIndex:1
    },
    link: {
        float: 'right',
        display: 'block',
        color: '#f2f2f2',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        fontSize: 16
    },
    logo: {
        float: 'left',
        display: 'block',

    },
    imgLogo: {
        maxHeight: '56px',
        maxWidth: '225px',
        padding: '8px 4px 8px 12px',
    },
    textLogo: {
        maxWidth: '380px',
        outline: 'none',
        overflow: 'hidden',
        padding: '16px 12px',
        verticalAlign: 'middle',
        fontSize: 20,
        textDecoration: 'none',
        textOverflow: 'ellipsis'
    }
}));
