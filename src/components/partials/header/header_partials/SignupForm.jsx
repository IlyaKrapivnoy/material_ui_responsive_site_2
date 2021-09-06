import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 240,
        width: 200,
    },
    signupTitle: {
        textAlign: 'right',
    },
    formInput: {
        marginBottom: 20,
        width: '100%',
    },
}));

const SignupForm = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const handleChange = (event) => {
        setName(console.log(event.target.value));
    };

    return (
        <form className={classes.form} noValidate autoComplete='off'>
            <Typography
                variant='h4'
                className={classes.signupTitle}
                gutterBottom
            >
                Welcome
            </Typography>
            <div>
                <TextField
                    className={classes.formInput}
                    id='username'
                    placeholder='password'
                    type='password'
                    value={name}
                    onChange={handleChange}
                />
                <TextField
                    className={classes.formInput}
                    id='email'
                    placeholder='email'
                    type='email'
                    value={name}
                    onChange={handleChange}
                />
            </div>
            <Button variant='contained' color='primary'>
                Sign Up
            </Button>
        </form>
    );
};

export default SignupForm;
