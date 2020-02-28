import React from 'react';
import WayBaseAutocomplete from './WayBaseAutoComplete';


export default function WayBaseSecondaryCategories(props){

    return (
        <WayBaseAutocomplete 
            isMultiple="yes" 
            placeHolder="Select secondary categories" 
            options={props.options}
        />
    );
}