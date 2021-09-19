// import Main from './components/pages/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/partials/header/Header';
import Footer from './components/partials/Footer';
import Main from './components/pages/main/Main';
import Culture from './components/pages/culture/Culture';
import Business from './components/pages/business/Business';
import BusinessPosts from './components/pages/business_posts/BusinessPosts';
import Opinion from './components/pages/opinion/Opinion';
import Science from './components/pages/science/Science';
import Health from './components/pages/health/Health';
import Style from './components/pages/style/Style';
import Travel from './components/pages/travel/Travel';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Main />
                    </Route>
                    <Route path='/culture'>
                        <Culture />
                    </Route>
                    <Route path='/business'>
                        <Business />
                    </Route>
                    <Route path='/business-posts'>
                        <BusinessPosts />
                    </Route>
                    <Route path='/opinion'>
                        <Opinion />
                    </Route>
                    <Route path='/science'>
                        <Science />
                    </Route>
                    <Route path='/health'>
                        <Health />
                    </Route>
                    <Route path='/style'>
                        <Style />
                    </Route>
                    <Route path='/travel'>
                        <Travel />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
