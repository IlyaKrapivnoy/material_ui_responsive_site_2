import { makeStyles, Typography } from '@material-ui/core';
import ImageBanner from '../../../../images/cultureCards/cultureBanner.jpeg';

const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundColor: '#ccc',
        height: '100%',
        backgroundImage: `url(${ImageBanner})`,
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

const CultureBanner = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.banner}>
                <div className={classes.bannerText}>
                    <Typography
                        variant='h3'
                        component='h1'
                        className={classes.bannerTitle}
                    >
                        Culture is the widening of the mind and of the spirit
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        className={classes.bannerSubtitle}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem illum, doloribus architecto accusamus libero
                        quasi repudiandae a ratione voluptatum. Laborum.
                    </Typography>
                    <Typography
                        variant='body1'
                        className={classes.bannerLinkText}
                    >
                        Continue reading…
                    </Typography>
                </div>
            </div>
        </>
    );
};

export default CultureBanner;
