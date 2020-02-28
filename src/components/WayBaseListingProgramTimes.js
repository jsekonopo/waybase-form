import React from "react";
import WayBaseSectionHeading from "./WayBaseSectionHeading";
import WayBaseAutoComplete from "./WayBaseAutoComplete";
import { Grid, TextField } from "@material-ui/core";
import WayBaseTimePicker from "./WayBaseTimePicker";

export default function WayBaseListingProgramTimes() {
  const weekDays = [
    { day: "Sunday", value: 7 },
    { day: "Monday", value: 1 },
    { day: "Tuesday", value: 2 },
    { day: "Wednesday", value: 3 },
    { day: "Thursday", value: 4 },
    { day: "Friday", value: 5 },
    { day: "Saturday", value: 6 }
  ];

  const programTypes = [
      {title: "Service Times" },
      {title: "Mass Times" },
      {title: "Mass And Sacraments" },
      {title: "Mass, Sarcraments and Devotions" },
      {title: "Program Times" }
  ];

  return (
    <React.Fragment>
      <WayBaseSectionHeading headingName="Service/Mass Program Times" />
      <Grid container spacing={2}>
        <Grid margin="normal" item xs={12}>
          <WayBaseAutoComplete isMultiple="yes" options={weekDays} />
        </Grid>
        <Grid margin="normal" item md={6}>
          <WayBaseTimePicker hour="Start Time" />
        </Grid>
        <Grid margin="normal" item md={6}>
          <WayBaseTimePicker hour="End Time" />
        </Grid>
        <Grid margin="normal" item md={12}>
          <TextField
            fullWidth
            id="serviceTitle"
            name="serviceTitle"
            label="Service Title"
            placeholder="Title of the service"
          />
        </Grid>
        <Grid margin="normal" item md={12}>
          <TextField
            fullWidth
            id="serviceProgramDescription"
            label="Basic Description"
            multiline
            rows="15"
            placeholder="A description the service or program"
          />
        </Grid>
        <Grid margin="normal" item md={12}>
            <WayBaseAutoComplete label="Program title" isMultiple="no" options={programTypes} placeHolder="Choose program to Display on Your Listing" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
