import { Container, Grid, makeStyles } from '@material-ui/core';
import Feed from './Feed';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({}));

const MainContent = ({ posts }) => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={9}>
                        <Feed className={classes.feed} posts={posts} />
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
