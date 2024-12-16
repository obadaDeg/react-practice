import React from "react";
import EventForm from "../components/EventForm";
import { redirect } from "react-router-dom";

export default function NewEventPage() {
  return <EventForm />;
}

export async function newEventAction({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    console.log(response);
    
    throw new Response("Could not save events.", { status: 500 });
  }

  return redirect('/events')
}
