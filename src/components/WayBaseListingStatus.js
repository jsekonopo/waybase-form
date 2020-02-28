import React from 'react';
import WayBaseToggleButtonGroup from './WayBaseToggleButtonGroup';
import WayBaseDatePicker from './WayBaseDatePicker';

export default function WayBaseListingStatus(){
    const buttons = [
        'ACTIVE',
        'DEVELOPMENT',
        'PROPOSED',
        'CLOSING',
        'CLOSED'
    ];
    return (
        <React.Fragment>
            <WayBaseToggleButtonGroup buttons={buttons}/>
            <WayBaseDatePicker dateLabel="Date Founded"/>   
        </React.Fragment>
    )
}