import React, { useState } from "react";

// Styles
import * as Styles from "./search-jobs.styles";
import { InputAdornment } from "@mui/material";
import { InputField } from "@/components/UI";
import { Text } from "@/components/UI";

// Icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const SearchJobs = ({ searchHandler }) => {
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");

  return (
    <React.Fragment>
      <Styles.Fields>
        <InputField
          variant="outlined"
          placeholder="Enter Job Title"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          sx={{ maxWidth: "500px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <InputField
          variant="outlined"
          placeholder="Enter Company Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          sx={{ maxWidth: "350px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
          }}
        />
      </Styles.Fields>
      <Styles.SearchButton onClick={() => searchHandler(role, location)}>
        <Text variant="sub">Find Tasks</Text>
      </Styles.SearchButton>
      <Styles.Filter>
        <FilterAltOutlinedIcon />
        <Text variant="body">
          Sort by: Relevance
        </Text>
      </Styles.Filter>
    </React.Fragment>
  );
};

export default SearchJobs;
