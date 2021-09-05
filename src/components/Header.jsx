import { Container } from '@material-ui/core';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
import { menuList } from '../dummyData';

const Header = () => {
    return (
        <Container maxWidth='lg'>
            <div className='header'>
                <HeaderTop menuList={menuList} />
                <HeaderBottom menuList={menuList} />
            </div>
        </Container>
    );
};

export default Header;
