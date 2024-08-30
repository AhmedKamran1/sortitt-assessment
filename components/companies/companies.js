import React, { useState } from "react";

// Styles
import { Grid } from "@mui/material";

// Utils
import { companies } from "@/utils/constants";

// Components
import Cards from "./cards/cards";
import SearchJobs from "./search-jobs/search-jobs";

const Companies = () => {
  const [companiesList, setCompaniesList] = useState(companies);

  const searchHandler = (role, location) => {
    const filteredCompanies = companies.filter(
      (company) =>
        company.jobTitles.some((title) =>
          title.toLowerCase().includes(role.toLowerCase())
        ) && company.location.toLowerCase().includes(location.toLowerCase())
    );

    setCompaniesList(filteredCompanies);
  };

  return (
    <React.Fragment>
      <SearchJobs searchHandler={searchHandler} />
      <Grid
        container
        columnSpacing={2}
        rowSpacing={2}
        sx={{ flexWrap: "wrap-reverse" }}
      >
        <Grid
          item
          xs={12}
          md={companiesList.length === 1 ? 12 : companiesList.length === 2 ? 4 : 4}
        >
          <Cards isFeatured={false} companies={companiesList} />
        </Grid>
        <Grid
          item
          xs={12}
          md={companiesList.length === 1 ? 12 : companiesList.length === 2 ? 8 : 8}
        >
          <Cards isFeatured={true} companies={companiesList} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Companies;
