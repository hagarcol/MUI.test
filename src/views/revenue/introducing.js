import { Stack, Typography } from "@mui/material";
import { Styletext } from "../../components/styledtext/styletext";
import { CustomButton } from "../../components/custombutton/custombutton";

const Introducing = () => {
  return (
    <Stack 
      position={'relative'} 
      alignItems={'center'}
      justifyContent={'center'}
      p={'200px 0 100px 0'}
      sx={{
        backgroundImage: "url('/image/tokenomics-bg.webp')",
        backgroundSize: "cover",
      }}
      >

      <Stack
        direction={{md: 'row', xs: 'column'}}
        maxWidth={'1272px'}
        width={'100%'}
        p={'0 16px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        >
        <Stack
          mt={'24px'}
          p={'0 12px'}
          width={{md: '636px', xs: '100%'}}
        >
            <Typography
              fontSize={'32px'}
              fontWeight={'700'}
              color="#8671ff"
              lineHeight={'0.9'}
              mb={'8px'}
            >
              Introducing our
              <Styletext 
                fontsize={'40px'} 
                text={'Revenue Share Program'}
              />
            </Typography>

            <Typography
              color="#DEDEDE"
              fontSize={'16px'}
              mb={'24px'}
            >
              Join our revenue-sharing program and earn a share of our exchange and token fee profits based on your $Veil Token ownership.
            </Typography>

            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'flex-start'}
              gap={'0.5rem'}
            >
              <CustomButton text={'About Token'} />

              <CustomButton text={'View Revshare Wallet'} />
            </Stack>
        </Stack>

        <Stack 
          mt={'24px'}
          p={'0 12px'}
          width={{md: '530px', xs: '100%'}}
          >
          <Stack
            borderRadius={'0.5rem'}
            border={'1px solid #343445'}
            >
            <Stack
              sx={{
                backgroundColor: '#2d2d39',
                borderRadius: '0.5rem 0.5rem 0 0',
                color: 'white',
                fontSize: '24px',
                fontWeight: '700',
                alignItems: 'center',
                p: '8px 16px'
              }}
              >
              Total Paid Out So Far
            </Stack>

            <Stack
              sx={{
                backgroundColor: '#202029',
                p:'1.5rem 3rem',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              >
              <Typography
                color="#8671ff"
                fontSize={'28px'}
                fontWeight={'700'}
                mb={'8px'}
                >
                79.71 ETH
              </Typography>

              <Typography
                color="#ffffff80"
                fontSize={'20px'}
                fontWeight={'700'}
                >
                $308.9K USD
              </Typography>
            </Stack>

            <Stack
              p={'8px 16px'}
              direction={'row'}
              alignItems={'center'}
              justifyContent={'center'}
              sx={{
                backgroundColor: '#202029',
                color: "hsla(0,0%,100%,.5)",                
                border: '1px solid #343445',
                borderRadius: '0 0 0.5rem 0.5rem',
                boxShadow: '0px 4px 0px 0px #343445,0px 4px 10px 0px rgba(0,0,0,.25)',          
              }}
              >
              <Typography
              fontSize={'16px'}
              mr={'4px'}
                >
                LAST PAYOUT:
              </Typography>

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="ms-2">
                <g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="0.5" y1="8" x2="15.5" y2="8">
                  </line>
                  <polyline points="10.5 3 15.5 8 10.5 13">
                  </polyline>
                </g>
              </svg>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Introducing;