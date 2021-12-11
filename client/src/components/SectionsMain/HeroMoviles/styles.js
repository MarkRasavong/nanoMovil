import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    hero: {
        height: '75vh',
        width: '101vw',
        margin: 'auto -1vw',
        paddingLeft: '20vw',
    },
    headerText: {
        fontFamily: 'var(--font-header)',
        marginBottom: '1vh',
        color: 'var(--vlcWhite)'
    }
}))