import {
  Stack,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
  Box
} from "@mui/material";
import { LineChart } from '@mui/x-charts/LineChart';
import { Styletext } from "../../components/styledtext/styletext";
import { tableCellClasses } from "@mui/material/TableCell";

const Monthly = () => {
  const dataset = [
    { month: 1, revenue: 0 },
    { month: 2, revenue: 20000 },
    { month: 3, revenue: 15000 },
    { month: 4, revenue: 11000 },
    { month: 5, revenue: 15000 },
    { month: 6, revenue: 10000 },
    { month: 7, revenue: 40000 },
    { month: 8, revenue: 5000 },
    { month: 9, revenue: 8000 },
    { month: 10, revenue: 2000 },
    { month: 11, revenue: 1000 },
    { month: 12, revenue: 20000 },
  ];
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#202029",
      color: "white",
      fontSize: 16,
      fontWeight: 700,
      border: "1px solid #ffffff80",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      color: "white",
      border: "1px solid #ffffff80",
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#202029",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "rgba(45,45,57,1)",
    },
  }));

  function createData(name, calories) {
    return { name, calories };
  }

  const rows = [
    createData("11/10/2023", "2.8 ETH$"),
    createData("11/13/2023", "2.9 ETH$"),
    createData("16/1/2024", "2.2 ETH$"),
    createData("1/4/2024", "2.1 ETH$"),
    createData("11/10/2024", "6.8 ETH$"),
  ];

  return (
    <Stack
      sx={{
        backgroundColor: "#16161c",
      }}
      textAlign={"center"}
    >
      <Stack maxWidth={"1280px"} width={"100%"} my={"48px"} p={"48px 16px"} mx={"auto"}>
        <Stack mb={"48px"}>
          <Stack alignItems={"center"}>
            <Styletext fontsize={"40px"} text={"Monthly Revenue & Payouts"} />
          </Stack>

          <Typography fontSize={"16px"} color="#8671ff">
            Monthly Revenue & Payouts
          </Typography>
        </Stack>

        <Stack direction={{ md: "row", xs: "column" }} justifyContent={"space-between"}>    
          <Stack
            alignItems={'center'}
          >
            <LineChart
              dataset={dataset}
              sx={{
                '& .MuiChartsGrid-line': {
                  stroke: '#ffffff',
                  strokeWidth: 1,
                  opacity: 0.1,
                },
              }}
              slotProps={{ 
                legend: { hidden: true }
              }}
              xAxis={[
                {
                  dataKey: "month",
                  sx: {
                    stroke: '#ffffff80',              
                    '& .MuiChartsAxis-line': {
                      stroke: '#ffffff',
                      strokeWidth: 0.8,
                    },
                  },
                },
              ]}
              yAxis={[
                {
                  dataKey: "revenue",
                  sx: {
                    stroke: '#ffffff80',              
                    '& .MuiChartsAxis-line': {
                      stroke: '#ffffff',
                      strokeWidth: 0.8,
                    },
                  },
                },
              ]}
              series={[
                {
                  dataKey: "revenue",
                  label: "Monthly Revenue",
                  color: "#F7B801",
                  curve: "linear",
                },
              ]}
              height={408}
              width={800}
              grid={{
                vertical: true, 
                horizontal: true,
              }}
            />

            <Stack
              direction="row"
              alignItems="center"
              sx={{
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  width: 15,
                  height: 15,
                  backgroundColor: '#F7B801',
                  borderRadius: "50%",
                  marginRight: 1,
                }}
              />
              <Typography 
                fontSize="16px" 
                color="#ffffff" 
                >
                Monthly Revenue
              </Typography>
            </Stack>
          </Stack>
                  
          <Stack width={"432px"} p={"0 24px"}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 384 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell align="right">Payout</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={"16px"}
              color={"#DEDEDE"}
              mt={"24px"}
            >
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  p: "6px 12px",
                  borderColor: "#666692",
                  backgroundColor: "rgba(102,102,146,.8)",
                  borderRadius: "0.5rem",
                  textTransform: "none",
                  fontSize: "16px",
                  mx: "8px",
                  ":hover": {
                    backgroundColor: "#666692",
                    borderColor: "#666692",
                  },
                }}
              >
                Prevs
              </Button>
              Page 8 of 8
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  p: "6px 12px",
                  borderColor: "#666692",
                  backgroundColor: "rgba(102,102,146,.8)",
                  borderRadius: "0.5rem",
                  textTransform: "none",
                  fontSize: "16px",
                  mx: "8px",
                  ":hover": {
                    backgroundColor: "#666692",
                    borderColor: "#666692",
                  },
                }}
              >
                Next
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Monthly;
