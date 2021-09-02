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

const HeaderBottom = ({ menuList }) => {
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
        </div>
    );
};

export default HeaderBottom;
