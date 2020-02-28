import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import WayBaseSectionHeading from "./WayBaseSectionHeading";
import WayBaseLink from './WayBaseLink';


export default function WayBaseContactDetails() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <WayBaseSectionHeading headingName="Phones And Emails" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="phoneName"
            label="Phone Name"
            name="text"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="telePhone"
            label="Phone Number"
            type="tel"
            id="telePhone"
          />
        </Grid>
        <Grid item xs={12}>
            <WayBaseSectionHeading headingName="Website Links" />
        </Grid>
        <WayBaseLink requiresPrimary="yes" />
      </Grid>
    </Container>
  );
}
