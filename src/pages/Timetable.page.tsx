import React from "react";
import VHS from "../components/VHS";

export default function Timetable() {
  return (
    <div className="timetable-container">
      <VHS color="pink" variation={1} title="intro" startTime="19:00" />
      <VHS color="white" variation={1} />
      <VHS color="red" variation={4} title="WEB & APP" startTime="19:03" />
      <VHS color="red" variation={1} title="uitreiking" rotate />
      <VHS color="white" variation={1} rotate />
      <VHS
        color="blue"
        variation={2}
        title="SMART TECHNOLOGY"
        startTime="19:07"
      />
      <VHS color="blue" variation={3} title="uitreiking" rotate />
      <VHS color="white" variation={1} />
      <VHS
        color="pink"
        variation={1}
        title="spel 1: spill your guts"
        startTime="19:12"
      />
      <VHS color="white" variation={1} rotate />
      <VHS color="orange" variation={1} title="MOTION" startTime="19:18" />
      <VHS color="orange" variation={2} title="uitreiking" rotate />
      <VHS color="white" variation={1} rotate />
      <VHS
        color="yellow"
        variation={3}
        title="EXTENDED REALITY"
        startTime="19:23"
      />
      <VHS color="yellow" variation={4} title="uitreiking" rotate />
      <VHS color="white" variation={1} />
      <VHS
        color="pink"
        variation={1}
        title="spel 2: lorem ipsum"
        startTime="19:25"
      />
      <VHS color="white" variation={1} rotate />
      <VHS
        color="pink"
        variation={1}
        title="HOOFDPRIJS"
        startTime="19:28"
        rotate
      />
      <VHS
        color="pink"
        variation={1}
        title="YOUNG POTENTIAL"
        startTime="19:34"
      />
      <VHS color="white" variation={1} rotate />
      <VHS color="pink" variation={1} title="outro" startTime="19:37" rotate />
    </div>
  );
}
