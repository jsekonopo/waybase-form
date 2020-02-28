import React from 'react'
import WayBaseToggleButtonGroup from './WayBaseToggleButtonGroup'
import WayBaseLink from './WayBaseLink'
import WayBaseSectionHeading from './WayBaseSectionHeading';

export default function WayBaseProperty(props) {
    return (
        <React.Fragment>
            <WayBaseSectionHeading headingName="Property and Rentals" />
            <WayBaseToggleButtonGroup optionLabel="Does this listing own land and/or buildings?
" buttons = {['yes', 'no']} />
            <WayBaseLink linkType="Rental Link"/>
        </React.Fragment>
    );
}
