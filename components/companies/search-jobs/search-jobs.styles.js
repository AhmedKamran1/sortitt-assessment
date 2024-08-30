import { styled } from "@mui/material";
import { FlexContainer, PrimaryButton } from "@/components/UI";

export const Fields = styled(FlexContainer)(({ theme }) => ({
  justifyContent: "left",
  gap: theme.spacing(2),
  flexWrap: "wrap",
  marginBottom: theme.spacing(2),
}));

export const SearchButton = styled(PrimaryButton)(({ theme }) => ({
  width: "250px",
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(3),
  },
}));

export const Filter = styled(FlexContainer)(({ theme }) => ({
  justifyContent: "left",
  gap: theme.spacing(0.5),
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(2),
  },
}));
