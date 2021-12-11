import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    body: {
        height: 'auto',
    },
    image: {
        height: 'auto',
    },
    cardContent: {
        dispaly: 'flex',
        justifyContent: 'space-between', //
    },
    cardActions: {
        display: 'flex', // flex-context enabled
        justifyContent: 'flex-end', // goes to the right
    },
    apiText: {
        fontFamily: 'var(--font-standard)',
        marginTop: '1px',
        color: 'black'
    },
    button: {
        backgroundColor: 'var(--nanoBlue)',
        color: 'var(--vlcWhite)'
    },
}));

