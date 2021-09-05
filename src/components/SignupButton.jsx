import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import SignupForm from './SignupForm';

const useStyles = makeStyles((theme) => ({
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
        borderRadius: 20,
    },
}));

export default function SignupButton() {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {user ? (
                <Button
                    size='small'
                    variant='outlined'
                    onClick={() => setUser(!user)}
                >
                    LOG OUT
                </Button>
            ) : (
                <Button size='small' variant='outlined' onClick={handleOpen}>
                    Sign Up
                </Button>
            )}
            {user ? (
                ''
            ) : (
                <Modal
                    aria-labelledby='transition-modal-title'
                    aria-describedby='transition-modal-description'
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <SignupForm />
                        </div>
                    </Fade>
                </Modal>
            )}
        </div>
    );
}
