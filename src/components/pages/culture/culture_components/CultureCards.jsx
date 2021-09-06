import { Grid, makeStyles } from '@material-ui/core';
import CultureCard from './CultureCard';
import CultureCardImg1 from '../../../../images/cultureCards/cultureCardImg-1.jpeg';
import CultureCardImg2 from '../../../../images/cultureCards/cultureCardImg-2.jpeg';
import CultureCardImg3 from '../../../../images/cultureCards/cultureCardImg-3.jpeg';
import CultureCardImg4 from '../../../../images/cultureCards/cultureCardImg-4.jpeg';
import CultureCardImg5 from '../../../../images/cultureCards/cultureCardImg-5.jpeg';
import CultureCardImg6 from '../../../../images/cultureCards/cultureCardImg-6.jpeg';
import CultureCardImg7 from '../../../../images/cultureCards/cultureCardImg-7.jpeg';
import CultureCardImg8 from '../../../../images/cultureCards/cultureCardImg-8.jpeg';
import CultureCardImg9 from '../../../../images/cultureCards/cultureCardImg-9.jpeg';
import CultureCardImg10 from '../../../../images/cultureCards/cultureCardImg-10.jpeg';
import CultureCardImg11 from '../../../../images/cultureCards/cultureCardImg-11.jpeg';
import CultureCardImg12 from '../../../../images/cultureCards/cultureCardImg-12.jpeg';

const useStyles = makeStyles((theme) => ({
    cardField: {
        margin: '60px 0',
    },
    cardRow: {},
}));

const CultureCards = () => {
    const classes = useStyles();

    return (
        <div className={classes.cardField}>
            <Grid container className={classes.cardRow}>
                <Grid item xs={3}>
                    <CultureCard img={CultureCardImg1} title='haha' />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard img={CultureCardImg2} title='mmmm' />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard img={CultureCardImg3} title='mmmm' />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard img={CultureCardImg4} title='mmmm' />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={3}>
                    <CultureCard img={CultureCardImg5} title='mmmm' />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard img={CultureCardImg6} title='mmmm' />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard img={CultureCardImg7} title='mmmm' />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard img={CultureCardImg8} title='mmmm' />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={3}>
                    <CultureCard img={CultureCardImg9} title='mmmm' />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard img={CultureCardImg10} title='mmmm' />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard img={CultureCardImg11} title='mmmm' />
                </Grid>
                <Grid item xs={3}>
                    <CultureCard img={CultureCardImg12} title='mmmm' />
                </Grid>
            </Grid>
        </div>
    );
};

export default CultureCards;
