import { Container, Grid, makeStyles } from '@material-ui/core';
import Feed from './Feed';
import Sidebar from '../../../partials/Sidebar';

const useStyles = makeStyles((theme) => ({
    mainContent: {
        margin: '0 -20px',
    },
}));

const MainContent = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth='lg'>
                <div className={classes.mainContent}>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <Feed className={classes.feed} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Sidebar className={classes.sidebar} />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
};

export default MainContent;
