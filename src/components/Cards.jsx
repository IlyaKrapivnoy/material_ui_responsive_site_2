import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    makeStyles,
    Container,
} from '@material-ui/core';
import CardImage1 from '../images/card1.jpeg';
import CardImage2 from '../images/card2.jpeg';
import SmallCard from '../images/smallCard.jpeg';

const useStyles = makeStyles((theme) => ({
    cards: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 26,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    card: {
        display: 'flex',
        margin: '16px 16px 16px 0',
        width: '50%',
        '&:last-child': { marginRight: 0 },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '16px 0',
        },
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${SmallCard})`,
            backgroundPosition: 'center',
        },
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    coverCard1: {
        backgroundImage: `url(${CardImage1})`,
        width: '40%',
        [theme.breakpoints.down('xs')]: {
            backgroundImage: 'none',
        },
    },
    coverCard2: {
        backgroundImage: `url(${CardImage2})`,
        width: '40%',
        [theme.breakpoints.down('xs')]: {
            backgroundImage: 'none',
        },
    },
    cardLink: {
        color: '#1976D2',
        cursor: 'pointer',
        marginTop: 10,
    },
}));

const Cards = () => {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth='lg'>
                <div className={classes.cards}>
                    <Card className={classes.card}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component='h5' variant='h5'>
                                    Featured post
                                </Typography>
                                <Typography
                                    variant='subtitle1'
                                    color='textSecondary'
                                >
                                    Nov 12
                                </Typography>
                                <Typography variant='subtitle1'>
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content.
                                </Typography>
                                <Typography
                                    variant='subtitle1'
                                    className={classes.cardLink}
                                >
                                    Continue reading...
                                </Typography>
                            </CardContent>
                        </div>
                        <CardMedia
                            className={classes.coverCard1}
                            title='Live from space album cover'
                        />
                    </Card>
                    <Card className={classes.card}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component='h5' variant='h5'>
                                    Post title
                                </Typography>
                                <Typography
                                    variant='subtitle1'
                                    color='textSecondary'
                                >
                                    Nov 11
                                </Typography>
                                <Typography variant='subtitle1'>
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content.
                                </Typography>
                                <Typography
                                    variant='subtitle1'
                                    className={classes.cardLink}
                                >
                                    Continue reading...
                                </Typography>
                            </CardContent>
                        </div>
                        <CardMedia
                            className={classes.coverCard2}
                            title='Live from space album cover'
                        />
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default Cards;
