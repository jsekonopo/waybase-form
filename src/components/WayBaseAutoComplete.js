import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function WayBaseAutoComplete(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     { props.isMultiple ==='yes' ?
        <Autocomplete
        multiple
        id="tags-outlined"
        options={props.options}
        getOptionLabel={option => option[Object.keys(option)[0]]}
        defaultValue={[props.options[0]]}
        filterSelectedOptions
        renderInput={params => (
          <TextField
            {...params}
            // variant="outlined"
            label={props.label}
            placeholder={props.placeHolder}
          />
        )}
      />
      : 

      <Autocomplete
        id="tags-outlined"
        options={props.options}
        getOptionLabel={option => option.title}
        defaultValue={[props.options[1]]}
        filterSelectedOptions
        renderInput={params => (
          <TextField
            {...params}
            // variant="outlined"
            label={props.label}
            placeholder={props.placeHolder}
          />
        )}
      />
    }
    </div>
  );
}