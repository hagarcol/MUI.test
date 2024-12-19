import { Navbar } from '../../components/navbar'
import Mainpart from './mainpart'
import { Footer } from '../../components/footer'
import { Stack } from '@mui/material'


export const Faqs = () => {
    return (
      <Stack 
        bgcolor={'#16161c'} 
        height={'100vh'}
        >
        <Navbar />
        <Mainpart />
        <Footer />
      </Stack>
    )
}