import { Button } from "@mui/material";
import { FC, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  size?: "small" | "medium" | "large" | undefined;
  sx?: any;
  other?: any;
  variant?: "text" | "contained" | "outlined" | undefined;
  onClick?: () => void;
  bttype?: string;
  disabled?: boolean;
}

export const PrimaryButton: FC<ButtonProps> = ({ children }) => {
  return (
    <Button variant="contained" color="primary" sx={{ mx: 1 }}>
      {children}
    </Button>
  );
};




