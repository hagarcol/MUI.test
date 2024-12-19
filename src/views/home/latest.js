import { Stack } from "@mui/material";
import { Styletext } from "../../components/styledtext/styletext";
import { Latestcard } from "../../components/latestcard";

const Latest = () => {

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
            text={'Latest Updates'}
            />
        </Stack>

        <Stack 
          flexWrap={'wrap'}
          direction={'row'}
          >
          <Latestcard 
            imgsrc={'/image/beer.webp'} 
            text={'BEERCOIN(SOL)'}
            />

          <Latestcard 
            imgsrc={'/image/daddy.webp'} 
            text={'Daddy Tate(SOL)'}
            />

          <Latestcard 
            imgsrc={'/image/cati.webp'} 
            text={'Catizen(TON)'}
            />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Latest;