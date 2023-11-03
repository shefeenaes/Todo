import React, { FC, ReactNode } from "react";
import { Card, CardContent } from "@mui/material";

interface CardSecondaryProps {
  children: ReactNode;
}

const CardSecondary: FC<CardSecondaryProps> = ({ children }) => {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(230, 230, 230, 0.5)",
        minHeight: 300,
        px: 6,
        borderRadius: 3,
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardSecondary;
