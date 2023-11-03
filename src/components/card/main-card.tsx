import React, { FC, ReactNode } from "react";
import { Card, CardContent } from "@mui/material";

interface MainCardProps {
  children: ReactNode;
  minHeight?: any;
  sx?: any;
  p?: number;
}

const MainCard: FC<MainCardProps> = ({ children, minHeight, sx, p }) => {
  return (
    <Card sx={sx}>
      <CardContent sx={{ minHeight: minHeight, p: p }}>{children}</CardContent>
    </Card>
  );
};

export default MainCard;
