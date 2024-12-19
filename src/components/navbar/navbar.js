import * as React from 'react';
import { 
  AppBar,
  Toolbar, 
  Box, 
  Typography, 
  Link,
  Button,
  Stack,
  Menu,
  MenuItem,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'FAQs',
    path: '/faqs'
  },
  {
    name: 'Utility Token',
    path: '/utility'
  },
  {
    name: 'Revenue Share',
    path: '/revenue'
  },
  {
    name: 'How to use',
    path: '/help'
  },
]

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Stack position={'sticky'} top={'0px'} zIndex={'1020'}>
      <AppBar
        sx={{
          padding: '8px 0px',
          backgroundColor: 'rgba(22,22,28,.4)',
          backdropFilter: 'blur(5px)',
          height: '100px',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          borderBottomColor: '#343445',
          justifyContent: 'center'          
        }}
        >
        <Stack 
        sx={{
          position: "relative",
          maxWidth: '1640px',
          width: '100%',
          mx: 'auto',
        }}
          >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              px: '0.75rem',
            }}
            >

            <Link 
              href = '/'
              sx={{
                alignItems: 'center',
                display: 'flex',
                textDecoration: 'none',
                fontSize: '24px',
                color: 'white',
              }}
              >
              <img src='/image/veil.svg' alt='Veil' width={'73px'} height={'40px'}/>
              Veil
            </Link>

            <Box sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: "center",
            }}
              >
              {pages.map((page) => (
                <Link 
                  href = {page.path}
                  sx={{
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
                  {page.name}
                </Link>
              ))}
            
            </Box>

            <Stack
              direction={'row'}
              alignItems={'center'}
              >
              <Button 
                variant="contained"
                sx={{
                  color: 'white',
                  p: '16px 24px',
                  borderColor: '#8671ff',
                  backgroundColor: 'rgba(134,113,255,.8)', 
                  borderRadius: '0.5rem',
                  textTransform: 'none',
                  ':hover': {
                    backgroundColor: '#8671ff',
                    borderColor: '#8671ff',
                  }
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="me-2" >
                  <g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="none" stroke="currentColor" stroke-miterlimit="10">
                    <polyline points="7.929 18.659 2.237 17.073 2.966 22.87">
                    </polyline>
                    <path d="M23,12A11,11,0,0,1,2.237,17.073" stroke-linecap="butt">
                    </path>
                    <polyline points="16.071 5.341 21.763 6.927 21.034 1.13">
                    </polyline>
                    <path d="M1,12A11,11,0,0,1,21.763,6.927" stroke-linecap="butt">
                    </path>
                  </g>
                </svg>

                <Typography
                  fontSize= {'16px'}
                  fontWeight= {'700'}    
                  ml={'4px'}          
                  >
                  Exchange
                </Typography>

              </Button>

              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  sx={{color:'white'}}
                  >
                  <MenuIcon />
                </IconButton>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                  }}
                  open={open}
                  onClose={handleClose}
                  sx={{ 
                    display: { xs: 'flex', md: 'none' } ,
                    padding: "0!important",
                    position:'absolute',
                    top: '25px',
                    "& .MuiList-root": {
                      padding: 0
                    }
                    // width: '100%'
                  }}
                  >
                  {pages.map((page, index) => (
                    <MenuItem 
                      key={index} 
                      onClick={handleClose}
                      sx={{
                        width: "100vw",
                        bgcolor: 'rgba(22, 23 ,28, 1)',
                        gap: '1rem'
                      }}
                      >
                      <Link 
                        href = {page.path}
                        sx={{
                          textDecoration: 'none',
                          textAlign: 'center',
                          width: "100%", 
                          justifyContent: "center",
                          color: 'white',
                        }}
                        >
                        {page.name}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Stack>
          </Toolbar>
        </Stack>
      </AppBar>
    </Stack>
  );
}
