import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ScheduleAppointmnet: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: '',
    ssn: '',
    reason: '',
    transportation: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  return (
    <div className="container">
      <h3>Patients Information</h3>
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
        <label htmlFor="dob">Date of Birth</label>
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
        <Button className="btn-rounded btn-block my-4 z-depth-0" type="submit">
                  Submit
                </Button>
      </div>
    </div>
  );
};

export default ScheduleAppointmnet;
