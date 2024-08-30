import { styled } from "@mui/material";
import { FlexContainer, Text } from "@/components/UI";

export const Hyperlink = styled(Text)(({ theme }) => ({
  display: "block",
  marginBottom: theme.spacing(1),
  color: "blue",
}));

export const Titles = styled(FlexContainer)(({ theme }) => ({
  justifyContent: "left",
  gap: theme.spacing(2),
  flexWrap: "wrap",
}));

export const Details = styled(FlexContainer)(({ theme }) => ({
  justifyContent: "left",
  gap: theme.spacing(3),
  flexWrap: "wrap",

  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(1.5),
  },
}));
