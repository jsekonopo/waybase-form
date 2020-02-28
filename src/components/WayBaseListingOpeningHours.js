import React from "react";
import WayBaseSectionHeading from "./WayBaseSectionHeading";
import WayBaseDayHours from "./WayBaseDayHours";


export default function WayBaseListingOpeningHours(props) {
  const weekDays = [
    {day: "Sunday"},
    {day: "Monday"},
    {day: "Tuesday"},
    {day: "Wednesday"},
    {day: "Thursday"},
    {day: "Friday"},
    {day: "Saturday"},
  ];

  return (
    <React.Fragment>
      <WayBaseSectionHeading headingName="Hours" />
      { weekDays.map(dayOfTheWeek => <WayBaseDayHours day={dayOfTheWeek.day} />)}
    </React.Fragment>
  );
}
