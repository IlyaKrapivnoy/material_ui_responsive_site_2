import { Link, makeStyles, Paper, Typography } from '@material-ui/core';

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
    archives: {
        margin: '32px 0',
    },
    archiveTitle: {
        marginBottom: 8,
    },
    linksList: {
        display: 'flex',
        flexDirection: 'column',
    },
    linksListItem: {
        padding: '3px 0',
        color: '#1976d2',
    },
}));

const Sidebar = ({ links }) => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

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

            <div className={classes.archives}>
                <Typography variant='h6' className={classes.archiveTitle}>
                    Archives
                </Typography>
                {links.map((link) => (
                    <Typography className={classes.linksList}>
                        <Link
                            href='#'
                            onClick={preventDefault}
                            className={classes.linksListItem}
                        >
                            {link.month} {link.year}
                        </Link>
                    </Typography>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
