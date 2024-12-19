import { Stack, Typography } from "@mui/material";
import { Styletext } from "../../components/styledtext/styletext";

const Recent = () => {
  return (
    <Stack
      bgcolor={'#16161c'}
      >
      <Stack       
        mt={'48px'}
        p={'48px 16px'}
        maxWidth={'960px'}
        width={'100%'}
        mx={'auto'}
        textAlign={'center'}
        >
        <Stack 
          mb={'48px'}
          alignItems={'center'}
          >
          <Styletext fontsize={'40px'} text={'Recent Transaction'} />
        </Stack>

        <Stack
          borderRadius={'0.5rem'}
          border={'1px solid #343445'}
          p={'1rem'}
          justifyContent={'space-between'}
          alignItems={'center'}
          direction={'row'}
          mb={'8px'}
          sx={{
              backgroundColor: '#202029',
              borderRadius: '0.5rem 0.5rem',
              boxShadow: '0px 4px 0px 0px #343445,0px 4px 10px 0px rgba(0,0,0,.25)'            
          }}
          >
          <Stack 
            direction={'row'} 
            color={'white'}
            alignItems={'center'}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="8" cy="8" r="7.5">
                </circle>
                <polyline points="8 3 8 8 13 8">
                </polyline>
              </g>
            </svg>

            <Typography
              ml={'0.5rem'}
              fontSize={'16px'}
              color="#DEDEDE"
              >
              17/12/2024 - 11:49
            </Typography>
          </Stack>

          <Stack
            direction={'row'} 
            color={'white'}
            alignItems={'center'}
            >
            <img 
              src="/image/usdc.svg" 
              alt="usdc"
              width={'20px'}
              height={'20px'}  
              />

            <Typography
              ml={'0.5rem'}
              fontSize={'16px'}
              color="#DEDEDE"
              >
              10000
            </Typography>

            <Stack mx={'0.5rem'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="mx-3">
                <g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="0.5" y1="8" x2="15.5" y2="8">
                  </line>
                  <polyline points="10.5 3 15.5 8 10.5 13">
                  </polyline>
                </g>
              </svg>
            </Stack>

            <img 
              src="/image/usdc.svg" 
              alt="usdc"
              width={'20px'}
              height={'20px'}  
              />
          </Stack>
        </Stack>

        <Stack
          borderRadius={'0.5rem'}
          border={'1px solid #343445'}
          p={'1rem'}
          justifyContent={'space-between'}
          alignItems={'center'}
          direction={'row'}
          mb={'8px'}
          sx={{
              backgroundColor: '#202029',
              borderRadius: '0.5rem 0.5rem',
              boxShadow: '0px 4px 0px 0px #343445,0px 4px 10px 0px rgba(0,0,0,.25)'            
          }}
          >
          <Stack 
            direction={'row'} 
            color={'white'}
            alignItems={'center'}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="8" cy="8" r="7.5">
                </circle>
                <polyline points="8 3 8 8 13 8">
                </polyline>
              </g>
            </svg>

            <Typography
              ml={'0.5rem'}
              fontSize={'16px'}
              color="#DEDEDE"
              >
              18/12/2024 - 9:53
            </Typography>
          </Stack>

          <Stack
            direction={'row'} 
            color={'white'}
            alignItems={'center'}
            >
            <img 
              src="/image/usdc.svg" 
              alt="usdc"
              width={'20px'}
              height={'20px'}  
              />

            <Typography
              ml={'0.5rem'}
              fontSize={'16px'}
              color="#DEDEDE"
              >
              5000
            </Typography>

            <Stack mx={'0.5rem'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="mx-3">
                <g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="0.5" y1="8" x2="15.5" y2="8">
                  </line>
                  <polyline points="10.5 3 15.5 8 10.5 13">
                  </polyline>
                </g>
              </svg>
            </Stack>

            <img 
              src="/image/usdc.svg" 
              alt="usdc"
              width={'20px'}
              height={'20px'}  
              />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Recent;