import { Container } from "@mui/system";
import React, { FC, ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
  sx?: any;
}

const MainContainer: FC<MainContainerProps> = ({ children, sx }) => {
  return (
    <Container maxWidth="lg" sx={sx}>
      {children}
    </Container>
  );
};

export default MainContainer;
