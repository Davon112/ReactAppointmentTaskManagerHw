import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ScheduleAppointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: '',
    ssn: '',
    reason: '',
    transportation: ''
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedData(formData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setSubmittedData(formData);
    setIsEditing(false);
  };

  return (
    <div className="container">
      <h3></h3>
      {submittedData && !isEditing ? (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Upcoming Appointments</h5>
            <p className="card-text"><strong>Name:</strong> {submittedData.name}</p>
            <p className="card-text"><strong>Appointment Date:</strong> {submittedData.dob}</p>
            <p className="card-text"><strong>Home Address:</strong> {submittedData.address}</p>
            <p className="card-text"><strong>Last 4 of SSN:</strong> {submittedData.ssn}</p>
            <p className="card-text"><strong>Reason for Visit:</strong> {submittedData.reason}</p>
            <p className="card-text"><strong>Transportation:</strong> {submittedData.transportation}</p>
            <Button className="btn-rounded btn-block my-4 z-depth-0" onClick={handleEdit}>
              Edit
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              id="dob"
              placeholder="DOB"
              value={formData.dob}
              onChange={handleChange}
            />
            <label htmlFor="dob">Appointment Date</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="ssn"
              placeholder="SSN"
              value={formData.ssn}
              onChange={handleChange}
            />
            <label htmlFor="ssn">Last 4 of SSN</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              id="reason"
              placeholder="Leave a comment here"
              value={formData.reason}
              onChange={handleChange}
            />
            <label htmlFor="reason">Reason for Visit:</label>
          </div>
          <div className="form-floating mb-3">
            <select
              className="form-select"
              id="transportation"
              value={formData.transportation}
              onChange={handleChange}
            >
              <option value="" disabled>
                Will you need transportation?
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="transportation">Transportation</label>
          </div>
          <Button className="btn-rounded btn-block my-4 z-depth-0" type="submit">
            {isEditing ? 'Save' : 'Submit'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ScheduleAppointment;

