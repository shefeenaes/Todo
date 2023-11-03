import React, { FC, ReactNode } from "react";
import { Card } from "@mui/material";

interface PrimaryCardProps {
  children: ReactNode;
  sx?: any;
}

const PrimaryCard: FC<PrimaryCardProps> = ({ children, sx }) => {
  return <Card sx={sx}>{children}</Card>;
};

export default PrimaryCard;
