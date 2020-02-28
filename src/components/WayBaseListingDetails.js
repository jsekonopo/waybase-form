import React from "react";
import Grid from "@material-ui/core/Grid";
import WayBaseListingKeyInformation from "./WayBaseListingKeyInformation";
import WayBaseProperty from "./WayBaseProperty";
import WayBaseOrgStrengths from "./WayBaseOrgStrengths";
import WayBaseListingOpeningHours from "./WayBaseListingOpeningHours";
import WayBaseListingProgramTimes from "./WayBaseListingProgramTimes";
import WayBaseFaithStreams from "./WayBaseFaithStreams";

export default function WayBaseListingDetails() {
  return (
    <Grid container spacing={3}>
      <Grid item md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <WayBaseListingKeyInformation />
          </Grid>
          <Grid item xs={12}>
            <WayBaseProperty />
          </Grid>
          <Grid item xs={12}>
            <WayBaseOrgStrengths />
          </Grid>
          <Grid item xs={12}>
            <WayBaseListingOpeningHours />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <WayBaseListingProgramTimes />
          </Grid>
          <Grid item xs={12}>
            <WayBaseFaithStreams />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
