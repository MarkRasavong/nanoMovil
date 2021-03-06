import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    header: {
        position: 'relative',
        //margin are use to create space around elements outside the objects borders. vertical = auto spacing
        //horiztional margin on both sides are -16pxs
        margin: 'auto -1vw',
        // spacing inside it's borders
        padding: '1vh 0.1vw',
        // shadows
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',

    },
    navtext: {
        color: '#fff',
        fontWeight: '200',
    },
    navbarLogo: {
        height: '5.5rem'
    },
    menuButton: {
        position: 'relative',
        marginTop: '20px',
        [theme.breakpoints.between('xs', 'sm')]: {
            display: 'none',
        }
    },
    typographyText: {
        fontFamily: 'var(--font-header)',
    }
}))