import { Container } from '@material-ui/core';
import CultureBanner from './culture_components/CultureBanner';
import CultureCards from './culture_components/CultureCards';

const Culture = () => {
    return (
        <div>
            <Container maxWidth='lg'>
                <CultureBanner />
                <CultureCards />
            </Container>
        </div>
    );
};

export default Culture;
