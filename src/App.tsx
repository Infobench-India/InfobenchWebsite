import './App.css'
import HeaderComponents from './Components/HeaderComponents/HeaderComponents';
import AboutUs from './Components/BodyComponents/AboutUs';
import Post from './Components/BodyComponents/Post';
import Contact from './Components/BodyComponents/contact';
import Footer from './Components/BodyComponents/Footer';


export default function App() {

    return (
        <div>
            <HeaderComponents />
            <AboutUs />
            <Post />
            <Contact />
            <Footer />

        </div>
    );
}

