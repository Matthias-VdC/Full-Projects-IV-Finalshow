import React from "react";

type IProps = {
  time: string;
  title: string;
  desc: string;
};

export default function TimetableItem(props: IProps) {
  return (
    <>
      <div className="timetable-time">
        <p className="teletext yellow-text">{props.time}</p>
      </div>
      <div className="timetable-title">
        <p className="teletext cyan-text">{props.title}</p>
      </div>
      <div className="timetable-description">
        <p className="teletext white-text">{props.desc}</p>
      </div>
    </>
  );
}
