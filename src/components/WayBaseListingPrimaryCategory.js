import React from 'react';
import WayBaseAutoComplete from './WayBaseAutoComplete';

/**
 * 
 * @param {*} props 
 * 
 */

export default function WayBasePrimaryCategory(props) {
    
  return (
    <WayBaseAutoComplete isMultiple="no" placeHolder="Choose primary category" options={props.options} label="Primary Category"/>
  );
}