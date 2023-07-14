import React from "react"
import Cursor from '../components/cursor/cursor'
import '../styles/globals.css'
import Layout from './../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  const [isMenuHidden, setIsMenuHidden]= React.useState(false)
  React.useEffect(() => {
    const handleScroll = event => {
      if(window.scrollY >= 40){
        console.log('window.scrollY', window.scrollY);
        setIsMenuHidden(true);
      }
      if(window.scrollY < 40){
        console.log('window.scrollY', window.scrollY);
        setIsMenuHidden(false);
      }
      
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <Layout IsMenuHidden={isMenuHidden}>
  <div className="hidden lg:block"><Cursor/></div>
  <Component {...pageProps} /></Layout>
}

export default MyApp
