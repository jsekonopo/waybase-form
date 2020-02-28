import React from "react";
import Grid from "@material-ui/core/Grid";
import WayBaseAutoComplete from "./WayBaseAutoComplete";
import WayBaseSectionHeading from "./WayBaseSectionHeading";

export default function WayBaseListingKeyInformation(props) {
  return (
    <Grid container spacing={2}>
      <WayBaseSectionHeading headingName="Key Information" />
      <Grid item xs={12}>
        <WayBaseAutoComplete
          placeHolder="Cultural Background"
          isMultiple="yes"
          options={[{ title: "A title" }, { title: "A title" }]}
        />
      </Grid>
      <Grid item xs={12}>
        <WayBaseAutoComplete
          placeHolder="Languages We Offer Services In"
          isMultiple="yes"
          options={[{ title: "A title" }, { title: "A title" }]}
        />
      </Grid>

      <Grid item xs={12}>
        <WayBaseAutoComplete
          placeHolder="Ages Targeted"
          isMultiple="yes"
          options={[{ title: "A title" }, { title: "A title" }]}
        />
      </Grid>
      <Grid item xs={12}>
        <WayBaseAutoComplete
          placeHolder="Specialized in Serving"
          isMultiple="yes"
          options={[{ title: "A title" }, { title: "A title" }]}
        />
      </Grid>
    </Grid>
  );
}
