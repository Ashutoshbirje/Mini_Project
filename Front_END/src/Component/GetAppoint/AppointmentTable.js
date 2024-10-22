import React, { useState } from 'react';
import { Calendar, Clock, Mail, User, CheckCircle, Edit2, Trash2} from 'lucide-react';
import './AppointmentTable.css'; // Import the external stylesheet

const AppointmentTable = ({ appointments, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('date');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return 'status-completed';
      case 'confirmed':
        return 'status-confirmed';
      default:
        return 'status-pending';
    }
  };

  const filteredAppointments = appointments
    .filter((apt) =>
      `${apt.name} ${apt.email} ${apt.date} ${apt.status}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const order = sortDirection === 'asc' ? 1 : -1;
      if (a[sortField] < b[sortField]) return -1 * order;
      if (a[sortField] > b[sortField]) return 1 * order;
      return 0;
    });

  return (
    <div className="appointment-table">
      <div className="header">
        <h2>Appointments</h2>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search appointments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th onClick={() => handleSort('name')}>
                <User className="mr-2" size={16} /> Name
              </th>
              <th onClick={() => handleSort('email')}>
                <Mail className="mr-2" size={16} /> Email
              </th>
              <th onClick={() => handleSort('date')}>
                <Calendar className="mr-2" size={16} /> Date
              </th>
              <th onClick={() => handleSort('time')}>
                <Clock className="mr-2" size={16} /> Time
              </th>
              <th onClick={() => handleSort('status')}>
                <CheckCircle className="mr-2" size={16} /> Status
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((apt) => (
                <tr key={apt._id} className="border-b hover:bg-gray-50">
                  <td>{apt.name}</td>
                  <td>{apt.email}</td>
                  <td>{apt.date}</td>
                  <td>{apt.time}</td>
                  <td className={getStatusClass(apt.status)}>
                    {apt.status}
                  </td>
                  <td className="action-buttons">
                    <button onClick={() => onEdit(apt)} className="text-blue-600 hover:text-blue-800">
                      <Edit2 size={16} />
                    </button>
                    <button onClick={() => onDelete(apt._id)} className="text-red-600 hover:text-red-800">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-appointments">
                  No appointments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentTable;
