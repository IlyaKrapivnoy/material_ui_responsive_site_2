import { Grid, makeStyles } from '@material-ui/core';
import CultureCard from './CultureCard';

const useStyles = makeStyles((theme) => ({
    cardField: {
        margin: '60px 0',
    },
}));

const CultureCards = () => {
    const classes = useStyles();

    return (
        <div className={classes.cardField}>
            <Grid container>
                <Grid item xs={3}>
                    <CultureCard />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={3}>
                    <CultureCard />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={3}>
                    <CultureCard />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard />
                </Grid>
            </Grid>
        </div>
    );
};

export default CultureCards;
