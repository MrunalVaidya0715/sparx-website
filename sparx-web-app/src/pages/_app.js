import '@/styles/globals.css'
import Navbar from 'components/Navbar'
import ShadeLight from 'components/ShadeLight'
import ShadeLight2 from 'components/ShadeLight2'

export default function App({ Component, pageProps }) {
  return (<>
    <Navbar/>
    
    <Component {...pageProps}/>
  
  </>)
}
