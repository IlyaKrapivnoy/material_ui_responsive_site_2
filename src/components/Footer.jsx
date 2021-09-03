import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '40px 0',
        [theme.breakpoints.down('xs')]: {
            padding: '10px 0 20px',
        },
    },
    footerTitle: {
        marginBottom: 10,
    },
    footerDescr: {
        color: 'rgba(0, 0, 0, 0.54)',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    footerCopyright: {
        color: 'rgba(0, 0, 0, 0.54)',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth='lg'>
                <div className={classes.footer}>
                    <Typography className={classes.footerTitle} variant='h6'>
                        Footer
                    </Typography>
                    <Typography className={classes.footerDescr} variant='body1'>
                        Something here to give the footer a purpose!
                    </Typography>
                    <Typography
                        className={classes.footerCopyright}
                        variant='body1'
                    >
                        Copyright © Bart's Website 2021
                    </Typography>
                </div>
            </Container>
        </>
    );
};

export default Footer;
