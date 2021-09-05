import { makeStyles, Typography } from '@material-ui/core';
import { posts } from '../dummyData';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
}));

const Feed = () => {
    const [feedPosts, setFeedPosts] = useState([]);
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res);
                setFeedPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const classes = useStyles();
    const [pageNumber, setPageNumber] = useState(0);

    const postsPerPage = 7;
    const pagesVisited = pageNumber * postsPerPage;

    const displayUsers = feedPosts
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
                        {post.body}
                    </Typography>
                </div>
            );
        });

    const pageCount = Math.ceil(posts.length / postsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className={classes.feed}>
            <Typography variant='h6' className={classes.feedTitle}>
                From the firehose
            </Typography>
            <div className={classes.feedWrapper}>
                <div className={classes.feedPosts}>{displayUsers}</div>
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
