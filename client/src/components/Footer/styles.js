import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footer: {
        // absolute --> the element is positioin relative to it's first positoned (non-static) ancestor element
        position: 'relative',
        textAlign: 'center',
        //vertical position --> if position absolute or fixed--> propter sets bottom edge of an element to a unit above or below it's nearest postioned ancestor.
        bottom: 0,
        width: '100%',
        height: '2.5rem',
    },
    footerText: {
        color: '#ccc',
    }
}))