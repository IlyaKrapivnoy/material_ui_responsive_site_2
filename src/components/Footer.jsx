import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '40px 0',
    },
    footerTitle: {
        marginBottom: 10,
    },
    footerDescr: {
        color: 'rgba(0, 0, 0, 0.54)',
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
