import { makeStyles, Typography } from '@material-ui/core';
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
    postTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    postTitle: {
        marginBottom: 10,
    },
    postText: {
        margin: '10px 0',
        fontSize: 16,
    },
}));

const Feed = () => {
    const [feedPosts, setFeedPosts] = useState([]);
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
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

    const displayPosts = feedPosts
        .slice(pagesVisited, pagesVisited + postsPerPage)
        .map((post) => {
            return (
                <div className={classes.post} key={post.id}>
                    <div className={classes.postTop}>
                        <Typography variant='h5' className={classes.postTitle}>
                            {post.name}
                        </Typography>
                        <Typography
                            variant='caption'
                            className={classes.postInfo}
                        >
                            {post.email}
                        </Typography>
                    </div>
                    <div className={classes.postBottom}>
                        <Typography
                            variant='body2'
                            className={classes.postText}
                        >
                            {post.body}
                        </Typography>
                    </div>
                </div>
            );
        });

    const pageCount = Math.ceil(feedPosts.length / postsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

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
