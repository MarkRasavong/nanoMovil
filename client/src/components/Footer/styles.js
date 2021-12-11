import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footer: {
        flexShrink: 0,
        textAlign: 'center',
        //vertical position --> if position absolute or fixed--> propter sets bottom edge of an element to a unit above or below it's nearest postioned ancestor.
        width: '100%',
        height: '1rem',
        marginTop: '2.5rem',
    },
    footerText: {
        color: '#ccc',
    }
}))