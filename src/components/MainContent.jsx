import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Feed from './Feed';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({}));

const MainContent = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={9}>
                        <Feed className={classes.feed} />
                    </Grid>
                    <Grid item xs={3}>
                        <Sidebar className={classes.sidebar} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default MainContent;
