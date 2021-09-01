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
import SignupButton from './SignupButton';

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
        right: 130,
        width: '100%',
        fontSize: 16,
        borderBottom: '1px dashed rgba(0, 0, 0, 0.23)',
        '&:focus': {
            outline: 'none',
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
}));

const Header = () => {
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
                <div className={classes.headerBottom}></div>
            </div>
        </Container>
    );
};

export default Header;
