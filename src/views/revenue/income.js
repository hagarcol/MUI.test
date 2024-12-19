import { Stack, Typography } from "@mui/material";
import { Styletext } from "../../components/styledtext/styletext";

const Income = () => {

  return (
    <Stack
      sx={{
        backgroundColor: '#16161c',
      }}
      textAlign={'center'}
      >
      <Stack
        maxWidth={'1280px'}
        width={'100%'}
        my={'48px'}
        p={'48px 16px'}
        mx={'auto'}
        >
        <Stack mb={'24px'}>
          <Stack 
            alignItems={'center'}
            >
            <Styletext 
              fontsize={'40px'}
              text={'Our Revenue Income'}
              />
          </Stack>

          <Typography
            fontSize={'16px'}
            color="#8671ff"
            >
            Overview for Revenue generated from Veil Exchange & Token Fees
          </Typography>
        </Stack>

        <Stack
          maxWidth={'848px'}
          width={'100%'}
          mx={'auto'}
          direction={'row'}
          mb={'24px'}
        >
          <Stack 
            p={'0 1rem'}
            width={"50%"}
              >
              <Stack
                borderRadius={'0.5rem'}
                border={'1px solid #343445'}
                >
                <Stack
                  sx={{
                    backgroundColor: '#2d2d39',
                    borderRadius: '0.5rem 0.5rem 0 0',
                    alignItems: 'center',
                    p: '8px 16px',
                    textAlign: 'center',
                  }}
                  >
                  <Typography 
                    color="white"
                    fontSize={'20px'}
                    fontWeight={'700'}
                    >
                    Revenue from Exchange
                  </Typography>
                </Stack>

                <Stack
                  sx={{
                    backgroundColor: '#202029',
                    color: "#8671ff",
                    p:'1.5rem',
                    borderRadius: '0 0 0.5rem 0.5rem',
                    boxShadow: '0px 4px 0px 0px #343445,0px 4px 10px 0px rgba(0,0,0,.25)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  >
                  <Typography
                    fontSize={'40px'}
                    fontWeight={'700'}
                    >
                    3.38 ETH
                  </Typography>

                  <Typography
                    color="#ffffff80"
                    fontSize={'20px'}
                    fontWeight={'700'}
                  >
                    $12.5K USD
                  </Typography>
                </Stack>
              </Stack>
          </Stack>

          <Stack 
            p={'0 1rem'}
            width={"50%"}
              >
              <Stack
                borderRadius={'0.5rem'}
                border={'1px solid #343445'}
                >
                <Stack
                  sx={{
                    backgroundColor: '#2d2d39',
                    borderRadius: '0.5rem 0.5rem 0 0',
                    alignItems: 'center',
                    p: '8px 16px',
                    textAlign: 'center',
                  }}
                  >
                  <Typography 
                    color="white"
                    fontSize={'20px'}
                    fontWeight={'700'}
                    >
                    Revenue from Exchange
                  </Typography>
                </Stack>

                <Stack
                  sx={{
                    backgroundColor: '#202029',
                    color: "#8671ff",
                    p:'1.5rem',
                    borderRadius: '0 0 0.5rem 0.5rem',
                    boxShadow: '0px 4px 0px 0px #343445,0px 4px 10px 0px rgba(0,0,0,.25)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  >
                  <Typography
                    fontSize={'40px'}
                    fontWeight={'700'}
                    >
                    79.12 ETH
                  </Typography>

                  <Typography
                    color="#ffffff80"
                    fontSize={'20px'}
                    fontWeight={'700'}
                  >
                    $291.7K USD
                  </Typography>
                </Stack>
              </Stack>
          </Stack>
        </Stack>

        <Stack
          maxWidth={'848px'}
          width={'100%'}
          mx={'auto'}
          direction={'row'}
          mb={'24px'}
        >
          <Stack 
            p={'0 1rem'}
            width={"100%"}
              >
              <Stack
                borderRadius={'0.5rem'}
                border={'1px solid #343445'}
                >
                <Stack
                  sx={{
                    backgroundColor: '#2d2d39',
                    borderRadius: '0.5rem 0.5rem 0 0',
                    alignItems: 'center',
                    p: '8px 16px',
                    textAlign: 'center',
                  }}
                  >
                  <Typography 
                    color="white"
                    fontSize={'20px'}
                    fontWeight={'700'}
                    >
                    Revenue from Exchange
                  </Typography>
                </Stack>

                <Stack
                  sx={{
                    backgroundColor: '#202029',
                    color: "#8671ff",
                    p:'1.5rem',
                    borderRadius: '0 0 0.5rem 0.5rem',
                    boxShadow: '0px 4px 0px 0px #343445,0px 4px 10px 0px rgba(0,0,0,.25)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  >
                  <Typography
                    fontSize={'40px'}
                    fontWeight={'700'}
                    >
                    82.50 ETH
                  </Typography>

                  <Typography
                    color="#ffffff80"
                    fontSize={'20px'}
                    fontWeight={'700'}
                  >
                    $12.5K USD
                  </Typography>
                </Stack>
              </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Income;