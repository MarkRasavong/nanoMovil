import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    hero: {
        height: '100%',
        width: '100%',
        margin: 'auto -1vw',
    },

    heroTitle: {
        marginTop: '25vh',
        [theme.breakpoints.between('xs', 'sm')]: {
            marginTop: '8vh',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            marginTop: '7vh',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            marginTop: '14vh',
        }
    },

    imageSize: {
        height: '70vh',
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '22vh'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '32vh'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: '52vh'
        }
    },
    logo: {
        position: 'relative',
        bottom: '2vh',
        right: '0.5vw',
        zIndex: '-1',
    },
    headerText: {
        fontFamily: 'var(--font-header)',
        color: 'var(--vlcWhite)',
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '5vh'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '8vh'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '11vh'
        }
    },
    standardText: {
        fontFamily: 'var(--font-standard)',
        color: 'var(--vlcWhite)'
    }
}))