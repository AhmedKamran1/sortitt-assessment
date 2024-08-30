import React from "react";

// Styles
import * as Styles from "./non-featured-content.styles";
import { FlexContainer, PrimaryButton, Text } from "@/components/UI";
import { Chip } from "@mui/material";

const NonFeaturedContent = ({ company }) => {
  return (
    <React.Fragment>
      <Styles.Details>
        {company.jobDetails.map(
          (detail) =>
            detail.view && (
              <FlexContainer gap={0.5} key={detail.value}>
                {detail.icon}
                <Text variant="sub">{detail.value}</Text>
              </FlexContainer>
            )
        )}
      </Styles.Details>
      <Text variant="main" sx={{ display: "block", mt: 2, mb: 0.5 }}>
        Hiring
      </Text>
      <Styles.Titles>
        {company.jobTitles.map((title, index) => (
          <Chip
            color={index % 2 === 0 ? "secondary" : "ternary"}
            variant="outlined"
            label={title}
            key={title}
          />
        ))}
      </Styles.Titles>
      <Text variant="body" sx={{ display: "block", mb: 0.5, mt: 1.5 }}>
        Company Info:
      </Text>
      <Text variant="sub" color="text.ternary">
        {company.jobDescription.text.slice(0, 125)}...
        <Text variant="body" color="text.ternary">
          learn more
        </Text>
      </Text>
      <FlexContainer sx={{ justifyContent: "space-between", mt: 4 }}>
        <PrimaryButton>
          <Text variant="sub">Learn more</Text>
        </PrimaryButton>
        <Text variant="sub">46 minutes ago</Text>
      </FlexContainer>
    </React.Fragment>
  );
};

export default NonFeaturedContent;
