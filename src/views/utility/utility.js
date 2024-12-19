import { Navbar } from '../../components/navbar'
import Introduction from './introduction'
import Tokenstate from './tokenstate'
import Breakdown from './breakdown'
import { Footer } from '../../components/footer'
import { Countdowntimer } from '../../components/countdown'

export const Utility = () => {
    return (
      <>
        <Navbar />
        <Introduction />
        <Tokenstate />
        <Breakdown />
        <Countdowntimer />
        <Footer />
      </>
    )
}