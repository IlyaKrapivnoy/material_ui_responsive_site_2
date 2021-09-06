import {
    Button,
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography,
} from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    feedWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '520px',
    },
    feedUsers: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    userCard: {
        width: 275,
        height: 160,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 20,
    },

    title: {
        fontSize: 14,
    },

    userCardButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 12,
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
                            <Typography color='textSecondary' gutterBottom>
                                Email: {user.email}
                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions className={classes.userCardButtons}>
                        <Button size='small'>CHECK?</Button>
                        <Button
                            size='small'
                            onClick={() => handleDelete(user.id)}
                        >
                            Delete
                        </Button>
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
