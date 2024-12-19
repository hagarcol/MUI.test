import { Stack } from "@mui/material";
import { Styletext } from "../../components/styledtext/styletext";
import { ImageCarousel } from "../../components/imagecarousel";

const Support = () => {
  const images = [
    "/image/bitcoin.svg",
    "/image/ethereum.svg",
    "/image/infinite.svg",
    "/image/kas.svg",
    "/image/xmr.svg",
  ];

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
          mb={'3rem'}
          alignItems={'center'}
          >
          <Styletext 
            fontsize={'40px'}
            text={'Supported Crypto'}
            />
        </Stack>

        <Stack>
          <ImageCarousel images={images} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Support;