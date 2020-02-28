import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import WayBaseSectionHeading from './WayBaseSectionHeading';
import WayBaseToggleButtonGroup from './WayBaseToggleButtonGroup';

export default function WayBaseAddressForm() {
  return (
    <React.Fragment>
      <WayBaseSectionHeading headingName="Church Address"/>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            name="displayName"
            id="displayName"
            label="Display Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="country"
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <div>
            <WayBaseSectionHeading headingName="Address Type" />
            <WayBaseToggleButtonGroup buttons={['Mapped', 'Mailing', 'Office']}/>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
