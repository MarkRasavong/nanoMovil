import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    hero: {
        height: '60vh',
        width: '101vw',
        margin: 'auto -1vw',
    },
    heroTitle: {
        marginTop: '20vh',
    },
    logo: {
        position: 'relative',
        bottom: '2vh',
        right: '0.5vw',
        zIndex: '-1',
    },
    headerText: {
        fontFamily: 'var(--font-header)',
        color: 'var(--vlcWhite)'
    },
    standardText: {
        fontFamily: 'var(--font-standard)',
        color: 'var(--vlcWhite)'
    }
}))