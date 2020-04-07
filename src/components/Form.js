import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({ addAppointment }) => {
  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: '',
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const submitAppointment = (e) => {
    e.preventDefault();
    if (
      pet.trim() === '' ||
      owner.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      symptoms.trim() === ''
    ) {
      setError(true);
      return;
    }
    setError(false);
    appointment.id = uuidv4();
    addAppointment(appointment);
    setAppointment({
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptoms: '',
    });
  };

  const { pet, owner, date, time, symptoms } = appointment;
  return (
    <>
      <h1>FORM</h1>
      {error ? <p className='alerta-error'>All fields are required</p> : null}
      <form onSubmit={submitAppointment}>
        <label>Pet Name</label>
        <input
          type='text'
          autoComplete='off'
          name='pet'
          className='u-full-width'
          placeholder='Pet Name'
          onChange={handleChange}
          value={pet}
        ></input>

        <label>Owner Name</label>
        <input
          type='text'
          autoComplete='off'
          name='owner'
          className='u-full-width'
          placeholder='Owner Name'
          onChange={handleChange}
          value={owner}
        ></input>

        <label>Date</label>
        <input
          type='date'
          name='date'
          className='u-full-width'
          onChange={handleChange}
          value={date}
        ></input>

        <label>Time</label>
        <input
          type='time'
          name='time'
          className='u-full-width'
          onChange={handleChange}
          value={time}
        ></input>

        <label>Symptoms</label>
        <textarea
          className='u-full-width'
          name='symptoms'
          onChange={handleChange}
          value={symptoms}
        ></textarea>

        <button type='submit' className='u-full-width button-primary'>
          Add Appointment
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  addAppointment: PropTypes.func.isRequired
}

export default Form;
