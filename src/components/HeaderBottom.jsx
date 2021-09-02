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

let menuList = [
    {
        id: 1,
        menuItem: 'Technology',
    },
    {
        id: 2,
        menuItem: 'Design',
    },
    {
        id: 3,
        menuItem: 'Culture',
    },
    {
        id: 4,
        menuItem: 'Business',
    },
    {
        id: 5,
        menuItem: 'Politics',
    },
    {
        id: 6,
        menuItem: 'Opinion',
    },
    {
        id: 7,
        menuItem: 'Science',
    },
    {
        id: 8,
        menuItem: 'Health',
    },
    {
        id: 9,
        menuItem: 'Style',
    },
    {
        id: 10,
        menuItem: 'Travel',
    },
];

const HeaderBottom = () => {
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
