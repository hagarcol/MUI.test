import { Stack, Typography } from "@mui/material"

export const Utilitybreakdown = ({ name, percentage, color }) => {
  return (
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
      <Typography
        fontSize={'20px'}
        color="#DEDEDE"
        >
        {name}
      </Typography>
    </Stack>

    <Stack
      direction={'row'} 
      color={'white'}
      alignItems={'center'}
      >
      <Typography
        fontSize={'20px'}
        fontWeight={'700'}
        color={color}
        >
        {percentage}
      </Typography>
    </Stack>
  </Stack>
  )
}
