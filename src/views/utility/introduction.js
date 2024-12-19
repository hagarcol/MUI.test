import { Stack, Typography, Link } from "@mui/material";
import { Styletext } from "../../components/styledtext/styletext";
import { CustomButton } from "../../components/custombutton/custombutton";

const Introduction = () => {
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
        direction={{ md: 'row', xs: 'column'}}
        maxWidth={'1272px'}
        width={'100%'}
        p={'0 16px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        >
        <Stack
          mr={'48px'}
          p={'0 12px'}
          width={{md:'530px', xs:'100%'}}
        >
            <Typography
              fontSize={'64px'}
              fontWeight={'700'}
              color="#8671ff"
              lineHeight={'0.9'}
              mb={'8px'}
            >
              <Styletext 
                fontsize={'64px'} 
                text={'Introducting'}
              />
              $Veil Token
            </Typography>

            <Typography
              color="white"
              fontSize={'20px'}
              lineHeight={'2'}
              mb={'24px'}
            >
              Introducing our utility token to support the Veil exchange platform.
            </Typography>

            <Typography
              color="white"
              fontSize={'20px'}
              lineHeight={'2'}
              mb={'24px'}
            >
              Contract: <br/> 0xb244b3574a5627849fca2057e3854340def63071
            </Typography>

            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'flex-start'}
            >
              <CustomButton text={'Buy Token'} />

              <Link 
                sx={{
                    color: 'white',
                    p: '8px 24px',
                    fontSize: '16px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textUnderlineOffset: '0.375em',
                    ':hover': {
                      color: '#8671ff'
                    }
                  }}
                >
                  View Chart
                </Link>
            </Stack>
        </Stack>

        <Stack
          p={'0 12px'}
          width={{md:'530px', xs:'100%'}}
          alignItems={'center'}
          >
            <Styletext 
              fontsize={'40px'}
              text={'$Veil Tokenomics'}
              />

            <Stack
              color={'#dedede'}
              fontWeight={'400'}
              width={'100%'}
              >
              <Stack
                p={'16px'}
                bgcolor={'#16161C'}
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                borderBottom={'1px solid #343445'}
                >
                <Stack 
                  direction={'row'}
                  alignItems={'center'}
                  >
                  Token Taxes:
                  <Typography
                    fontSize={'17.5px'}
                    sx={{opacity: '0.5'}}
                    >
                    (Buy/Sell)
                  </Typography>
                </Stack>

                <Typography
                  fontSize={'20px'}
                  fontWeight={'700'}
                  color="#8671ff"
                  >
                  5%/5%
                </Typography>
              </Stack>

              <Stack
                p={'16px'}
                bgcolor={'#16161C'}
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                borderBottom={'1px solid #343445'}
                >
                Total Supply:

                <Typography
                  fontSize={'20px'}
                  fontWeight={'700'}
                  color="#8671ff"
                  >
                  1,000,000,000
                </Typography>
              </Stack>

              <Stack
                p={'16px'}
                bgcolor={'#16161C'}
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                borderBottom={'1px solid #343445'}
                >
                CEX Allocation:

                <Typography
                  fontSize={'20px'}
                  fontWeight={'700'}
                  color="#8671ff"
                  >
                  80,000,000
                </Typography>
              </Stack>
            </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Introduction;