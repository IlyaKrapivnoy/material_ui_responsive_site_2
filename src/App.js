import Banner from './components/Banner';
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

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

const posts = [
    {
        id: 1,
        title: 'Post Title',
        postDate: 'Sep 1, 2021',
        postAuthor: 'Admin',
        postText:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line',
    },
    {
        id: 2,
        title: 'Post Title',
        postDate: 'Sep 2, 2021',
        postAuthor: 'Hannah M',
        postText:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    },
    {
        id: 3,
        title: 'Post Title',
        postDate: 'Sep 6, 2021',
        postAuthor: 'Scott J. Scott',
        postText:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
    },
    {
        id: 4,
        title: 'Post Title',
        postDate: 'Sep 14, 2021',
        postAuthor: 'Admin',
        postText:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
    },
    {
        id: 5,
        title: 'Post Title',
        postDate: 'Sep 16, 2021',
        postAuthor: 'Bart S',
        postText:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line',
    },
];

function App() {
    return (
        <div>
            <Header menuList={menuList} />
            <Banner />
            <Cards />
            <MainContent posts={posts} />
            <Footer />
        </div>
    );
}

export default App;
