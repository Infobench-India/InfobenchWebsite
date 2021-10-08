import React from 'react';
import AboutUs from './Components/BodyComponents/AboutUs';
import Contact from './Components/BodyComponents/contacts';
import Footer from './Components/BodyComponents/Footer';
import Post from './Components/BodyComponents/Post';
import HeaderComponents from './Components/HeaderComponents/HeaderComponents';

export function App() {
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

export default App;
