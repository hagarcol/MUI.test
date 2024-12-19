import React, { useState, useEffect } from "react";
import { Stack, Typography} from "@mui/material";
import { Styletext } from "../styledtext/styletext";

 export const Countdowntimer = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 4);
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDate - now;
      console.log(difference)
    
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
      console.log({ days, hours, minutes, seconds }); // Debugging output
      return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    
      return () => clearInterval(timer); // Cleanup function
    }, []);
  return (
    <Stack sx={{backgroundColor: '#16161c'}}>
      <Stack 
        maxWidth={'1280px'}
        width={'100%'}
        m={'3rem auto'}
        p={'3rem 1rem'}
        textAlign={'center'}
        >
          <Stack
            maxWidth={'728px'}
            width={'100%'}
            mx={'auto'}
            >
              <Typography
                fontSize={'32px'}
                fontWeight={'700'}
                color="#8671ff"
                mb={'8px'}
                >
                  Next Revenue Share Airdrop
              </Typography>

              <Stack
                alignItems={'center'}
                mb={'16px'}
              >
                <Styletext 
                  fontsize={'40px'}
                  text={'Countdown till next Payout'}
                  />
              </Stack>

              <Stack 
                justifyContent="center" 
                direction={'row'} 
                spacing={2} 
                mt={2}
                >
                {Object.entries(timeLeft).map(([key, value]) => (
                  <Stack 
                    width={'25%'} 
                    borderRadius={'0.5rem'}
                    border={'1px solid #343445'}
                    >
                    <Stack 
                      sx={{ 
                        borderRadius: '0 0 0.5rem 0.5rem',
                        boxShadow: '0px 4px 0px 0px #343445,0px 4px 10px 0px rgba(0,0,0,.25)',
                        padding: "1.5rem",
                        backgroundColor: '#202029', 
                        }}
                        >
                      <Typography 
                        fontSize="40px" 
                        fontWeight="bold" 
                        color="#8671ff"
                        >
                        {value}
                      </Typography>
                      
                      <Typography color="#ffffff80">
                        {key.toUpperCase()}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
          </Stack>
      </Stack>
    </Stack>
  )
}
