import {
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography,
} from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import axios from 'axios';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
    feedWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '420px',
    },
    feedUsers: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    userCard: {
        width: 275,
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },

    title: {
        fontSize: 14,
    },

    userCardIcon: {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    closeIcon: {
        cursor: 'pointer',
    },
}));

const CultureCardItem = () => {
    const [feedUsers, setFeedUsers] = useState([]);
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res);
                setFeedUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const classes = useStyles();
    const [userNumber, setUserNumber] = useState(0);

    const usersPerPage = 6;
    const pagesVisited = userNumber * usersPerPage;

    const handleDelete = (id) => {
        const newUsers = feedUsers.filter((user) => user.id !== id);
        setFeedUsers(newUsers);
    };

    const displayPosts = feedUsers
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user) => {
            return (
                <Card className={classes.userCard}>
                    <CardContent>
                        <div className={classes.title}>
                            <Typography color='textSecondary' gutterBottom>
                                Name: {user.name}
                            </Typography>
                            <Typography
                                color='textSecondary'
                                gutterBottom
                                style={{ fontSize: 12, color: '#000' }}
                            >
                                Email: {user.email}
                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions className={classes.userCardIcon}>
                        <HighlightOffIcon
                            className={classes.closeIcon}
                            onClick={() => handleDelete(user.id)}
                        />
                    </CardActions>
                </Card>
            );
        });

    const pageCount = Math.ceil(feedUsers.length / usersPerPage);

    const changePage = ({ selected }) => {
        setUserNumber(selected);
    };

    return (
        <div className={classes.feed}>
            <div className={classes.feedWrapper}>
                <div className={classes.feedUsers}>{displayPosts}</div>
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

export default CultureCardItem;
