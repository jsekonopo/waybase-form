import React from 'react'
import WayBaseListingImage from './WayBaseListingImage'
import WayBaseSectionHeading from './WayBaseSectionHeading'

export default function WayBaseListingImages(){
    return (
        <React.Fragment>
            <WayBaseSectionHeading headingName="Listing Images" />
            <WayBaseListingImage imageType="Logo" />
            <WayBaseListingImage imageType="Logo" />
        </React.Fragment>
    )
}