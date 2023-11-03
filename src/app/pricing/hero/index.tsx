import React from "react";
import { Stack } from "@mui/material";
import { Divider } from "@mui/material";
import MainContainer from "@/components/container/main-container";
import Typography from "@/components/typography";
import MainSection from "@/components/section/main-section";


const PricingHero = () => {

  return (
    <>
      <MainSection
        bgColor={"gray[100] 20%"}
        bgImage={`url('/bg-icons.svg')`}
        bgSize={`cover`}
      >
        <MainContainer>
          <Stack
            spacing={4}
            justifyContent={`center`}
            alignItems={`center`}
            sx={{ height: 450 }}
          >
            <Typography type="heading" align="center" color="primary.main">
              Coming Soon
              {/* {heading} */}
            </Typography>
            {/* <Typography type="subtitle" color="primary.main" align="center">
              {description}
            </Typography> */}
          </Stack>
        </MainContainer>
      </MainSection>
      {/* <Divider
        variant="fullWidth"
        sx={{ boxShadow: "0px 2px 5px rgba(38, 50, 56, 0.1) 20%" }}
      /> */}
    </>
  );
};

export default PricingHero;
