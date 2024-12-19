import { CardMedia, Link, Stack, Typography } from "@mui/material";
import { Styletext } from "../../components/styledtext/styletext";

const Hero = () => {
  return (
    <Stack 
      position={'relative'} 
      alignItems={'center'}
      justifyContent={'center'}
      >
      <CardMedia
        component="video"
        src="/herobackground.webm"
        autoPlay
        muted
        loop
        width={'100%'}
        height={'100%'}
        sx={{zIndex: '-1'}}
        />

      <Stack
        maxWidth={'640px'}
        width={'100%'}
        zIndex={'3'}
        p={'0 16px'}
        position={'absolute'}
        alignItems={'center'}
        justifyContent={'center'}
        textAlign={'center'}
        >
        <Stack >
          <Typography
            fontSize={'64px'}
            color="rgba(134,113,255)"
            >
            Privacy Driven
          </Typography>

          <Styletext text='Crypto Exchange' fontsize={'64px'} />
        </Stack>

        <Typography
          lineHeight={'2'}
          color="#8576da"
          fontSize={'20px'}
          >
          Trade BTC, ETH, MATIC, and 100+ other cryptocurrencies with seamless security and privacy. No sign-up or limits.
        </Typography>

        <Link 
          href='/' 
          sx={{
          textDecoration: 'none',
          fontSize: '20px',
          color: '#8576da',
          }}
          >
          Powered by our Veil utility token.
        </Link>

        <Link 
          href='/' 
          sx={{
          fontSize: '20px',
          textDecoration: 'underline',
          color: 'white',
          textUnderlineOffset: '0.375em',
          mt: '24px',
          mb: '8px',
          }}
          >
            Try the Exchange Now 

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{verticalAlign: 'middle'}}>
            <g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="none" stroke="currentColor" stroke-miterlimit="10">
              <line x1="2" y1="12" x2="15" y2="12">
              </line>
              <polygon points="15 17 15 7 22 12 15 17">
              </polygon>
            </g>
          </svg>
        </Link>
        
        <Stack direction={'row'} width={'100%'}>
          <Stack
            mt={'48px'}
            direction={'row'}
            width={'50%'}
            >
            <Stack
              mt={'16px'}
              p={'0 8px'}
              width={'100%'}
              >
              <Stack
                textAlign={'center'}
                p={'1rem'}
                borderRadius={'0.5rem'}
                border={'1px solid #343445'}
                >
                <Typography
                  color="#dedede"
                  mb={'8px'}
                  textTransform={'uppercase'}
                  fontSize={'14px'}
                  >
                Lifetime Volume Swapped
                </Typography>

                <Typography
                  fontSize={'24px'}
                  color="#8671ff"
                  >
                  $42,470,671
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            mt={'48px'}
            direction={'row'}
            width={'50%'}
            >
            <Stack
              mt={'16px'}
              p={'0 8px'}
              width={'100%'}
              >
              <Stack
                textAlign={'center'}
                p={'1rem'}
                borderRadius={'0.5rem'}
                border={'1px solid #343445'}
                >
                <Typography
                  color="#dedede"
                  mb={'8px'}
                  textTransform={'uppercase'}
                  fontSize={'14px'}
                  >
                Past 24-Hour Volume
                </Typography>

                <Typography
                  fontSize={'24px'}
                  color="#8671ff"
                  >
                  $75,073
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Hero;