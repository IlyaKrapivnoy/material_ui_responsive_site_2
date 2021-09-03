import { makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        padding: 20,
    },
    paper: {
        background: '#eee',
        padding: 16,
    },
    paperTitle: {
        marginBottom: 10,
    },
    paperText: {
        fontSize: 16,
        lineHeight: '22px',
    },
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
            <Paper className={classes.paper}>
                <Typography variant='h6' className={classes.paperTitle}>
                    About
                </Typography>
                <Typography variant='body' className={classes.paperText}>
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis
                    consectetur purus sit amet fermentum. Aenean lacinia
                    bibendum nulla sed consectetur.
                </Typography>
            </Paper>
        </div>
    );
};

export default Sidebar;
