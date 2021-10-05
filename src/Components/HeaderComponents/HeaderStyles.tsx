import { makeStyles } from '@material-ui/core';
import { Theme } from '../Theme';
export const useStyles = makeStyles((theme) => ({
    HeaderWrapper: {
        width: "100%",
        height: "90vh",
        backgroundColor: Theme.colors.base1,

    },
    Headercontainer: {
        width: "100%",
        minheight: "90vh",
        height: "75vh",
        padding: "20px",
        color: Theme.colors.base2,
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Roboto",

    },
    headerTitle: {
        fontSize: "3rem",
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.3rem",
            margin: theme.spacing(2, 0),
        },
    },
    headerDesc: {
        fontSize: "2rem",
    },
    navbar: {
        backgroundColor: Theme.colors.base1,
        color: Theme.colors.base2,
    },
    Toolbar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
    },
    navlinks: {
        color: Theme.colors.base2,
    },
    decorator: {
        display: "flex",
        fontSize: "2rem",
        fontWeight: "bolder",
        fontFamily: "Roboto",
        position: "relative",
        marginTop: "25px",
        '&:Before': {
            width: "40px",
            height: "40px",
            backgroundColor: Theme.colors.primary,
            containt: '""',
            borderRadius: "50px",
        }
    },

    decoratorText: {

        position: "relative",

    },
    Text: {
        color: Theme.colors.base2
    },
    drawer: {
        width: "250px",
        height: "100vh",

    },
    drawerContainer: {
        width: "250px",
        height: "100vh",
        backgroundColor: Theme.colors.primary1,
    }

}))