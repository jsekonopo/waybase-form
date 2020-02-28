import React from "react";
import {
  TableRow,
  TableCell,
  Switch,
  FormControlLabel
} from "@material-ui/core";
import WayBaseTimePicker from "./WayBaseTimePicker";

export default function WayBaseDayHours(props) {
  const [checked, setChecked] = React.useState(false);
  const [twentyFour, setTwentyFour] = React.useState(false);

  const toggleChecked = () => {
    setChecked(prev => !prev);
  };

  const toggleTwentyFour = () => {
    setTwentyFour(prev => !prev);
  };
  return (
    <TableRow>
      <TableCell>{props.day}</TableCell>
      <TableCell>
        <FormControlLabel
          control={
            <Switch size="small" checked={checked} onChange={toggleChecked} />
          }
          label={checked ? "Open" : "Closed"}
        />
      </TableCell>
      {!checked ? (
        <TableCell>
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={twentyFour}
                onChange={toggleTwentyFour}
              />
            }
            label={"24hrs"}
          />
        </TableCell>
      ) : (
        <TableCell></TableCell>
      )}
      {!twentyFour ? (
        <React.Fragment>
          <TableCell>
            <WayBaseTimePicker hour="Opening Hour" />
          </TableCell>
          <TableCell>
            <WayBaseTimePicker hour="Closing Hour" />
          </TableCell>
        </React.Fragment>
      ) : null }
    </TableRow>
  );
}
