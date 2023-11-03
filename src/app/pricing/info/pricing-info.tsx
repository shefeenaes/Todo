import React from "react";
import MainContainer from "@/components/container/main-container";
import MainSection from "@/components/section/main-section";
import Typography from "@/components/typography";
import CustomTypography from "@mui/material/Typography";

import { Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "@/styles/theme";
const PricingInfoMessage = () => {

 

  return (
    <MainSection bgColor="primary.light" bgImage={`url('/bg-blue.svg')`} bgSize={`cover`}>
      <MainContainer>
        <Stack
          justifyContent={`center`}
          alignItems={`center`}
          sx={{ height: 400 }}
          spacing={3}
        >
          <Typography
            variant="h3"
            align="center"
            color="common.white"
            sx={{
              lineHeight: "32px",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            heading
          </Typography>
          <CustomTypography
          
            color="common.white"
         
            fontWeight={300}
          >
            description
          </CustomTypography>
        </Stack>
      </MainContainer>
    </MainSection>
  );
};

export default PricingInfoMessage;
