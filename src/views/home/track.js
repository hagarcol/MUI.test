import { Button, Stack, Typography } from "@mui/material";
import { Styletext } from "../../components/styledtext/styletext";
import { Txfield } from "../../components/txfield";

const Track = () => {

  return (
    <Stack
      sx={{
        backgroundColor: '#16161c',
      }}
      textAlign={'center'}
      >
      <Stack
        maxWidth={'960px'}
        width={'100%'}
        my={'48px'}
        p={'48px 16px'}
        mx={'auto'}
        >
        <Stack mb={'48px'}>
          <Stack 
            alignItems={'center'}
            >
            <Styletext 
              fontsize={'40px'}
              text={'Track your Order'}
              />
          </Stack>

          <Typography
            fontSize={'16px'}
            color="#8671ff"
            >
            Already have an order number? Check the status of your order
          </Typography>
        </Stack>

        <Stack 
        p={'0 1rem'}
        maxWidth={'720px'}
        width={'100%'}
        mx={'auto'}
          >
          <Stack
            borderRadius={'0.5rem'}
            border={'1px solid #343445'}
            >
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              sx={{
                backgroundColor: '#202029',
                p:'1.5rem',
                borderRadius: '0 0 0.5rem 0.5rem',
                boxShadow: '0px 4px 0px 0px #343445,0px 4px 10px 0px rgba(0,0,0,.25)',
                alignItems: 'center'
              }}
              >
              <Txfield 
                width={'70%'}
                backcolor={'#16161c'}
                placeholder={'#6PCF012721'}
                />

              <Button 
                variant="contained"
                sx={{
                  color: 'white',
                  p: '16px 24px',
                  ml: '16px',
                  borderColor: '#8671ff',
                  backgroundColor: 'rgba(134,113,255,.8)', 
                  borderRadius: '0.5rem',
                  textTransform: 'none',
                  ':hover': {
                    backgroundColor: '#8671ff',
                    borderColor: '#8671ff',
                  }
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="me-2">
                  <g fill="currentColor">
                    <path d="M15.707,13.293L13,10.586c0.63-1.05,1-2.275,1-3.586c0-3.86-3.141-7-7-7S0,3.14,0,7s3.141,7,7,7 c1.312,0,2.536-0.369,3.586-1l2.707,2.707C13.488,15.902,13.744,16,14,16s0.512-0.098,0.707-0.293l1-1 C16.098,14.316,16.098,13.684,15.707,13.293z M7,12c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S9.761,12,7,12z">
                    </path>
                  </g>
                </svg>

                <Typography
                  fontSize= {'16px'}
                  fontWeight= {'700'}    
                  ml={'4px'}          
                  >
                  Track Order
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Track;