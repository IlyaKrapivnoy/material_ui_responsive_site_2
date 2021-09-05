import { CircularProgress, makeStyles, Typography } from '@material-ui/core';
import { posts } from '../dummyData';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    feed: {
        padding: 20,
    },
    feedTitle: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
        paddingBottom: 6,
    },
    feedWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '720px',
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
    loader: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100wv',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const Feed = () => {
    const classes = useStyles();
    const [pageNumber, setPageNumber] = useState(0);

    const postsPerPage = 7;
    const pagesVisited = pageNumber * postsPerPage;

    const displayPosts = posts
        .slice(pagesVisited, pagesVisited + postsPerPage)
        .map((post) => {
            return (
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
            );
        });

    const pageCount = Math.ceil(posts.length / postsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    if (posts.length === 0) {
        return (
            <div className='loader'>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className={classes.feed}>
            <Typography variant='h6' className={classes.feedTitle}>
                From the firehose
            </Typography>
            <div className={classes.feedWrapper}>
                <div className={classes.feedPosts}>{displayPosts}</div>
                <div className={classes.feedPagination}>
                    <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'paginationBtns'}
                        previousClassName={'previousBtn'}
                        nextClassName={'nextBtn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Feed;
