import React, { FC, ReactNode } from "react";
import { Card, CardContent } from "@mui/material";

interface GreyCardProps {
  sx?: any;
  children: ReactNode;
}

const DefaultCard: FC<GreyCardProps> = ({ sx, children }) => {
  return (
    <Card sx={sx}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default DefaultCard;
