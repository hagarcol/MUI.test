import { Stack, List, ListItem, Collapse, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Styletext } from "../../components/styledtext/styletext";
import React, { useState } from "react";

const Mainpart = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active list item

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the clicked item
  };

  return (
    <Stack
      sx={{
        backgroundColor: '#16161c',
      }}
      textAlign={'center'}
      >
      <Stack
        maxWidth={'960px'}
        width={'100%'}
        mt={'148px'}
        mb={'48px'}
        p={'48px 16px'}
        mx={'auto'}
        >
        <Stack mb={'48px'}>
          <Stack alignItems={'center'}>
            <Styletext fontsize={'40px'} text={'FAQs'} />
          </Stack>

          <Typography fontSize={'20px'} color="#8671ff">
            Answering the most popular questions
          </Typography>
        </Stack>

        <Stack p={'0 1rem'} maxWidth={'960px'} width={'100%'} mx={'auto'}>
          <Stack 
            borderRadius={'0.5rem'} 
            border={'1px solid #343445'} 
            color={'white'} 
            bgcolor={'#2d2d39'}
            >

            <List sx={{ borderBottom: '1px solid #343445' }}>
              <ListItem
                button
                onClick={() => handleToggle(0)}
                sx={{
                  justifyContent: 'space-between',
                  color: activeIndex === 0 ? '#8671ff' : 'white',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
                >
                1. Is Veil a decentralized exchange (DEX)?
                <KeyboardArrowDownIcon
                  sx={{
                    transform: activeIndex === 0 ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                    color: 'white',
                  }}
                  />
              </ListItem>

              <Collapse in={activeIndex === 0}>
                <List component="div" disablePadding>
                  <ListItem>
                    No, Veil is not a decentralized exchange (DEX) platform. Instead, it functions as a protocol
                    and bridge between different blockchain networks, enabling cryptocurrency swaps and transactions.
                    While it's not a DEX, Veil emphasizes privacy, security, and community engagement.
                  </ListItem>
                </List>
              </Collapse>
            </List>

            {/* Second Question */}
            <List sx={{ borderBottom: '1px solid #343445' }}>
              <ListItem
                button
                onClick={() => handleToggle(1)}
                sx={{
                  justifyContent: 'space-between',
                  color: activeIndex === 1 ? '#8671ff' : 'white',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
                >
                2. How can I participate in the Veil Revenue Share Program?
                <KeyboardArrowDownIcon
                  sx={{
                    transform: activeIndex === 1 ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                    color: 'white',
                  }}
                  />
              </ListItem>

              <Collapse in={activeIndex === 1}>
                <List component="div" disablePadding>
                  <ListItem>
                    To participate in the Veil Revenue Share Program, you need to hold a minimum amount of Veil tokens in your wallet.
                    The specific amount required for eligibility is determined by the platform and is transparently communicated to the community.
                    The program distributes a share of the exchange's revenue, including trading fees from both the Veil token and the exchange,
                    to eligible token holders regularly.
                  </ListItem>
                </List>
              </Collapse>
            </List>

            {/* Third Question */}
            <List>
              <ListItem
                button
                onClick={() => handleToggle(2)}
                sx={{
                  justifyContent: 'space-between',
                  backgroundColor: activeIndex === 2 ? '#2a2a38' : 'transparent',
                  color: activeIndex === 2 ? '#8671ff' : 'white',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
                >
                3. What percentage of the Trading fee and token fee is allocated towards the Veil Revenue Share Program?
                <KeyboardArrowDownIcon
                  sx={{
                    transform: activeIndex === 2 ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                    color: 'white',
                  }}
                  />
              </ListItem>

              <Collapse in={activeIndex === 2}>
                <List component="div" disablePadding>
                  <ListItem>
                    20% of the total trading fees generated by the Veil platform and the Veil Token are allocated to the Veil Revenue Share Program.
                    This includes both the trading fee from the Veil token and the trading fee from the exchange. This revenue is distributed
                    proportionally among eligible token holders as part of the program, allowing them to earn a share of the exchange's success.
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Mainpart;
