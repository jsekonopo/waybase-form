import React from 'react'
import WayBaseAutoComplete from './WayBaseAutoComplete';
import WayBaseSectionHeading from './WayBaseSectionHeading';

export default function WayBaseFaithStreams(props){

    const faithStreams = [
        {title: 'Anabaptist'},
        {title: 'Baptist'},
        {title: 'Catholic'},
        {title: 'Charismatic'},
        {title: 'Lutheran'},
        {title: 'Orthodox'},
    ]

    return (
        <React.Fragment>
            <WayBaseSectionHeading headingName="Faith Streams" />
            <WayBaseAutoComplete
                placeHolder="Select your stream"
                isMultiple="yes"
                options={faithStreams}
                label="Faith Streams"
            />
        </React.Fragment>
    );
}