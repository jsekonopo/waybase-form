import React from "react";
import ChipInput from "material-ui-chip-input";
import WayBaseSectionHeading from "./WayBaseSectionHeading";

export default function WayBaseOrgStrengths(props) {
  return (
    <React.Fragment>
        <WayBaseSectionHeading headingName="Organization Strengths" />
      <ChipInput
        fullWidth
        fullWidthInput
        value={props.strengths}
      />
    </React.Fragment>
  );
}
