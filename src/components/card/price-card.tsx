'use client'
import React, { FC } from "react";
import { grey } from "@mui/material/colors";
import { alpha, Box } from "@mui/system";
import Typography from "../typography";
import { Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { WarningButton } from "../button";

interface PriceCardProps {
  heading: string;
  description: string;
  currencyIcon: string;
  amount: string;
  duration: string;
  listItem: any;
  buttonText: string;
  greyBoxHeight?: number;

}
interface PriceCardWithSpaceProps {
  heading: string;
  description: string;
  currencyIcon: string;
  amount: string;
  duration?: string; // Make duration optional
  listItemts?: any[]; // Make listItemts optional
  buttonText: string;
  greyBoxHeight?: number;
  index?: number;
}



const PriceCard: FC<PriceCardProps> = ({
  heading,
  description,
  currencyIcon,
  amount,
  duration,
  listItem,
  buttonText,
  greyBoxHeight,

}) => {
  return (
    <Box sx={{ border: 1, borderRadius: "10px", borderColor: "#E9EEBD" }}>
      <Box sx={{ backgroundColor:"rgba(245, 245, 245, 0.5)", p: 3, height: greyBoxHeight }}>
        
        <Stack spacing={1}>
          <Typography variant="h4" sx={{fontWeight:500}} align="center" color="#034A75" >
            {heading}
          </Typography>
          <Typography type="description" align="center" color="#034A75">
            {description}
          </Typography>
          <Stack direction={`row`} justifyContent={`center`} alignItems={`center`} sx={{color:"#034A75"}}>
            <Typography variant="h3">
              {currencyIcon + amount}
            </Typography>
            <Typography variant="body1">{duration && `/${duration}`}</Typography>
          </Stack>
        </Stack>
 
      </Box>
      <Box sx={{ p: 2 }}>
        <Stack direction={`column`} spacing={2}>
          {listItem.map((item: any, index: number) => (
            <Stack direction={`row`} spacing={1} key={index}>
              <CheckCircleOutlineIcon sx={{ color: grey[500] }} />
              <Typography type="list-item">{item.text}</Typography>
            </Stack>
          ))}
          <Stack alignItems={`center`}>
            <WarningButton
              variant="outlined"
              size="large"
              sx={{
                width: 200,
                border: 2,
                "&:hover": {
                  border: 2,
                  transform: "scale(1.1)",
                },
                textTransform: "none",
              }}
            >
              {buttonText}
            </WarningButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
const PriceCardWithSpace: FC<PriceCardWithSpaceProps> = ({
  heading,
  description,
  currencyIcon,
  amount,
  duration,  // Corrected variable name
  listItemts,  // Corrected variable name
  buttonText,
  greyBoxHeight,
  index
}) => {
  return (
    <Box sx={{ border: 1, borderRadius: "10px", borderColor: "#E9EEBD" }}>
      <Box sx={{ backgroundColor: alpha("#f5f5f5", 0.5), p: 3, height: greyBoxHeight }}>
        <Stack spacing={index === 0 ? 2.3 : 1}>
          <Typography variant="h4" sx={{ fontWeight: 500 }} align="center" color="#034A75">
            {heading} 
          </Typography>
          <Typography type="description" align="center" color="#034A75">
            {description}
          </Typography>
          <Stack direction={`row`} justifyContent={`center`} alignItems={`center`} sx={{ color: "#034A75" }}>
            <Typography variant="h3">
              {currencyIcon + amount}
            </Typography>
            <Typography variant="body1">{duration && `/${duration}`}</Typography>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ p: 2 }}>
        <Stack direction={`column`} spacing={2}>
        {listItemts?.map((item: any, index: number) => (
  <Stack direction={`row`} spacing={1} key={index}>
    <CheckCircleOutlineIcon sx={{ color: grey[500] }} />
    <Typography type="list-item">{item.text}</Typography>
  </Stack>
))}
          <Stack alignItems={`center`}>
            <WarningButton
              variant="outlined"
              size="large"
              sx={{
                width: 200,
                border: 2,
                "&:hover": {
                  border: 2,
                  transform: "scale(1.1)",
                  borderColor: "#F4CA40",
                },
                textTransform: "none",
                color: "#0C0B0B",
                borderColor: "#F4CA40",
              }}
            >
              {buttonText}
            </WarningButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};


export {  PriceCardWithSpace };

export default PriceCard;
