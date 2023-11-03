import React, { ReactNode } from "react";
import PricingHero from "./hero";
import PricingInfoMessage from "./info/pricing-info";
import PriceSubscriptionPlan from "./subscription-plans/page";
import MainSection from "@/components/section/main-section";
import MainContainer from "@/components/container/main-container";
import { Box } from "@mui/system";
import Image from "next/image";


const Pricing: React.FC = () => {
  return (
    <>
         <MainSection
          bgImage={`url('/bg-price.svg')`}
          bgSize={`cover`}
          minHeight={700}
        >
          <Box sx={{ position: "relative", height: 550 }}>
            <Box
              sx={{
                position: "absolute",
                left: -10,
                bottom: -120,
                transform: `scaleY(-1) scaleX(-1)`,
              }}
            >
              <Image src={`/bg-left-arrow.svg`} alt="arrow" width={80} height={150} />
            </Box>
            <Box sx={{ position: "absolute", right: -10, top: -35 }}>
              <Image src={`/bg-left-arrow.svg`} alt="arrow" width={80} height={150} />
            </Box>
            <MainContainer>
        <PriceSubscriptionPlan />
        </MainContainer>
          </Box>
        </MainSection>
    </>
  );
};

export default Pricing;
