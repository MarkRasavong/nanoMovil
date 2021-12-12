import React from 'react';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
    const jaar = new Date().getFullYear();

    return(
        <footer className={classes.footer}>
            <p className={classes.footerText}>Mark Rasavong &copy; {jaar}</p>
        </footer>
    )
}

export default Footer