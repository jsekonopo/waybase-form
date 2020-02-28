import React from "react";
import Grid from "@material-ui/core/Grid";
import WayBaseFaithTraditions from "./WayBaseFaithTraditions";
import WayBaseListingStatus from "./WayBaseListingStatus";
import WayBaseSectionHeading from "./WayBaseSectionHeading";
import WayBaseCommonName from "./WayBaseCommonName";
import WayBasePrimaryReach from "./WayBasePrimaryReach";
import WayBasePrimaryCategory from "./WayBaseListingPrimaryCategory";
import WayBaseSecondaryCategories from "./WayBaseSecondaryCategories";
import WayBaseBasicListingDescription from "./WayBaseBasicListingDescription";

export default function WayBaseListingBasics(props) {
  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <WayBaseSectionHeading headingName="The Basics" />
            <WayBaseCommonName />
          </Grid>
          <Grid item xs={8}>
            <WayBaseFaithTraditions />
          </Grid>
          <Grid item xs={8}>
            <WayBasePrimaryReach />
          </Grid>
          <Grid item xs={12}>
            <WayBaseListingStatus />
          </Grid>
          <Grid item xs={12}>
            <WayBaseSectionHeading headingName="Primary Category" />
          </Grid>
          <Grid item xs={8}>
            <WayBasePrimaryCategory
              options={[
                { title: "The Shawshank Redemption", year: 1994 },
                { title: "The Godfather", year: 1972 }
              ]}
            />
          </Grid>
          <Grid item xs={12}>
             <WayBaseSectionHeading headingName="Secondary Categories" />
          </Grid>
          <Grid item xs={8}>
            <WayBaseSecondaryCategories options={ [ { 'title': 'A secondary category'}, {'title': 'Another category'}] }/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6}>
        <Grid container>
          <WayBaseSectionHeading headingName="Basic Listing Description" />
          <Grid item xs={12}>
          <WayBaseBasicListingDescription />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
