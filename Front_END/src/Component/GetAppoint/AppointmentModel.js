import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Mail, User, X } from 'lucide-react';
import './AppointmentModel.css'; // Import the CSS file

const AppointmentModal = ({ showModal, setShowModal, onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    reason: '',
    status: 'pending',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        reason: '',
        status: 'pending',
      });
    }
  }, [initialData, showModal]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">{initialData ? 'Edit Appointment' : 'Schedule Appointment'}</h2>
          <button onClick={() => setShowModal(false)} className="close-button">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-input">
            <User className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="form-input">
            <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-input1">
            <Calendar className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-input1">
            <Clock className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Reason for appointment"
            className="textarea"
            required
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
          </select>
          <div className="action-buttons">
            <button type="submit" className="submit-button">
              {initialData ? 'Update Appointment' : 'Schedule Appointment'}
            </button>
            <button type="button" onClick={() => setShowModal(false)} className="cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
