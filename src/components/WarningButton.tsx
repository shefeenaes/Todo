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
export const WarningButton: FC<ButtonProps> = ({
    children,
    size = "small",
    variant = "contained",
    sx = { mx: 1, color: "#0C0B0B", textTransform: "none" },
    onClick,
    bttype = "submit",
    disabled,
    ...other
  }) => {
    return (
      <Button
        variant={variant}
        color="warning"
        size={size}
        sx={sx}
        {...other}
        onClick={onClick}
        type="submit"
        disabled={disabled}
      >
        {children}
      </Button>
    );
  };