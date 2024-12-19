import { Stack } from "@mui/material";
import React, { useState, useEffect } from 'react';
import { Styletext } from "../../components/styledtext/styletext";
import { Securitycard } from "../../components/securitycard/securitycard";

const Security = () => {
  const [fontSize, setFontSize] = useState(20); // Initial font size (px)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Calculate the font size based on scroll position
      const newFontSize = Math.min(40, 20 + scrollY / 50); // Min font size: 16px
      setFontSize(newFontSize);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
          mb={'3rem'}
          alignItems={'center'}
          >
          <Styletext 
            text={'We are all about privacy and security'}
            fontsize={fontSize}
            />        
        </Stack>
        <Stack 
          flexWrap={'wrap'}
          direction={'row'}
          >
          <Securitycard 
            imgsrc={'/image/security.webp'} 
            firsttext={'Privacy-Driven'}  
            secondtext={'Anonymized exchange with no sign-ups or limits.'}
            />

          <Securitycard 
            imgsrc={'/image/proxy.webp'} 
            firsttext={'Seamless Exchange'}  
            secondtext={'Fast and effective exchange between wallets and cryptocurrencies.'}
            />

          <Securitycard 
            imgsrc={'/image/wallet.webp'} 
            firsttext={'Privacy-Driven'}  
            secondtext={'No wallet or amount limitations on all exchanges through us!'}
            />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Security;