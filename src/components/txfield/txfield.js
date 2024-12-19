import { TextField } from "@mui/material";

export const Txfield = ({ width, placeholder, backcolor }) => {
  return (
    <TextField 
      variant="outlined"
      placeholder={placeholder}
      sx={{
        width: width,
        bgcolor: backcolor,
        borderRadius: '0.5rem',
        "& .MuiInputBase-input": {
          color: "white", 
          fontSize: "24px", 
          fontWeight: "bold",
        },
        "& input::placeholder": {
          color: "gray",
          fontSize: '24px',
          fontWeight: '700',
          opacity: 1,
        },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "#8671ff", 
          },
          "&.Mui-focused fieldset": {
            borderColor: "#8671ff", 
          },
        },
      }}
    />
  )
}
