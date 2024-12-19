import { Stack, Link} from "@mui/material";
import { Styletext } from "../../components/styledtext/styletext";
import { Utilitycard } from "../../components/utilitycard/utilitycard";

const Tokenstate = () => {

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
            text={'$Veil Token Stats'}
            fontsize={'40px'}
            />   

          <Link 
            sx={{
              color: 'white',
              p: '8px 24px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '0.375em',
              alignItems: 'center',
              display: 'flex',
              ':hover': {
                color: '#8671ff'
              }
            }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 293.775 293.667">
              <g fill="currentColor">
                <g id="etherscan-logo-light-circle" transform="translate(-219.378 -213.333)">
                  <path id="Path_1" data-name="Path 1" d="M280.433 353.152a12.45 12.45 0 0 1 12.508-12.452l20.737.068a12.467 12.467 0 0 1 12.467 12.467v78.414c2.336-.692 5.332-1.43 8.614-2.2a10.389 10.389 0 0 0 8.009-10.11v-97.266a12.469 12.469 0 0 1 12.467-12.47h20.779a12.47 12.47 0 0 1 12.467 12.47v90.276s5.2-2.106 10.269-4.245a10.408 10.408 0 0 0 6.353-9.577V290.9a12.466 12.466 0 0 1 12.465-12.467h20.779a12.468 12.468 0 0 1 12.468 12.467v88.625c18.014-13.055 36.271-28.758 50.759-47.639a20.926 20.926 0 0 0 3.185-19.537 146.6 146.6 0 0 0-136.644-99.006c-81.439-1.094-148.744 65.385-148.736 146.834a146.371 146.371 0 0 0 19.5 73.45 18.56 18.56 0 0 0 17.707 9.173 508.86 508.86 0 0 0 14.643-1.518 10.383 10.383 0 0 0 9.209-10.306v-77.824" fill="currentColor">
                  </path>
                  <path id="Path_2" data-name="Path 2" d="M244.417 398.641A146.808 146.808 0 0 0 477.589 279.9c0-3.381-.157-6.724-.383-10.049-53.642 80-152.686 117.405-232.79 128.793" transform="translate(35.564 80.269)" fill="currentColor">
                  </path>
                </g>
              </g>
            </svg>

            View on Etherscan
          </Link>
        </Stack>

        <Stack 
          flexWrap={'wrap'}
          direction={'row'}
          color={'white'}
          fontSize={'24px'}
          fontWeight={'700'}
          textAlign={'center'}
            >
          <Utilitycard 
            title={'Total Holders'} 
            number={'5,678'} 
            icon={          
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="none" stroke="currentColor" stroke-miterlimit="10">
                  <circle cx="9" cy="15" r="4">
                  </circle>
                  <path d="M9,22c-4.418,0-8,3.582-8,8v1H17v-1c0-4.418-3.582-8-8-8Z">
                  </path>
                  <circle cx="20.5" cy="6.5" r="5.5">
                  </circle>
                  <path d="M21,31h10v-6c0-5.523-4.477-10-10-10-1.422,0-2.775,.297-4,.832">
                  </path>
                </g>
              </svg>
              }
            />

          <Utilitycard 
            title={'Total Transactions'} 
            number={'41,552'}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="none" stroke="currentColor" stroke-miterlimit="10">
                  <polyline points="3,12 29,12 19,2 ">
                  </polyline>
                  <polyline points=" 29,20 3,20 13,30 ">
                  </polyline>
                </g>
              </svg>
              }
            />

          <Utilitycard 
            title={'Liquidity'} 
            number={'309.7k'}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 416.91">
                <g>
                  <defs>
                  </defs>
                  <g id="1677594065611-2455942_Layer_2" data-name="Layer 2">
                    <g id="1677594065611-2455942_Layer_1-2" data-name="Layer 1">
                      <path class="cls-1" d="M127.96 0l-2.79 9.5v275.67l2.79 2.79 127.96-75.64L127.96 0z" fill="#343434">
                      </path>
                      <path class="cls-2" d="M127.96 0L0 212.32l127.96 75.64V0z" fill="#8c8c8c">
                      </path>
                      <path class="cls-3" d="M127.96 312.19l-1.57 1.92v98.2l1.57 4.6L256 236.59l-128.04 75.6z" fill="#3c3c3b">
                      </path>
                      <path class="cls-2" d="M127.96 416.9V312.19L0 236.59 127.96 416.9z" fill="#8c8c8c">
                      </path>
                      <path class="cls-4" d="M127.96 287.96l127.96-75.64-127.96-58.16v133.8z" fill="#141414">
                      </path>
                      <path class="cls-5" d="M0 212.32l127.96 75.64v-133.8L0 212.32z" fill="#393939">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
              }
            />

          <Utilitycard 
            title={'Market Cap'} 
            number={'1.0M'}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="none" stroke="currentColor" stroke-miterlimit="10">
                  <rect x="4" y="19" width="6" height="12">
                  </rect>
                  <polygon points="21,2 12,13 18,13 18,31 24,31 24,13 30,13 ">
                  </polygon>
                </g>
              </svg>
              }
            />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Tokenstate;