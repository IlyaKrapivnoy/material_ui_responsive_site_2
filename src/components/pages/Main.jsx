import Banner from '../../components/Banner';
import Cards from '../../components/Cards';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContent from '../../components/MainContent';

const Main = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Cards />
            <MainContent />
            <Footer />
        </div>
    );
};

export default Main;
