import React from 'react';
import WayBaseAutoComplete from './WayBaseAutoComplete';


export default function WayBasePrimaryReach() {

    const primaryReach = [
        { title: 'Local', value: 'local' },
        { title: 'Regional', value: 'regional' },
        { title: 'National', value: 'national' },
        { title: 'International', value: 'international' },
    ]

  return (
    <React.Fragment>
        <WayBaseAutoComplete options={primaryReach} isMultiple="no" placeHolder="Primary Reach"/>
    </React.Fragment>
  );
}
