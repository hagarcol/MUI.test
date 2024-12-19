import { Stack, Box, Typography} from "@mui/material";
import { Styletext } from "../../components/styledtext/styletext";
import { Utilitybreakdown } from "../../components/utilitybreakdown/utilitybreakdown";
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const Breakdown = () => {
  const originalData = [
    { value: 30, label: "Marketing", color: "rgba(220, 53, 69, 0.3)" },
    { value: 20, label: "Revenue Share", color: "rgba(16, 205, 117, 0.3)" },
    { value: 20, label: "Team", color: "rgba(134, 113, 255, 0.3)" },
    { value: 15, label: "Development", color: "rgba(13, 202, 240, 0.3)" },
    { value: 15, label: "Treasury", color: "rgba(255, 193, 7, 0.3)" },
  ];

  const [data, setData] = React.useState(originalData);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleLabelClick = (index) => {
    if (selectedIndex === index) {
      // If already selected, reset to the original data
      setData(originalData);
      setSelectedIndex(null);
    } else {
      // Filter out the clicked section and update data
      const updatedData = originalData.map((item, i) =>
        i === index ? { ...item, value: 0 } : item
      );
      setData(updatedData);
      setSelectedIndex(index);
    }
  };

  const size = {
    width: 578,
    height: 578,
  };

  const breakdowns = [
    {
      name: 'Marketing:',
      percentage: '30%',
      color: '#DC3545',
    },
    {
      name: 'Revenue Share:',
      percentage: '20%',
      color: '#10cd75',
    },
    {
      name: 'Team:',
      percentage: '20%',
      color: '#8671ff',
    },
    {
      name: 'Development:',
      percentage: '15%',
      color: '#0dcaf0',
    },
    {
      name: 'Treasury:',
      percentage: '15%',
      color: '#ffc107',
    }
  ]

  return (
    <Stack sx={{backgroundColor: '#16161c'}}>
      <Stack 
        maxWidth={'1280px'}
        width={'100%'}
        m={'3rem auto'}
        p={'3rem 1rem'}
        textAlign={'center'}
        direction={{ md: 'row', xs: 'column' }}
        alignItems={'center'}
        justifyContent={'space-between'}
        >
          <Stack
            p={'0 12px'}
            width={'530px'}
            color={'#DEDEDE'}
            fontSize={'16px'}
            textAlign={'left'}
            mb={'48px'}
            >
              <Typography
                fontSize={'32px'}
                color="#8671FF"
                mb={'8px'}
                >
                Breakdown
              </Typography>

              <Stack mb={'2rem'}>
                <Styletext 
                  text={'Our Revenue Allocation'}
                  fontsize={'40px'}
                  /> 
              </Stack>
              
              <Typography mb={'24px'}>
                Our Veil revenue is generated from the exchange processes & fees from the $Veil token.
                This is distributed to certain allocations for the upkeep of the platform, and distributed sharing. 
                Here is the list of our allocations for each category.
              </Typography>
              {
                breakdowns.map((breakdown) => (
                  <Utilitybreakdown
                    name={breakdown.name}
                    percentage={breakdown.percentage}
                    color={breakdown.color}
                    />
                ))
              }

          </Stack>

          <Stack
            p={'0 12px'}
            width={'636px'}
            >
            <Stack spacing={1} direction={'row'}>
              {originalData.map((item, index) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  key={index}
                  sx={{
                    cursor: "pointer",
                    textDecoration: selectedIndex === index ? "line-through" : "none",
                  }}
                  onClick={() => handleLabelClick(index)}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      backgroundColor: item.color,
                      borderRadius: "50%",
                      marginRight: 1,
                    }}
                  />
                  <Typography 
                    fontSize="14px" 
                    color="#DEDEDE" 
                    >
                    {item.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
              
            <PieChart
              series={[{ 
                data, 
                outerRadius:200 , 
                innerRadius: 100,
                cy: 350,
              }]}
              {...size}
              
              slotProps={{
                legend: { hidden: true }
              }}
            />
          </Stack>
      </Stack>
    </Stack>
  )
}

export default Breakdown;