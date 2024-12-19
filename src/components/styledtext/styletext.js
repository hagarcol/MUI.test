import { Typography } from "@mui/material";

export const Styletext = ({ fontsize, text }) => {
  return (
    <Typography
    fontSize={fontsize}
    sx={{
      background: '-webkit-linear-gradient(0deg,#fff,#545759)',
      WebkitTextFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
      fontWeight: '700',
      mb: '8px',
      zIndex: '3',
      position: 'relative',
    }}
  >
    {text}
  </Typography>
  )
}