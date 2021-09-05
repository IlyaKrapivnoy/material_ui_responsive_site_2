import { Link, makeStyles, Paper, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { links } from '../dummyData';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        padding: 20,
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    paper: {
        background: '#eee',
        padding: 16,
        [theme.breakpoints.down('sm')]: {
            width: '45%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
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
        [theme.breakpoints.down('xs')]: {
            margin: '22px 0',
        },
    },
    archiveList: {
        [theme.breakpoints.down('sm')]: {
            height: 120,
            minWidth: 140,
            overflowY: 'scroll',
        },
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
    socials: {
        [theme.breakpoints.down('sm')]: {
            margin: '32px 0',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '22px 0',
        },
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
    '@global': {
        '*::-webkit-scrollbar': {
            width: '4px',
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#1976d2',
            outline: '3px solid #dadada',
        },
    },
}));

const Sidebar = () => {
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
                <div className={classes.archiveList}>
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
