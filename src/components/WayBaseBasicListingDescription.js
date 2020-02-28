import React from "react";
import TextField from "@material-ui/core/TextField";

export default function WayBaseBasicListingDescription(props) {
  return (
    <TextField
      fullWidth
      id="listingBasicDescription"
      label="Basic Description"
      multiline
      rows="15"
      placeholder="A basic description of the listing"
    />
  );
}
