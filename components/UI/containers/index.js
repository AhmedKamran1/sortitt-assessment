import { Box, styled } from "@mui/material";

export const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),

  [theme.breakpoints.down("md")]: {
    padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
  },
}));

export const PageContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.static.primary,
  boxShadow: "0px 0px 15px lightgrey",
  borderRadius: "20px",
  padding: theme.spacing(3),
  border: "1px solid transparent",
  cursor: "pointer",
  transition: "border 0.25s",

  "&:hover": {
    borderColor: theme.palette.primary.main,
  },

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

export const FlexContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
