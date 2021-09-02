import { Container, Typography, makeStyles } from '@material-ui/core';
import Image from '../images/bg-0.jpeg';

const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundColor: '#ccc',
        height: '100%',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    bannerText: {
        width: '50%',
        padding: 48,
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            padding: 30,
        },
    },
    bannerTitle: {
        marginBottom: 16,
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
        },
    },
    bannerSubtitle: {
        fontSize: 24,
        marginBottom: 24,
        lineHeight: '32px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
        },
    },
    bannerLinkText: {
        color: '#1976D2',
        cursor: 'pointer',
    },
}));

const Banner = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth='lg'>
                <div className={classes.banner}>
                    <div className={classes.bannerText}>
                        <Typography
                            variant='h3'
                            component='h1'
                            className={classes.bannerTitle}
                        >
                            Title of a longer featured blog post
                        </Typography>
                        <Typography
                            variant='subtitle1'
                            className={classes.bannerSubtitle}
                        >
                            Multiple lines of text that form the lede, informing
                            new readers quickly and efficiently about what's
                            most interesting in this post's contents.
                        </Typography>
                        <Typography
                            variant='body1'
                            className={classes.bannerLinkText}
                        >
                            Continue reading…
                        </Typography>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Banner;
