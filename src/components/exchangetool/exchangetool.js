import React, { useState } from "react";
import { Button, Stack, Typography, Box, Modal } from "@mui/material"
import { Txfield } from "../txfield"
import { Modaldetail } from "../modaldetail/modaldetail";

export const Exchangetool = ({ what, icon, firsttext, secondtext }) => {
  // State to manage modal visibility
  const [open, setOpen] = useState(false);

  // Functions to handle opening and closing of modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack 
    p={'0 0.75rem'}
    width={'50%'}
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
        p: '16px'
        }}
          >
          <Typography
            fontSize={'20px'}
            color="white"
            fontWeight={'700'}
            >
            {what}
          </Typography>
        </Stack>

        <Stack
        sx={{
        backgroundColor: '#202029',
        p:'1.5rem',
        borderRadius: '0 0 0.5rem 0.5rem',
        boxShadow: '0px 4px 0px 0px #343445,0px 4px 10px 0px rgba(0,0,0,.25)'
        }}
          >
            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'white',
                p: '8px 16px',
                mb: '8px',
                backgroundColor: 'rgba(52,52,69,1)',
                borderRadius: '0.5rem'
              }}
              >
                <Stack 
                  direction={'row'}
                  alignItems={'center'}  
                  >
                  <img 
                    src={icon}
                    width={'50px'}
                    height={'50px'} />

                  <Stack ml={'16px'}>
                    <Typography
                      color="white"
                      fontSize={'20px'}
                      mb={'4px'}
                      textAlign={'left'}
                      >
                      {firsttext}
                    </Typography>

                    <Typography
                      color="rgba(255,255,255,0.5)"
                      fontSize={'16px'}
                      mb={'4px'}
                      textAlign={'left'}
                      >
                      {secondtext}
                    </Typography>
                  </Stack>
                </Stack>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g fill="currentColor">
                    <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414Z">
                    </path>
                  </g>
                </svg>
            </Button>

            <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
              <Box
              sx={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: '50%',
              left: '50%',
              mx: 'auto',
              maxWidth: '800px',
              width: '100%',
              bgcolor: "#2d2d39",
              borderRadius: "8px",
              }}
                >
                <Stack 
                  p={'16px'}
                  direction={'row'}
                  justifyContent={'space-between'}
                  borderBottom={'1px solid #343445'}
                  alignItems={'center'}
                  >
                  <Typography
                    color="white"
                    fontSize={'24px'}
                    fontWeight={'700'}
                    >
                    Select crypto to send
                  </Typography>

                  <Button 
                    variant="contained" 
                    onClick={handleClose}
                    sx={{
                      bgcolor: '#8671ff',
                      borderRadius: '0.5rem',
                      color: 'white',
                      p: '6px 12px',
                      width: '50px',
                      height: '50px'
                    }}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="none" stroke="currentColor" stroke-miterlimit="10">
                        <line x1="19" y1="5" x2="5" y2="19">
                        </line>
                        <line x1="19" y1="19" x2="5" y2="5">
                        </line>
                      </g>
                    </svg>
                  </Button>
                </Stack>

                <Modaldetail />
              </Box>
            </Modal>

            <Txfield
              width={'100%'}
              placeholder={'0000'}
              backcolor={'rgba(52,52,69,1)'}
            />
        </Stack>
      </Stack>
    </Stack>
  )
}