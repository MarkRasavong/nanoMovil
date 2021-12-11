import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    media: {
        height: 260,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardContentText: {
        fontFamily: 'var(--font-header)',
        color: 'black'
    },
    cartActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
    },
    cardActionsButton: {
        backgroundColor: 'var(--vlcOrange)'
    },
    removeDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    quantity: {
        margin: '5px 10px 0'
    }
}));