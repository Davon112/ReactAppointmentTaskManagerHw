import React from 'react';

export interface Appointment {
  date: string;
  type: string;
  doctor: string;
  patientInfo: string;
  labs: string;
  medication: string;
  height: string;
  weight: string;
  vaccinated: string;
  taxiService: string;
}

interface AppointmentCardProps {
  appointment: Appointment;
  bgColor: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment, bgColor }) => {
  return (
    <div className={`card text-white ${bgColor} mb-3`}>
      <div className="card-header">{appointment.type}</div>
      <div className="card-body">
        <h5 className="card-title">Appointment Date: {appointment.date}</h5>
        <p className="card-text"><strong>Doctor:</strong> {appointment.doctor}</p>
        <p className="card-text"><strong>Patient Info:</strong> {appointment.patientInfo}</p>
        <p className="card-text"><strong>Labs:</strong> {appointment.labs}</p>
        <p className="card-text"><strong>Medication:</strong> {appointment.medication}</p>
        <p className="card-text"><strong>Height:</strong> {appointment.height}</p>
        <p className="card-text"><strong>Weight:</strong> {appointment.weight}</p>
        <p className="card-text"><strong>Vaccinated:</strong> {appointment.vaccinated}</p>
        <p className="card-text"><strong>Taxi Service:</strong> {appointment.taxiService}</p>
      </div>
    </div>
  );
};

export default AppointmentCard;
