import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import CultureCardImg from '../../../../images/cultureCardImg.jpeg';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 180,
    },
    cardBtns: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

const CultureCard = () => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={CultureCardImg}
                        title='Contemplative Reptile'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            Japanese Culture
                        </Typography>
                        <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                        >
                            Japanese culture is ancient and is filled with rites
                            and traditions to honor the family. Because Japan is
                            an island country, it was able to moderate the
                            influence of other cultures for centuries.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardBtns}>
                    <Button size='small' color='primary'>
                        Like
                    </Button>
                    <Button size='small' color='primary'>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default CultureCard;
