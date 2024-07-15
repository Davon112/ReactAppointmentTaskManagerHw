
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
  bgColor: String;
  }
  

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment, bgColor }) => {
  return (
    <div className={`card ${bgColor} order-card`}>
      <div className="card-block">
        <h2 className="m-b-20">{appointment.date}</h2>
        <h4 className="text-right"><i className="appointment1"></i><span>{appointment.type}</span></h4>
        <p className="m-b-0">Doctor: {appointment.doctor}</p>
        <p className="m-b-0">{appointment.patientInfo}</p>
        <p className="m-b-0">Labs: {appointment.labs}</p>
        <p className="m-b-0">Medication: {appointment.medication}</p>
        <p className="m-b-0">Height: {appointment.height}</p>
        <p className="m-b-0">Weight: {appointment.weight}</p>
        <p className="m-b-0">Vaccinated: {appointment.vaccinated}</p>
        <p className="m-b-0">Used Taxi Service: {appointment.taxiService}</p>
      </div>
    </div>
  );
};

export default AppointmentCard;
