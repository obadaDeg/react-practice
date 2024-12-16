import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  //   const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  //   useEffect(() => {
  //     async function fetchEvents() {
  //       setIsLoading(true);
  //       const response = await fetch("http://localhost:8080/events");

  //       if (!response.ok) {
  //         setError("Fetching events failed.");
  //       } else {
  //         const resData = await response.json();
  //         setFetchedEvents(resData.events);
  //       }
  //       setIsLoading(false);
  //     }

  //     fetchEvents();
  //   }, []);

  //   const events = useLoaderData();
  const { events } = useLoaderData();

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && events && <EventsList events={events} />}
    </>
  );
}

export default EventsPage;

export async function fetchEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could Not fetch events." }), {
      status: 500,
    });
  } else {
    // const resData = await response.json();
    // return resData.events;
    return await response.json();
  }
}
