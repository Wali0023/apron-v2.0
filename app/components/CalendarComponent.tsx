"use client";
import { useState } from "react";

export default function CalendarComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const paddingArray = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const changeMonth = (offset: number) => {
    setCurrentDate(new Date(year, month + offset, 1));
  };

  const today = new Date();
  const isCurrentMonth =
    today.getMonth() === month && today.getFullYear() === year;

  return (
    <div className="mx-auto mt-20 w-full max-w-6xl overflow-hidden rounded-xl border border-slate-200">
      <div className="flex items-center justify-between border-b border-slate-200">
        <h2 className="text-lg font-bold text-slate-800">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => changeMonth(-1)}
            className="rounded-md p-1.5 text-slate-600 hover:bg-slate-200"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="rounded-md border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600"
          >
            Today
          </button>
          <button
            onClick={() => changeMonth(1)}
            className="rounded-md p-1.5 text-slate-600 hover:bg-slate-200"
          >
            →
          </button>
        </div>
      </div>
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          width: "100%",
        }}
      >
        {/* Labels */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="border-r border-b border-slate-200 bg-slate-100/50 py-2 text-center text-[10px] font-bold text-slate-500 uppercase"
          >
            {day}
          </div>
        ))}

        {/* Padding */}
        {paddingArray.map((i) => (
          <div
            key={`pad-${i}`}
            className="h-24 border-r border-b border-slate-100 bg-slate-50/30"
          />
        ))}

        {/* Days */}
        {daysArray.map((day) => {
          const isToday = isCurrentMonth && day === today.getDate();
          return (
            <div
              key={`day-${day}`}
              className="h-24 border-r border-b border-slate-300 p-2 text-right transition-colors hover:bg-orange-50"
            >
              <span
                className={`inline-block h-8 w-8 rounded-full text-center text-sm leading-8 ${
                  isToday
                    ? "bg-orange-500 font-bold text-white shadow-sm"
                    : "text-slate-600"
                }`}
              >
                {day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
