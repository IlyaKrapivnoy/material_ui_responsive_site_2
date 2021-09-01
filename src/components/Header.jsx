import { Container } from '@material-ui/core';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

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
