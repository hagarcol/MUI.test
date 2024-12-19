import { Stack, Box, Typography } from "@mui/material"

export const Latestcard = ({ imgsrc, text }) => {
  return (
    <Stack 
    p={'0 1rem'}
    sx={{ width:{ sm: "100%", md: "33%"}}}
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
          p: '8px 16px'
        }}
        >
        <Box
          component="img"
          src={imgsrc}
          alt="Vibrating Image"
          sx={{
            maxWidth: '100px',
            maxHeight: '100px',
            mt: '1.5rem',
            mb: '1.5rem',
            animation: 'vibrate 3s ease-in-out infinite',
            '@keyframes vibrate': {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' }, 
            '100%': { transform: 'translateY(0)' },
            },
          }}
          />
      </Stack>

      <Stack
        sx={{
          backgroundColor: '#202029',
          p:'1.5rem',
          gap: '1rem'
        }}
        >
        <Stack 
          alignItems={'center'}
          >
          <Typography 
            color="white"
            fontSize={'15px'}
            fontWeight={'700'}
            bgcolor={'rgba(134,113,255,1)'}
            p={'5.75px 9.75px'}
            borderRadius={'0.5rem'}
            >
            NEW REALEASE
          </Typography>
        </Stack>

        <Typography
          color="white"
          fontSize={'28px'}
          fontWeight={'700'}
          >
          New Token Supported:
        </Typography>

        <Typography
          color="#8671ff"
          fontSize={'28px'}
          fontWeight={'700'}
          mb={'8px'}
          >
          {text}
        </Typography>
      </Stack>

      <Stack
        p={'8px 16px'}
        sx={{
          backgroundColor: '#202029',
          border: '1px solid #343445',
          borderRadius: '0 0 0.5rem 0.5rem',
          boxShadow: '0px 4px 0px 0px #343445,0px 4px 10px 0px rgba(0,0,0,.25)',          
        }}
        >
        <Typography
        fontSize={'16px'}
        color="hsla(0,0%,100%,.5)"
          >
          Released: 04/12/24
        </Typography>
      </Stack>
    </Stack>
  </Stack>
  )
}