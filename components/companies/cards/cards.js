import React from "react";
import Image from "next/image";

// Styles
import { FlexContainer, PageContent, Text } from "@/components/UI";
import { Box, Grid } from "@mui/material";

// Components
import FeaturedContent from "./featured-content/featured-content";
import NonFeaturedContent from "./non-featured-content/non-featured-content";

const Cards = ({ companies, isFeatured }) => {
  return (
    <Grid container rowSpacing={2}>
      {companies.map(
        (company, index) =>
          company.isFeatured === isFeatured && (
            <Grid item xs={12} key={index}>
              <PageContent>
                <FlexContainer sx={{ justifyContent: "left", gap: 3, mb: 2 }}>
                  <Image
                    src={"/assets/amazon-pic.png"}
                    alt={`company-${company.name}`}
                    height={isFeatured ? 80 : 50}
                    width={isFeatured ? 80 : 50}
                  />
                  <Box>
                    <Text
                      variant={isFeatured ? "header" : "subHeader"}
                      sx={{ display: "block", fontWeight: 700, mb: 1 }}
                    >
                      {company.name}
                    </Text>
                    <Text
                      variant={isFeatured ? "subHeader" : "main"}
                      color="text.ternary"
                    >
                      {company.location}
                    </Text>
                  </Box>
                </FlexContainer>
                {isFeatured ? (
                  <FeaturedContent company={company} />
                ) : (
                  <NonFeaturedContent company={company} />
                )}
              </PageContent>
            </Grid>
          )
      )}
    </Grid>
  );
};

export default Cards;
