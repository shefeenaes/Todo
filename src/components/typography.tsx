import React, { FC, ReactNode } from "react";
import MuiTypography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import theme from "@/styles/theme";

interface TypographyProps {
  children: ReactNode;
  otehr?: any;
  variant?:
    | "body1"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;
  sx?: any;
  color?: string;
  align?: "inherit" | "right" | "left" | "center" | "justify" | undefined;
  gutterBottom?: boolean;
  type?:
    | "heading"
    | "subheading"
    | "card-heading"
    | "description"
    | "description-large"
    | "list-item"
    | "subtitle"
    | undefined;
}

const Typography: FC<TypographyProps> = ({
  children,
  variant,
  sx,
  color,
  align,
  gutterBottom,
  type,
  ...other
}) => {
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (type === "heading") {
    return (
      <MuiTypography
        variant={mobileScreen ? "h3" : "h2"}
        sx={{ fontWeight: 700, color: color }}
        color={color}
        align={align}
        gutterBottom={gutterBottom}
        {...other}
      >
        {children}
      </MuiTypography>
    );
  }
  if (type === "subheading") {
    return (
      <MuiTypography
        variant="h3"
        sx={{ fontWeight: 700 }}
        color={color}
        align={align}
        gutterBottom={gutterBottom}
        {...other}
      >
        {children}
      </MuiTypography>
    );
  }
  if (type === "subtitle") {
    return (
      <MuiTypography
        variant={mobileScreen ? "subtitle2" : "subtitle1"}
        color={color}
        align={align}
        gutterBottom={gutterBottom}
        {...other}
      >
        {children}
      </MuiTypography>
    );
  }
  if (type === "card-heading") {
    return (
      <MuiTypography
        variant="h4"
        sx={{ fontWeight: 500, color: "primary.main" }}
        color={color}
        align={align}
        gutterBottom={gutterBottom}
        {...other}
      >
        {children}
      </MuiTypography>
    );
  }
  if (type === "description") {
    return (
      <MuiTypography
        variant="body1"
        color={color}
        align={align}
        gutterBottom={gutterBottom}
        {...other}
      >
        {children}
      </MuiTypography>
    );
  }
  if (type === "description-large") {
    return (
      <MuiTypography
        variant="body1"
        color={color}
        align={align}
        gutterBottom={gutterBottom}
        {...other}
      >
        {children}
      </MuiTypography>
    );
  }
  if (type === "list-item") {
    return (
      <MuiTypography
        variant="body1"
        color={color}
        align={align}
        gutterBottom={gutterBottom}
        {...other}
      >
        {children}
      </MuiTypography>
    );
  }

  return (
    <MuiTypography
      variant={variant}
      sx={sx}
      color={color}
      align={align}
      gutterBottom={gutterBottom}
      {...other}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
