import Banner from './components/Banner';
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';

let menuList = [
    {
        id: 1,
        menuItem: 'Technology',
    },
    {
        id: 2,
        menuItem: 'Design',
    },
    {
        id: 3,
        menuItem: 'Culture',
    },
    {
        id: 4,
        menuItem: 'Business',
    },
    {
        id: 5,
        menuItem: 'Politics',
    },
    {
        id: 6,
        menuItem: 'Opinion',
    },
    {
        id: 7,
        menuItem: 'Science',
    },
    {
        id: 8,
        menuItem: 'Health',
    },
    {
        id: 9,
        menuItem: 'Style',
    },
    {
        id: 10,
        menuItem: 'Travel',
    },
];

function App() {
    return (
        <div>
            <Header menuList={menuList} />
            <Banner />
            <Cards />
            <Footer />
        </div>
    );
}

export default App;
