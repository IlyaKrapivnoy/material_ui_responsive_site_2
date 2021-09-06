import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    headerBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 12px',
        maxHeight: 20,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    headerBottomLi: {
        listStyle: 'none',
    },
    headerBottomLink: {
        textDecoration: 'none',
        color: '#181818',
        fontSize: 14,
        padding: 16,
    },
    login: {
        padding: 16,
        color: '#181818',
        fontSize: 14,
        fontWeight: 800,
        cursor: 'pointer',
    },
}));

const HeaderBottom = ({ menuList }) => {
    const user = true;

    const classes = useStyles();

    return (
        <ul className={classes.headerBottom}>
            <li className={classes.headerBottomLi}>
                <Link to='/' className={classes.headerBottomLink}>
                    Main
                </Link>
            </li>
            <li className={classes.headerBottomLi}>
                <Link to='/culture' className={classes.headerBottomLink}>
                    Culture
                </Link>
            </li>
            <li className={classes.headerBottomLi}>
                <Link to='/business' className={classes.headerBottomLink}>
                    Business
                </Link>
            </li>
            <li className={classes.headerBottomLi}>
                <Link to='/politics' className={classes.headerBottomLink}>
                    Politics
                </Link>
            </li>
            <li className={classes.headerBottomLi}>
                <Link to='/opinion' className={classes.headerBottomLink}>
                    Opinion
                </Link>
            </li>
            <li className={classes.headerBottomLi}>
                <Link to='/science' className={classes.headerBottomLink}>
                    Science
                </Link>
            </li>
            <li className={classes.headerBottomLi}>
                <Link to='/health' className={classes.headerBottomLink}>
                    Health
                </Link>
            </li>
            <li className={classes.headerBottomLi}>
                <Link to='/style' className={classes.headerBottomLink}>
                    Style
                </Link>
            </li>
            <li className={classes.headerBottomLi}>
                <Link to='/travel' className={classes.headerBottomLink}>
                    Travel
                </Link>
            </li>
        </ul>
    );
};

export default HeaderBottom;
