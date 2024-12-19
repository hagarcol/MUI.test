import { Button } from "@mui/material"

export const CustomButton = ({ 
  text, 
}) => {
  return(
    <Button 
      variant="contained"
      sx={{
        color: 'white',
        p: '16px 24px',
        borderColor: '#8671ff',
        backgroundColor: 'rgba(134,113,255,.8)', 
        borderRadius: '0.5rem',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: '700',
        ':hover': {
          backgroundColor: '#8671ff',
          borderColor: '#8671ff',
        }
      }}>
      {text}
  </Button>
  )
}
