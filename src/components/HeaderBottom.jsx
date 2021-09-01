import { Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    headerBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 12px',
    },
    headerBottomItem: {
        padding: 16,
        color: '#181818',
        fontSize: 14,
    },
}));

const HeaderBottom = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <div className={classes.headerBottom}>
            <Link
                href='#'
                onClick={preventDefault}
                className={classes.headerBottomItem}
            >
                Technology
            </Link>
            <Link
                href='#'
                onClick={preventDefault}
                className={classes.headerBottomItem}
            >
                Design
            </Link>
            <Link
                href='#'
                onClick={preventDefault}
                className={classes.headerBottomItem}
            >
                Culture
            </Link>
            <Link
                href='#'
                onClick={preventDefault}
                className={classes.headerBottomItem}
            >
                Business
            </Link>
            <Link
                href='#'
                onClick={preventDefault}
                className={classes.headerBottomItem}
            >
                Politics
            </Link>
            <Link
                href='#'
                onClick={preventDefault}
                className={classes.headerBottomItem}
            >
                Opinion
            </Link>
            <Link
                href='#'
                onClick={preventDefault}
                className={classes.headerBottomItem}
            >
                Science
            </Link>
            <Link
                href='#'
                onClick={preventDefault}
                className={classes.headerBottomItem}
            >
                Health
            </Link>
            <Link
                href='#'
                onClick={preventDefault}
                className={classes.headerBottomItem}
            >
                Style
            </Link>
            <Link
                href='#'
                onClick={preventDefault}
                className={classes.headerBottomItem}
            >
                Travel
            </Link>
        </div>
    );
};

export default HeaderBottom;
