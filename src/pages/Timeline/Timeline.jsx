import React from "react";
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

    if (filteredEvents.length === 0) {
      return <p className="text-gray-400">No events found</p>;
    }


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
        {filteredEvents.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No events found</p>
            <p className="text-gray-500 text-sm mt-2">
              {filterType !== "All"
                ? `No ${filterType} events available yet`
                : "Your timeline is empty. Start adding some interactions!"}
            </p>
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