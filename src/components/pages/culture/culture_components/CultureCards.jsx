import { makeStyles, Typography } from '@material-ui/core';
import CultureCardItem from './CultureCardItem';

const useStyles = makeStyles((theme) => ({
    cardField: {
        margin: '60px 0',
    },
    feedTitle: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
        paddingBottom: 6,
    },
}));

const CultureCards = () => {
    const classes = useStyles();

    return (
        <div className={classes.cardField}>
            <Typography variant='h6' className={classes.feedTitle}>
                Culture Centers Contacts
            </Typography>
            <CultureCardItem />
        </div>
    );
};

export default CultureCards;
