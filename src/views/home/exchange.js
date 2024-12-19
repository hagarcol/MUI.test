import { Button, Stack, Typography, Box, Link, Checkbox } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Styletext } from "../../components/styledtext/styletext";
import { Exchangetool } from "../../components/exchangetool/exchangetool";
import { Txfield } from "../../components/txfield";

const Exchange = () => {

  return (
    <Stack sx={{ background: 'linear-gradient(180deg,#16161c,#202029)' }}>
      <Stack
        maxWidth={'960px'}
        width={'100%'}
        m={'3rem auto'}
        p={'3rem 1rem'}
        textAlign={'center'}
        >
        <Stack 
          mb={'3rem'} 
          alignItems={'center'}
          >
          <Styletext
            text={'Exchange Crypto'}
            fontsize={'40px'}
            />
        </Stack>

        <Stack
          mb={'1.5rem'}
          mx={'-0.75rem'}
          zIndex={'2'}
          direction={'row'}
          position={'relative'}
          >
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'rgba(52,52,69,1)',
              color: 'white',
              mt: '3rem',
              zIndex: '3',
              minWidth: '50px',
              height: '50px',
              borderRadius: '50%',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              position: 'absolute'
            }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <g fill="currentColor">
                <path d="M10.787,8.09A.5.5,0,0,0,10,8.5V11H3a1,1,0,0,0,0,2h7v2.5a.5.5,0,0,0,.787.41l5-3.5a.5.5,0,0,0,0-.82Z">
                </path>
                <path d="M5.5,8A.5.5,0,0,0,6,7.5V5h7a1,1,0,0,0,0-2H6V.5A.5.5,0,0,0,5.213.09l-5,3.5a.5.5,0,0,0,0,.82l5,3.5A.5.5,0,0,0,5.5,8Z">
                </path>
              </g>
            </svg>
          </Button>

          <Exchangetool
            what={'You Send'}
            icon={'/image/bitcoin.svg'}
            firsttext={'Bitcoin'}
            secondtext={'BTC'}
            />

          <Exchangetool
            what={'You Recieve'}
            icon={'/image/ethereum.svg'}
            firsttext={'Ethereum'}
            secondtext={'ETH'}
            />
        </Stack>

        <Stack
          borderRadius={'0.5rem'}
          border={'1px solid #343445'}
          >
          <Stack
            sx={{
              backgroundColor: '#2d2d39',
              borderRadius: '0.5rem 0.5rem 0 0',
              p: '16px'
            }}
            >
            <Typography
              fontSize={'20px'}
              color="white"
              fontWeight={'700'}
              textAlign={'left'}
              >
              Receiving Wallet Address
            </Typography>
          </Stack>

          <Stack
            sx={{
              backgroundColor: '#202029',
              p: '1.5rem',
              borderRadius: '0 0 0.5rem 0.5rem',
              boxShadow: '0px 4px 0px 0px #343445,0px 4px 10px 0px rgba(0,0,0,.25)'
            }}
            >
            <Txfield
              width={'100%'}
              placeholder={'Enter Wallet Adress'}
              backcolor={'rgba(52,52,69,1)'}
              />
          </Stack>
        </Stack>

        <Stack
          my={'24px'}
          direction={'row'}
          alignItems={'center'}
          >
          <Checkbox
            disableRipple
            icon={
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  border: "1px solid white",
                  borderRadius: "4px",
                  backgroundColor: "transparent",
                }}
                />
            }
            checkedIcon={
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  border: "1px solid white",
                  borderRadius: "4px",
                  backgroundColor: "rgba(134,113,255,1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                >
                <CheckIcon sx={{ color: "white", fontSize: 18 }} />
              </Box>
            }
            />

          <Typography
            color="white"
            ml={'0.5rem'}
            fontSize={'16px'}
            sx={{
              opacity: '0.75'
            }}
            >
            By using the site and creating an exchange, you agree to our
          </Typography>

          <Link
            color="rgba(134,113,255,1)"
            sx={{
              textDecoration: 'none'
            }}
            ml={'4px'}
            >
            Terms of Services
          </Link>
        </Stack>

        <Button
          variant="contained"
          sx={{
            textTransform: 'none',
            color: 'white',
            bgcolor: 'rgba(134,113,255,.8)',
            alignItems: 'center',
            justifyContent: 'center',
            p: '16px 12px',
            borderRadius: '8px',
          }}
          >
          <Box
            sx={{
              "@keyframes rotate": {
                "0%": { transform: "rotate(0deg)", },
                "80%": { transform: "rotate(360deg)", },
                "100%": { transform: "rotate(360deg)" },
              },
              animation: "rotate 2s linear infinite",
              display: "inline-block",
            }}
            >
            <Stack>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="me-2" >
                <g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="none" stroke="currentColor" stroke-miterlimit="10">
                  <polyline points="7.929 18.659 2.237 17.073 2.966 22.87">
                  </polyline>
                  <path d="M23,12A11,11,0,0,1,2.237,17.073" stroke-linecap="butt">
                  </path>
                  <polyline points="16.071 5.341 21.763 6.927 21.034 1.13">
                  </polyline>
                  <path d="M1,12A11,11,0,0,1,21.763,6.927" stroke-linecap="butt">
                  </path>
                </g>
              </svg>
            </Stack>
          </Box>

          <Typography
            fontSize={'20px'}
            fontWeight={'700'}
            ml={'8px'}
            >
            Exchange
          </Typography>
        </Button>

        <Stack
          direction={'row'}
          m={'24px 0 16px 0'}
          textAlign={'center'}
          justifyContent={'center'}
          >
          <Typography
            color="white"
            ml={'0.5rem'}
            fontSize={'16px'}
            sx={{
              opacity: '0.75'
            }}
            >
            Already have an order number?
          </Typography>

          <Link
            color="rgba(134,113,255,1)"
            ml={'4px'}
            >
            Track your order
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Exchange;