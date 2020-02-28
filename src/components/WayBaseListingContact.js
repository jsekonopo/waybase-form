import React from "react";
import { TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import WayBaseLink from "./WayBaseLink";

export default function WayBaseListingContact(props) {
  return (
    <React.Fragment>
      <TextField
        fullWidth
        id="contactSalutaion"
        name="contactSalutation"
        label="Standard"
      />
      <TextField
        fullWidth
        id="firstName"
        name="SalutafirstName"
        label="First Name"
      />
      <TextField
        fullWidth
        id="lastName"
        name="lastName"
        label="Last Name"
      />
      <TextField
        fullWidth
        id="titlePosition"
        name="titlePosition"
        label="Title Position"
      />
      <TextField
        fullWidth
        id="contactEmail"
        name="contactEmail"
        label="Contact Email"
      />
      <TextField
        fullWidth
        id="contactPhoneNumber"
        name="contactPhoneNumber"
        label="Contact Phone Number"
      />
      <WayBaseLink linkType="Personal link(s)" />
      <FormControlLabel
        control={
          <Checkbox
            value="checkedB"
            color="primary"
          />
        }
        label="Senior Leader?"
      />
      <FormControlLabel
        control={
          <Checkbox
            value="checkedA"
            color="primary"
          />
        }
        label="Allow public profile?"
      />
    </React.Fragment>
  );
}
