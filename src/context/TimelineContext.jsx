import { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({children}) => {
    const [events, setEvents] = useState([]);

    const addEvent = (newEvent) => {
        setEvents((prev) => [newEvent, ...prev]);
    };

    return (
        <TimelineContext.Provider value={{events, addEvent}}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;