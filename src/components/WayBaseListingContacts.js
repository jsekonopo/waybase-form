import React from 'react'
import WayBaseSectionHeading from './WayBaseSectionHeading';
import WayBaseListingContactList from './WayBaseListingContactList'

export default function WayBaseListingContacts(props) {
    return (
        <React.Fragment>
            <WayBaseSectionHeading headingName="Listing Contacts" />
            <WayBaseListingContactList />
        </React.Fragment>
    )
}