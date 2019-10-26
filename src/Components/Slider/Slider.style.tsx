import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        padding: '10px 140px 10px 140px',
        justifyContent: 'center'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        maxWidth: '100%',
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
}));
