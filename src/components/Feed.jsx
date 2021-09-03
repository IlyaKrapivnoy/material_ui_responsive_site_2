import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    feedTitle: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
        paddingBottom: 6,
    },
    post: {
        padding: '26px 0',
    },
    postTitle: {
        marginBottom: 10,
    },
    postText: {
        margin: '10px 0',
        fontSize: 16,
    },
    postAuthor: {
        color: '#1976d2',
    },
}));

const Feed = ({ posts }) => {
    const classes = useStyles();

    return (
        <>
            <Typography variant='h6' className={classes.feedTitle}>
                From the firehose
            </Typography>
            {posts.map((post) => (
                <div className={classes.post}>
                    <Typography variant='h5' className={classes.postTitle}>
                        {post.title}
                    </Typography>
                    <Typography variant='caption' className={classes.postInfo}>
                        {post.postDate} by{' '}
                        <span className={classes.postAuthor}>
                            {post.postAuthor}
                        </span>
                    </Typography>
                    <Typography variant='body2' className={classes.postText}>
                        {post.postText}
                    </Typography>
                </div>
            ))}
        </>
    );
};

export default Feed;
