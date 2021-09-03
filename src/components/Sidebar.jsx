import { Link, makeStyles, Paper, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

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
    sidebarTitle: {
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
    socialList: {
        display: 'flex',
        flexDirection: 'column',
    },
    socialListItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '4px 0',
        color: '#1976d2',
    },
    socialIcon: {
        marginRight: 10,
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
                <Typography variant='h6' className={classes.sidebarTitle}>
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

            <div className={classes.socials}>
                <Typography variant='h6' className={classes.sidebarTitle}>
                    Socials
                </Typography>
                <Typography className={classes.socialList}>
                    <Link
                        href='#'
                        onClick={preventDefault}
                        className={classes.socialListItem}
                    >
                        <GitHubIcon className={classes.socialIcon} />
                        GitHub
                    </Link>
                    <Link
                        href='#'
                        onClick={preventDefault}
                        className={classes.socialListItem}
                    >
                        <TwitterIcon className={classes.socialIcon} />
                        Twitter
                    </Link>
                    <Link
                        href='#'
                        onClick={preventDefault}
                        className={classes.socialListItem}
                    >
                        <FacebookIcon className={classes.socialIcon} />
                        Facebook
                    </Link>
                </Typography>
            </div>
        </div>
    );
};

export default Sidebar;
