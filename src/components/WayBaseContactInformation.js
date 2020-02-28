import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import WayBaseAddressForm from "./WayBaseAddressForm";
import WayBaseContactDetails from "./WayBaseContactDetails";
import WayBaseSectionHeading from './WayBaseSectionHeading';
import WayBaseLink from './WayBaseLink';    

export default class WayBaseContactInformation extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item md={4}>
          <WayBaseAddressForm />
        </Grid>
        <Grid item md={4}>
          <WayBaseContactDetails />
        </Grid>
        <Grid item md={4}>
          <Grid item xs={12}>
            <WayBaseSectionHeading headingName="Donation Link" />
          </Grid>
          <WayBaseLink />
          <Grid item xs={12}>
            <WayBaseSectionHeading headingName="Careers Link" />
          </Grid>
          <WayBaseLink />
        </Grid>
      </Grid>
    );
  }
}
