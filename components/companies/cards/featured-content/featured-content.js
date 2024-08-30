import React from "react";

// Styles
import * as Styles from "./featured-content.styles";
import { Text } from "@/components/UI";
import { Box, Chip, Divider } from "@mui/material";

// Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FeaturedContent = ({ company }) => {
  return (
    <React.Fragment>
      <Styles.Hyperlink variant="main">{company.link}</Styles.Hyperlink>
      <Styles.Titles>
        {company.jobTitles.map((title, index) => (
          <Chip
            color={index % 2 === 0 ? "secondary" : "ternary"}
            variant="filled"
            label={
              <Text variant="main" color="text.primary" fontWeight={600}>
                Apply as a {title}
              </Text>
            }
            onDelete={() => {}}
            deleteIcon={<ArrowForwardIcon />}
            sx={{
              padding: 1.5,
              "& .MuiChip-deleteIcon": {
                color: "text.primary",
              },
            }}
            key={title}
          />
        ))}
      </Styles.Titles>
      <Divider sx={{ mt: 4, mb: 4 }} />
      <Styles.Details>
        {company.jobDetails.map((detail) => (
          <Box key={detail.label} minWidth="120px">
            <Text
              variant="sub"
              color="text.ternary"
              sx={{ display: "block", mb: 0.5 }}
            >
              {detail.label}:
            </Text>
            <Text variant="sub" fontWeight={600}>
              {detail.value}
            </Text>
          </Box>
        ))}
      </Styles.Details>
      <Text variant="main" sx={{ display: "block", mt: 3, fontWeight: 700 }}>
        Job Descriptions
      </Text>
      <Text variant="body" sx={{ display: "block", mb: 1, mt: 2 }}>
        {`Job Title: ${company.jobTitles.join(", ")}`}
      </Text>
      <Text
        variant="body"
        color="text.ternary"
        sx={{ display: "block", lineHeight: 1.5 }}
      >
        {company.jobDescription.text}
      </Text>
      <Text
        variant="body"
        color="text.ternary"
        sx={{ display: "block", mt: 0.5, mb: 0.5 }}
      >
        Responsibilities:
      </Text>
      <Box component="ul" sx={{ ml: 3.5, lineHeight: 1.5 }}>
        {company.jobDescription.bullets.map((text, index) => (
          <Box
            component="li"
            sx={{ "&::marker": { color: "text.ternary" } }}
            key={index}
          >
            <Text variant="body" color="text.ternary">
              {text}
            </Text>
          </Box>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default FeaturedContent;
