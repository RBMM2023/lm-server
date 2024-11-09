//client/calendar.js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

document.addEventListener('DOMContentLoaded', () => {
  const calendarEl = document.getElementById('calendar');

  // Initialize the calendar regardless of login status
  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',

    // Add the validRange option here to limit the date range visible on the calendar
    validRange: {
      start: '2024-10-25', // Define your preferred start date here
      end: '2070-12-31', // Define your preferred end date here
    },

    events: async function (info, successCallback, failureCallback) {
      const token = sessionStorage.getItem('token'); // Get token for fetching events

      try {
        const response = await fetch('http://localhost:3000/api/calendar', {
          headers: {
            'Authorization': `Bearer ${token}`, // Include the token if available
          },
        });
        const data = await response.json();

        // Transform data to FullCalendar events format
        const events = data.map((event) => ({
          title: `${event.peg}: ${
            event.status === 'available' ? 'Available' : 'Booked'
          }`,
          date: event.date,
          backgroundColor: event.status === 'available' ? 'green' : 'red',
          borderColor: event.status === 'available' ? 'darkgreen' : 'darkred',
          peg: event.peg,
          status: event.status,
        }));

        successCallback(events);
      } catch (error) {
        console.error('Error fetching calendar events:', error);
        failureCallback(error);
      }
    },

    eventClick: async function (info) {
      const token = sessionStorage.getItem('token'); // Get token for editing

      if (!token) {
        alert('You must be logged in to edit the calendar.');
        return; // Prevent further action if not logged in
      }

      const peg = info.event.extendedProps.peg; // Get the peg info from the clicked event
      const date = info.event.start.toLocaleDateString('en-CA'); // Get the date of the clicked event
      const currentStatus = info.event.extendedProps.status; // Get the current status from the event

      const newStatus = currentStatus === 'available' ? 'booked' : 'available'; // Toggle the status

      try {
        const response = await fetch(
          'http://localhost:3000/api/calendar/book',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`, // Send the token in the Authorization header
            },
            body: JSON.stringify({ date, peg, currentStatus }), // Pass the current status
          }
        );

        if (response.ok) {
          const result = await response.json();
          // Update the event's properties based on the new status
          info.event.setProp(
            'backgroundColor',
            newStatus === 'booked' ? 'red' : 'green'
          );
          info.event.setProp(
            'title',
            `${peg}: ${newStatus === 'booked' ? 'Booked' : 'Available'}`
          );
          info.event.setExtendedProp('status', newStatus); // Update the status in the event object
        } else {
          const error = await response.json();
          alert(error.message);
          console.error('Error booking peg:', error);
        }
      } catch (error) {
        console.error('Error during fetch request:', error);
        alert('Failed to book the peg. Please try again.');
      }
    },
  });

  calendar.render();
});
