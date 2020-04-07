import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments) {
    initialAppointments = [];
  }
  const [appointments, setAppointments] = useState(initialAppointments);
  useEffect(() => {
    let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
    if (initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };
  const deleteAppointment = (id) => {
    const newAppointment = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(newAppointment);
  };

  const title =
    appointments.length === 0 ? 'Without Appointments' : 'Manage Appointments';
  return (
    <>
      <h1>Appointment Manager</h1>

      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form addAppointment={addAppointment}></Form>
          </div>
          <div className='one-half column'>
            <h2>{title}</h2>
            {appointments.map((appointment) =>
              appointment.id ? (
                <Appointment
                  key={appointment.id}
                  appointment={appointment}
                  deleteAppointment={deleteAppointment}
                ></Appointment>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
