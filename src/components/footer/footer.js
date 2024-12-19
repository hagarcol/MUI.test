import { 
  Box, 
  Typography, 
  Link,
  Stack
} from '@mui/material';

export const Footer = () => {
  const pages = ['Exchange', 'Track order', 'FAQs', 'Token', 'Support'];

  return (
    <Stack 
      p={'48px 0 16px 0px'} 
      sx={{
        backgroundColor: '#16161c',
        borderTop: '1px solid #343445'
    }}>
      <Stack 
        p={'0 16px'} 
        m={'48px 46.5px'}
        maxWidth={'1280px'}
        width={'100%'}
        margin={'48px auto'}
        >
        <Stack
          direction={{md: 'row', sm: 'column'}}
          justifyContent={'space-between'}
          alignItems={'center'}
          p={'0 16px'}
          m={'48px 0'}
          >

          <Link 
            href='/' 
            sx={{
              alignItems: 'center',
              display: 'flex',
              textDecoration: 'none',
              fontSize: '24px',
              color: 'white',
              ':hover': {
                color: '#8671ff',
              }
            }}
            >
            <img src='/image/veil.svg' alt='Veil' width={'73px'} height={'40px'}/>
            Veil
          </Link>

          <Box sx={{
            display: 'flex',
            alignItems: "center",
          }}
            >
            {pages.map((page) => (
              <Link sx={{
                color: '#fff',
                p: '8px 24px',
                fontSize: '16px',
                fontWeight: '700',
                textDecoration: 'none',
                cursor: 'pointer',
                ':hover': {
                  color: '#8671ff'
                  }
                }}
                >
                {page}
              </Link>
            ))}
          </Box>
            
          <Stack 
            direction={'row'} 
            justifyContent={'flex-end'} 
            gap={'1rem'}
            >
            <Link sx={{color: 'white'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="currentColor">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z">
                  </path>
                </g>
              </svg>
            </Link>

            <Link sx={{color: 'white'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="currentColor">
                  <path d="M23.953,2.527a.515.515,0,0,0-.349-.381,1.8,1.8,0,0,0-.945.067S1.63,9.772.429,10.609c-.258.18-.345.285-.388.408-.208.6.439.858.439.858L5.9,13.641a.59.59,0,0,0,.275-.016c1.232-.779,12.4-7.834,13.049-8.071.1-.03.177,0,.157.075-.258.905-9.909,9.478-9.962,9.53a.2.2,0,0,0-.072.177l-.506,5.292s-.212,1.647,1.435,0c1.168-1.169,2.289-2.137,2.849-2.608,1.864,1.287,3.869,2.71,4.734,3.455a1.506,1.506,0,0,0,1.1.423,1.236,1.236,0,0,0,1.051-.933S23.84,5.542,23.968,3.476c.013-.2.03-.332.032-.471A1.762,1.762,0,0,0,23.953,2.527Z">
                  </path>
                </g>
              </svg>
            </Link>
              
            <Link sx={{color: 'white'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none">
                  <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.95 0-4.05.4-5.5 1.5v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" fill="currentColor">
                  </path>

                  <path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99z" fill="currentColor">
                  </path>

                  <path d="M13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83z" fill="currentColor">
                  </path>

                  <path d="M17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z" fill="currentColor">
                  </path>
                </g>
              </svg>
            </Link>
          </Stack>
        </Stack>

        <Stack 
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          p={'48px 0 0'}
          borderTop={'1px solid #343445'}
          >
          <Link 
            href='/' 
            sx={{
            alignItems: 'center',
            display: 'flex',
            textDecoration: 'none',
            fontSize: '16px',
            color: '#8576da',
            }}
            >
            Terms of Service
          </Link>

          <Typography 
            color='#8576da'
            >
            Copyright © 2024 Veil. All rights reserved.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}