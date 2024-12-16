import React from "react";
import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const { event } = useRouteLoaderData("event-details");
  return <EventItem event={event} />;
}

export async function fetchEventDetails({ request, params }) {
  const response = await fetch(`http://localhost:8080/events/${params.id}`);

  if (!response.ok) {
    throw new Response("Could not fetch this event", {
      status: 500,
    });
  } else {
    return response;
  }
}

export async function deleteEventAction({ request, params }) {
  const response = await fetch(`http://localhost:8080/events/${params.id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response("Could not fetch this event", {
      status: 500,
    });
  } else {
    return redirect('/events');
  }
}
