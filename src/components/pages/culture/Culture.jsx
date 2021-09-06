import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import CultureBanner from './culture_components/CultureBanner';

const useStyles = makeStyles((theme) => ({}));

const Culture = () => {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth='lg'>
                <CultureBanner />
            </Container>
        </div>
    );
};

export default Culture;
