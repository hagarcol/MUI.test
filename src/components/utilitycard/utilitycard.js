import { Stack, Typography } from "@mui/material"

export const Utilitycard = ({ title, number, icon }) => {
  return (
    <Stack 
    p={'0 1rem'}
    sx={{ width:{ sm: "50%", md: "25%"}}}
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
            fontSize={'24px'}
            fontWeight={'700'}
            >
            {title}
          </Typography>
        </Stack>

        <Stack
          direction={'row'}
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
            {icon}

          <Typography
            fontSize={'40px'}
            fontWeight={'700'}
            >
            {number}
          </Typography>
        </Stack>
      </Stack>
  </Stack>
  )
}
