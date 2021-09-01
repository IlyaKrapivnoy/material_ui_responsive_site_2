import {
    Button,
    Container,
    makeStyles,
    Snackbar,
    Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';

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
    },
    headerTopRight: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    searchIcon: {
        margin: '0 12px',
        color: 'rgba(0, 0, 0, 0.54)',
        cursor: 'pointer',
    },
    headerInput: {
        border: 'none',
        position: 'absolute',
        right: 121,
        width: 72,
        fontSize: 16,
        '&:focus': {
            outline: 'none',
        },
    },
}));

const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    const handleClick = ({ openSearchInput }) => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Container maxWidth='lg'>
            <div className='header'>
                <div className={classes.headerTop}>
                    <div className='headerTopLeft'>
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
                                placeholder='Search...'
                                className={classes.headerInput}
                            />
                        ) : null}
                        <SearchIcon
                            className={classes.searchIcon}
                            onClick={() => setOpenSearch(!openSearch)}
                        />
                        <Button size='small' variant='outlined'>
                            Sign Up
                        </Button>
                    </div>
                </div>
                <div className={classes.headerBottom}></div>
            </div>
        </Container>
    );
};

export default Header;
