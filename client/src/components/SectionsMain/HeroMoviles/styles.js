import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    hero: {
        height: '75vh',
        width: '100%',
        margin: 'auto -1vw',
        paddingLeft: '20vw',
    },
    headerText: {
        fontFamily: 'var(--font-header)',
        marginBottom: '1vh',
        color: 'var(--vlcWhite)',
        fontSize: '5vh',
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '10vh'
        },
    }
}))