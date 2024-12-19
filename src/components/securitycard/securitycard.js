import { Stack, Box, Typography } from "@mui/material"

export const Securitycard = ({ imgsrc, firsttext, secondtext }) => {
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
            maxWidth: 'auto',
            maxHeight: '170px',
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
          borderRadius: '0 0 0.5rem 0.5rem',
          boxShadow: '0px 4px 0px 0px #343445,0px 4px 10px 0px rgba(0,0,0,.25)'
        }}
      >
        <Typography 
          color="white"
          textAlign={'left'}
          fontSize={'28px'}
          fontWeight={'700'}
          mb={'8px'}
        >
          {firsttext}
        </Typography>
        
        <Typography
          color="#8576da"
          fontSize={'16px'}
          textAlign={'left'}
        >
          {secondtext}
        </Typography>
      </Stack>
    </Stack>
  </Stack>
  )
}