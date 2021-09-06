import { Container } from '@material-ui/core';
import HeaderTop from './header_partials/HeaderTop';
import HeaderBottom from './header_partials/HeaderBottom';

const Header = () => {
    return (
        <Container maxWidth='lg'>
            <div className='header'>
                <HeaderTop />
                <HeaderBottom />
            </div>
        </Container>
    );
};

export default Header;
