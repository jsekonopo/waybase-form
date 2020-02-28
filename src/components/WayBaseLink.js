import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

export default function WayBaseLink(props) {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography variant="overline">{props.linkType ? props.linkType : 'Link URL' }</Typography>
        <TextField id="wayBaseLink" placeholder="https://example.com" fullWidth />
        { props.requiresPrimary ? 
        <FormControlLabel
            control={
            <Checkbox color="primary"/>
            }
            label="Make Primary"
        /> : '' }
      </Grid>
    </React.Fragment>
  );
}
