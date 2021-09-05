import { Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    headerBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 12px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    headerBottomItem: {
        padding: 16,
        color: '#181818',
        fontSize: 14,
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
    const preventDefault = (event) => event.preventDefault();

    return (
        <div className={classes.headerBottom}>
            {menuList.map((item) => (
                <Link
                    href='#'
                    onClick={preventDefault}
                    className={classes.headerBottomItem}
                >
                    {item.menuItem}
                </Link>
            ))}

            {user ? <div className={classes.login}>ADMIN</div> : ''}
        </div>
    );
};

export default HeaderBottom;
