import { Stack, Typography } from "@mui/material";
import { Styletext } from "../../components/styledtext/styletext";
import { CustomButton } from "../../components/custombutton/custombutton";

const Share = () => {

  return (
    <Stack
      sx={{
        backgroundColor: '#16161c',
      }}
      textAlign={'center'}
      >
      <Stack
        maxWidth={'1280px'}
        width={'100%'}
        my={'48px'}
        p={'48px 16px'}
        mx={'auto'}
        >
        <Stack 
          width={'728px'}
          px={'12pxs'}
          mx={'auto'}
          >
          <Stack 
            alignItems={'center'}
            mb={'16px'}
            >
            <Typography
              fontSize={'32px'}
              mb={'8px'}
              color="#8671ff"
              fontWeight={'700'}
              >
              Revenue Sharing
            </Typography>

            <Styletext 
              fontsize={'40px'}
              text={'How does it work?'}
              />
          </Stack>

          <Typography
            fontSize={'16px'}
            color="#DEDEDE"
            textAlign={'center'}
            mb={'8px'}
            >
            Our revenue sharing program comes from the distributed profits from our Veil 
            Token taxes and our exchange processing. We allocate 20% of all revenue back 
            to our revenue sharing program. This program will airdrop holders* of the Veil 
            Token every 72 hours, with the funds that are generated into the RevShare wallet.
          </Typography>
          
          <Typography
            fontSize={'14px'}
            color="#ffffff80"
            textAlign={'center'}
            mb={'24px'}
            fontStyle={'italic'}
            >
            *Eligibility: Veil Token Holders holding at-least 1,000,000 Veil Tokens.
          </Typography>
          
          <Stack alignItems={'center'}>
           <CustomButton text={'Revenue Share Wallet'} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Share;