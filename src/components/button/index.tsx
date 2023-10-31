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
export const OutlinedButton: FC<ButtonProps> = ({
  children,
  size = "small",
  ...other
}) => {
  return (
    <Button variant="outlined" color="inherit" size="small" sx={{ mx: 1 }} {...other}>
      {children}
    </Button>
  );
};

export const WarningButton: FC<ButtonProps> = ({
  children,
  size = "large",
  variant = "contained",
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

      sx={{
        width: 200,
        border: 2,
        backgroundColor: "#F4CA40",
        "&:hover": {
          border: 2,
          transform: "scale(1.1)",
          borderColor: "#F4CA40",
          backgroundColor: "#F4CA40", // Background color on hover
        },
        textTransform: "none",
        color: "black",
        borderColor: "#F4CA40",
        transition: "transform 0.3s ease",
        fontFamily: "GilroyBold",
        ...other.sx, // Merge any additional styles passed through the 'sx' prop
      }}
      {...other}
      onClick={onClick}
      type="submit"
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
export const EmailSectionButton: FC<ButtonProps> = ({ children, ...other }) => {
  return (
    <Button
      variant="contained"
      color="warning"
      sx={{ height: 50, backgroundColor: "#f4ca40", mb: 1 }}
    >
      {children}
    </Button>
  );
};
