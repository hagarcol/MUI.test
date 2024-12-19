import { TextField, Stack, Typography } from "@mui/material"

export const Modaldetail = () => {
  return (
  <Stack
  p={'16px'}
    >
    <Stack
      mb={'16px'}
      direction={'row'}
      alignItems={'center'}
      >
      <Stack
        color={'#666692'}
        bgcolor={'#16161c'}
        borderRadius={'0.5rem 0 0 0.5rem'}
        height={'58px'}
        p={'16px 12px'}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="none" stroke="currentColor" stroke-miterlimit="10">
            <polyline points="16.568 14.568 22 20 20 22 14.568 16.568" stroke-linecap="butt">
            </polyline>
            <path d="M16.568,14.568l-.022.023a8.036,8.036,0,0,1-1.956,1.955l-.022.022L20,22l2-2Z" stroke="none" fill="currentColor">
            </path>
            <circle cx="10" cy="10" r="8">
            </circle>
          </g>
        </svg>
      </Stack>

      <TextField 
        variant="outlined"
        placeholder='Search...'
        sx={{
          width: '100%',
          bgcolor: '#202029',
          borderBottomRightRadius: '0.5rem',
          borderTopRightRadius: '0.5rem',
          "& .MuiInputBase-input": {
            color: "white", 
            fontSize: "20px", 
            fontWeight: "bold",
          },
          "& input::placeholder": {
            color: "gray",
            fontSize: '20px',
            fontWeight: '700',
            opacity: 1,
          },
          "& .MuiOutlinedInput-root": {
            height: '58px',
            "&:hover fieldset": {
              borderColor: "#8671ff", 
            },
            "&.Mui-focused fieldset": {
              borderColor: "#8671ff", 
            },
          },
        }}
      />
    </Stack>

    <Stack 
      direction={'row'}
      alignItems={'center'}  
      p={'24px'}
      borderTop={'1px solid #343445'}
      >
      <img 
        src='/image/bitcoin.svg'
        alt="bitcoin"
        width={'50px'}
        height={'50px'} />

      <Stack ml={'16px'}>
        <Typography
          color="white"
          fontSize={'20px'}
          mb={'4px'}
          textAlign={'left'}
          >
          Bitcoin
        </Typography>

        <Typography
          color="rgba(255,255,255,0.5)"
          fontSize={'16px'}
          mb={'4px'}
          textAlign={'left'}
          >
          BTC
        </Typography>
      </Stack>
    </Stack>

    <Stack 
      direction={'row'}
      alignItems={'center'}  
      p={'24px'}
      borderTop={'1px solid #343445'}
      >
      <img 
        src='/image/ethereum.svg'
        alt="ethereum"
        width={'50px'}
        height={'50px'} />

      <Stack ml={'16px'}>
        <Typography
          color="white"
          fontSize={'20px'}
          mb={'4px'}
          textAlign={'left'}
          >
          Ethereum
        </Typography>

        <Typography
          color="rgba(255,255,255,0.5)"
          fontSize={'16px'}
          mb={'4px'}
          textAlign={'left'}
          >
          ETH
        </Typography>
      </Stack>
    </Stack>
  </Stack>
  )
}
