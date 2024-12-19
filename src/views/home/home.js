import { Navbar } from '../../components/navbar'
import Hero from './hero'
import Security from './security'
import Exchange from './exchange'
import Recent from './recent'
import Support from './support'
import Latest from './latest'
import Track from './track'
import { Footer } from '../../components/footer'

export const Home = () => {
    return (
      <>
        <Navbar />
        <Hero />
        <Security />
        <Exchange />
        <Recent />
        <Support />
        <Latest />
        <Track />
        <Footer />
      </>
    )
}