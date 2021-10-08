import './App.css'
import HeaderComponents from './Components/HeaderComponents/HeaderComponents';
import AboutUs from './Components/BodyComponents/AboutUs';
import Post from './Components/BodyComponents/Post';
import Contacts from './Components/BodyComponents/contacts';
import Customer from './Components/BodyComponents/Customer';
import Footer from './Components/BodyComponents/Footer';

export default function App() {

    return (
        <div>
            <HeaderComponents />
            <AboutUs />
            <Post />
             <Contacts /> 
            <Customer />
            <Footer />

        </div>
    );
}

