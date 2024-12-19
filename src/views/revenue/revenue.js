import { Navbar } from '../../components/navbar'
import Introducing from './introducing'
import { Countdowntimer } from '../../components/countdown'
import Share from './sharing'
import Income from './income'
import Monthly from './monthly'
import { Footer } from '../../components/footer'


export const Revenue = () => {
    return (
      <>
        <Navbar />
        <Introducing />
        <Countdowntimer />
        <Share />
        <Income />
        <Monthly />
        <Footer />
      </>
    )
}