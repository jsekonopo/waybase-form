import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Typography } from "@material-ui/core";

export default function WayBaseToggleButtonGroup(props) {
  return (
    <React.Fragment>
      <Typography variant="subtitle1">{props.optionLabel ? props.optionLabel : '' }</Typography>
      <ToggleButtonGroup value="" exclusive aria-label="text alignment">
        {props.buttons.map(buttonName => (
          <ToggleButton value="left" aria-label="left aligned">
            {buttonName}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </React.Fragment>
  );
}
