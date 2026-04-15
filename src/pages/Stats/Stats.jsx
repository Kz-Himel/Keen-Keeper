import React, { useContext, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { TimelineContext } from "../../context/TimelineContext";
import { Link } from "react-router-dom";

const COLORS = {
  text: "#8b5cf6",
  call: "#1f2937",
  video: "#10b981",
};

const Stats = () => {
  const { events } = useContext(TimelineContext);

  const analyticsData = useMemo(() => {
    const count = { text: 0, call: 0, video: 0 };

    events.forEach((event) => {
      const type = event.type?.toLowerCase();
      if (count[type] !== undefined) {
        count[type]++;
      }
    });

    return [
      { name: "Text", value: count.text, color: COLORS.text },
      { name: "Call", value: count.call, color: COLORS.call },
      { name: "Video", value: count.video, color: COLORS.video },
    ];
  }, [events]);

  // 🔥 check empty state
  const isEmpty = !events || events.length === 0;

  return (
    <div className="min-h-screen bg-zinc-100 py-8 px-4 sm:py-12 sm:px-6">
      <div className="max-w-[1110px] mx-auto w-full">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
          Friendship Analytics
        </h1>

        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 w-full">

          <p className="text-[#244d3f] font-bold text-base sm:text-lg mb-8 sm:mb-10">
            By Interaction Type
          </p>

          {/* 🔥 EMPTY STATE UI */}
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              
              <div className="text-6xl mb-4">📊</div>

              <h2 className="text-2xl font-bold text-zinc-700">
                No Analytics Data Yet
              </h2>

              <p className="text-zinc-500 mt-2 max-w-md">
                Start adding calls, texts, or video interactions to see your friendship analytics here.
              </p>

              <Link to={'/'}>
                <button className="mt-6 px-6 py-2 bg-[#244d3f] text-white rounded-full hover:bg-[#1d3d31] transition">
                Add First Interaction
              </button>
              </Link>

            </div>
          ) : (

            // 🔥 CHART UI
            <div className="flex flex-col items-center">

              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={analyticsData}
                      cx="50%"
                      cy="50%"
                      innerRadius="65%"
                      outerRadius="85%"
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                      activeIndex={undefined}
                      activeShape={null}
                      isAnimationActive={false}
                    >
                      {analyticsData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>

                    <Tooltip
                      cursor={{ fill: "transparent" }}
                      formatter={(value) => `${value}`}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-10">
                {analyticsData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <div
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-zinc-700 font-medium text-base sm:text-lg">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Stats;