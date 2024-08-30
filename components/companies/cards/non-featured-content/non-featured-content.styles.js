import { styled } from "@mui/material";
import { FlexContainer } from "@/components/UI";

export const Details = styled(FlexContainer)(({ theme }) => ({
  justifyContent: "left",
  gap: theme.spacing(2),
  flexWrap: "wrap",
}));

export const Titles = styled(FlexContainer)(({ theme }) => ({
  justifyContent: "left",
  gap: theme.spacing(1),
  flexWrap: "wrap",
}));
