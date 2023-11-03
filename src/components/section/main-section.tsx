import React, { FC, ReactNode } from "react";
import { Box } from "@mui/system";

interface MainSectionProps {
  children: ReactNode;
  bgColor?: string;
  minHeight?: number | object;
  bgImage?: string;
  bgSize?: string;
  paddingBottom?: string;
  minWidth?:number | object;
}

const MainSection: FC<MainSectionProps> = ({
  children,
  bgColor,
  minHeight = 450,
  minWidth= 450,
  bgImage,
  bgSize,
}) => {
  return (
    <Box
    sx={{
      minHeight: minHeight,
      minWidth: minWidth,
      py: { xs: 2, md: 4 },
      px: { xs: 1, md: 0 },
      backgroundColor: bgColor,
      backgroundImage: bgImage,
      backgroundSize: bgSize,
      backgroundRepeat: "no-repeat",
    }}
  >
    {children}
  </Box>
  );
};

export default MainSection;
