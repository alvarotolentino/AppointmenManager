import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment, deleteAppointment}) => {
  const {id, pet, owner, date, time, symptoms } = appointment;

  return (
    <div className='cita'>
      <p>Pet: <span>{pet}</span></p>
      <p>Owner: <span>{owner}</span></p>
      <p>Date: <span>{date}</span></p>
      <p>Time: <span>{time}</span></p>
      <p>Symptoms: <span>{symptoms}</span></p>
      <button 
      className='button eliminar u-full-width' 
      onClick={()=>{deleteAppointment(id)}} >Delete &times;</button>
    </div>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  deleteAppointment: PropTypes.func.isRequired
}
export default Appointment;