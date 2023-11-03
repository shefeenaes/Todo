import React, { FC } from "react";
import { Card, CardContent, Stack } from "@mui/material";
import Typography from "../typography";

interface PlainIconCardProps {
  icon: any;
  heading: string;
  description: string;
}

const PlainIconCard: FC<PlainIconCardProps> = ({ icon, heading, description }) => {
  return (
    <Card sx={{ boxShadow: "none", minHeight: 250 }}>
      <CardContent>
        <Stack justifyContent={`center`} alignItems={`center`} spacing={2}>
          {icon}
          <Typography type="card-heading">{heading}</Typography>
          <Typography type="description">
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PlainIconCard;
