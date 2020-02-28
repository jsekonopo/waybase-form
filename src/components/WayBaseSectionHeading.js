import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function WayBaseSectionHeading(props) {
    return (
        <Typography variant="h6" gutterBottom>
            {props.headingName}
        </Typography>
    );
}