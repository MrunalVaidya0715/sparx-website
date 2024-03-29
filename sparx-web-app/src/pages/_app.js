import '@/styles/globals.css'
import Navbar from 'components/Navbar'
import ShadeLight from 'components/ShadeLight'
import ShadeLight2 from 'components/ShadeLight2'
import { Analytics } from '@vercel/analytics/react';
import Footer from 'components/Footer';
export default function App({ Component, pageProps }) {
  return (<>
    <Navbar/>
    
    <Component {...pageProps}/>
    <Footer/>
    <Analytics />
    
  
  </>)
}
