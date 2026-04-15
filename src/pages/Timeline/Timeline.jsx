import React from "react";
import { Handshake, MessageCircle, Video, Phone } from "lucide-react";
import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";

const Timeline = () => {

    const { events } = useContext(TimelineContext);


  return (
    <div className="container mx-auto p-4">
      <div className="mx-auto p-8 bg-slate-50  text-slate-800">
        <h1 className="text-4xl font-bold mb-6">Timeline</h1>

        <select
          defaultValue=""
          className="select select-bordered w-full max-w-xs mb-8 bg-white border-slate-200"
        >
          <option value="" disabled>
            Filter timeline
          </option>
          <option value="All">All entries</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
          <option value="Meetup">Meetup</option>
        </select>

        <div className="flex flex-col gap-3">
          {
          events.map((event, index) => (
            <div
              key={index}
              className="card flex-row items-center gap-4 p-5 bg-white border border-slate-100 shadow-sm"
            >
              <div className="text-2xl">{event.icon}</div>
              <div>
                <p className="text-slate-600 font-medium">
                  <span className="text-slate-900 font-bold">{event.type}</span>{" "}
                  with {event.person}
                </p>
                <p className="text-slate-400 text-sm">{event.date}</p>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Timeline;