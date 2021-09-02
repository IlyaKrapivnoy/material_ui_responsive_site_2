import {
    Button,
    Link,
    makeStyles,
    Snackbar,
    Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';
import SignupButton from './SignupButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
    headerTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
        padding: '6px 24px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '210px',
        },
    },
    headerTopLeft: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
    },
    headerTopLeftIcon: {
        marginBottom: 12,
        color: 'rgba(0, 0, 0, 0.54)',
        cursor: 'pointer',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    headerTopRight: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            justifyContent: 'space-between',
        },
    },
    searchIcon: {
        margin: '0 12px',
        color: 'rgba(0, 0, 0, 0.54)',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            marginTop: 12,
        },
    },
    headerInput: {
        border: 'none',
        position: 'absolute',
        right: 130,
        width: '100%',
        fontSize: 16,
        borderBottom: '1px dashed rgba(0, 0, 0, 0.23)',
        '&:focus': {
            outline: 'none',
        },
        [theme.breakpoints.down('sm')]: {
            right: 60,
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    mobileMenu: {
        position: 'fixed',
        background: '#ccc',
        width: 240,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    menuMask: {
        background: 'rgba(0,0,0,.7)',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
    mobileMenuList: {
        display: 'flex',
        flexDirection: 'column',
    },
    mobileMenuItem: {
        padding: 10,
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: 30,
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: 18,
    },
    menuLeftCloseIcon: {
        padding: '15px 0 0 15px',
        cursor: 'pointer',
    },
}));

const HeaderTop = ({ preventDefault, menuList }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    // for search input
    const handleClick = ({ openSearchInput }) => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    // for mobile menu
    const [showMenu, setShowMenu] = useState(false);

    let menu;
    let menuMask;

    if (showMenu) {
        menu = (
            <div className={classes.mobileMenu}>
                <div className='menuLeft'>
                    <CloseIcon
                        onClick={() => setShowMenu(false)}
                        className={classes.menuLeftCloseIcon}
                    />
                </div>
                <div className={classes.mobileMenuList}>
                    {menuList.map((item) => (
                        <Link
                            href='#'
                            onClick={preventDefault}
                            className={classes.mobileMenuItem}
                        >
                            {item.menuItem}
                        </Link>
                    ))}
                </div>
            </div>
        );

        menuMask = (
            <div
                className={classes.menuMask}
                onClick={() => setShowMenu(false)}
            ></div>
        );
    }

    return (
        <div className={classes.headerTop}>
            <div className={classes.headerTopLeft}>
                <MenuIcon
                    onClick={() => setShowMenu(!showMenu)}
                    className={classes.headerTopLeftIcon}
                />
                {menuMask}
                {menu}

                <Button size='small' onClick={handleClick}>
                    Subscribe
                </Button>
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Alert onClose={handleClose} severity='warning'>
                        Please sign up for subscription
                    </Alert>
                </Snackbar>
            </div>
            <div className='headerTopCenter'>
                <Typography variant='h5'>Bart's Blog</Typography>
            </div>
            <div className={classes.headerTopRight}>
                {openSearch ? (
                    <input
                        type='text'
                        placeholder='Search'
                        className={classes.headerInput}
                    />
                ) : null}
                <SearchIcon
                    className={classes.searchIcon}
                    onClick={() => setOpenSearch(!openSearch)}
                />
                <SignupButton />
            </div>
        </div>
    );
};

export default HeaderTop;
