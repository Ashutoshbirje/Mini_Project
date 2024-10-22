import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusCircle, Heart } from 'lucide-react';
import AppointmentTable from './AppointmentTable';
import AppointmentModal from './AppointmentModel';
import './GetAppoint.css'; // Importing external stylesheet

const API_URL = 'http://localhost:5111/api';

const GetAppoint = () => {
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`${API_URL}/appointments`);
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      setAlert({ type: 'error', message: 'Error fetching appointments. Please try again.' });
    }
  };

  const handleAddOrUpdateAppointment = async (appointment) => {
    try {
      if (selectedAppointment) {
        await axios.put(`${API_URL}/appointments/${selectedAppointment._id}`, appointment);
        setAlert({ type: 'success', message: 'Appointment updated successfully!' });
      } else {
        await axios.post(`${API_URL}/appointments`, appointment);
        setAlert({ type: 'success', message: 'Appointment scheduled successfully!' });
      }
      fetchAppointments();
    } catch (error) {
      setAlert({ type: 'error', message: 'Error saving appointment. Please try again.' });
      console.error('Error saving appointment:', error);
    }
  };

  const handleEditAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  const handleDeleteAppointment = async (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        await axios.delete(`${API_URL}/appointments/${id}`);
        setAlert({ type: 'success', message: 'Appointment deleted successfully!' });
        fetchAppointments();
      } catch (error) {
        setAlert({ type: 'error', message: 'Error deleting appointment. Please try again.' });
        console.error('Error deleting appointment:', error);
      }
    }
  };

  return (
    <div className="container3">
      <header className="header">
        <h1 className="title">
          <Heart className="heart-icon" size={32} />
          ArogyaSaathi Appointment Dashboard
        </h1>
      </header>

      {alert && (
        <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-error'}`}>
          {alert.message}
        </div>
      )}

      <button
        onClick={() => {
          setSelectedAppointment(null);
          setShowModal(true);
        }}
        className="btn-schedule"
      >
        <PlusCircle size={20} className="icon-plus" />
        Schedule New Appointment
      </button>

      <AppointmentTable 
        appointments={appointments} 
        onEdit={handleEditAppointment} 
        onDelete={handleDeleteAppointment} 
      />

      <AppointmentModal 
        showModal={showModal} 
        setShowModal={setShowModal} 
        onSubmit={handleAddOrUpdateAppointment} 
        initialData={selectedAppointment} 
      />
    </div>
  );
};

export default GetAppoint;
