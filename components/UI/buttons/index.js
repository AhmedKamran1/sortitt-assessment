import { Button, styled } from "@mui/material";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "capitalize",
  borderRadius: "20px",
  padding: `${theme.spacing(1)} ${theme.spacing(4)} `,
  boxShadow: "none",
}));

PrimaryButton.defaultProps = {
  color: "primary",
  variant: "contained",
};
