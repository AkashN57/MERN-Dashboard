import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import OverviewChart from "../../components/OverviewChart";
import Header from "components/Header";

const Overview = () => {
  const [view, SetView] = useState("units");
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="OVERVIEW"
        subtitle="Overview of General Revenue and Profit"
      />
      <Box height="70vh">
        <FormControl sx={{ mt: "1rem",mb:'1rem' }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            onChange={(e) => SetView(e.target.value)}
            label="View"
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
