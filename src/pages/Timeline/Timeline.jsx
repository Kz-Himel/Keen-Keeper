import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { TimelineContext } from "../../context/TimelineContext";

const Timeline = () => {

    const { events } = useContext(TimelineContext);
    const [filterType, setFilterType] = useState("All");

    const getFilteredEvents = () => {
    if (filterType === "All") return events;
    return events.filter((event) => event.type === filterType);
    };

    const filteredEvents = getFilteredEvents();

    const isEmpty = !filteredEvents || filteredEvents.length === 0;


  return (

    <div className="container mx-auto p-4">
      <div className="mx-auto p-8 bg-slate-50  text-slate-800">
        <h1 className="text-4xl font-bold mb-6">Timeline</h1>

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="select select-bordered w-full max-w-xs mb-8 bg-white border-slate-200"
        >
          <option value="All">All entries</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>

        {/* Empty State */}
        {isEmpty ? (
          <div className="flex items-center justify-center py-20">
  <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-10 max-w-md w-full text-center">

    {/* Icon */}
    <div className="text-6xl mb-4">🕒</div>

    {/* Title */}
    <h2 className="text-2xl font-bold text-slate-800">
      No Timeline Events Yet
    </h2>

    {/* Subtitle */}
    <p className="text-slate-500 mt-3 text-sm leading-relaxed">
      Your friendship timeline is empty right now.  
      Start adding calls, texts, or video interactions to see your history here.
    </p>

    {/* Small hint box */}
    <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
      💡 Tip: Every interaction you add will appear in your timeline instantly.
    </div>

    {/* Button */}
    <Link to="/">
      <button className="mt-6 w-full py-2.5 bg-[#244d3f] text-white rounded-xl hover:bg-[#1d3d31] transition font-medium">
        Add First Interaction
      </button>
    </Link>

  </div>
</div>
        ) : (
          /* Events List */
          <div className="flex flex-col gap-4">
            {filteredEvents.map((event, index) => (
              <div
                key={index} // পরে event.id ব্যবহার করলে ভালো হবে
                className="flex items-center gap-4 p-5 bg-white border border-slate-100 shadow-sm rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="text-3xl">{event.icon}</div>
                <div className="flex-1">
                  <p className="text-slate-700 font-medium">
                    <span className="font-bold capitalize">{event.type}</span>{" "}
                    with <span className="font-semibold">{event.person}</span>
                  </p>
                  <p className="text-slate-400 text-sm mt-1">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;