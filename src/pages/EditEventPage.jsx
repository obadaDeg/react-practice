import React from 'react'
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'

export default function EditEventPage() {
  const { event } = useRouteLoaderData('event-details')
  
  return (
    <EventForm event={event}/>
  )
}
