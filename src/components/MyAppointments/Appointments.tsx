import React from 'react';
import AppointmentCard, {Appointment} from '.';

const appointments: Appointment[] = [
  {
    date: '08/23/18',
    type: 'Physical',
    doctor: 'Howard Yurnem',
    patientInfo: 'Patient is 29 and in great health.',
    labs: 'No',
    medication: 'Adderall 20mg IR',
    height: '76"',
    weight: '215lbs',
    vaccinated: 'Needs Booster',
    taxiService: 'No'
  },
  {
    date: '08/23/19',
    type: 'Annual Checkup',
    doctor: 'Howard Yurnem',
    patientInfo: 'Patient is 30 and in great health.',
    labs: 'Yes',
    medication: 'Adderall 20mg IR',
    height: '76"',
    weight: '210lbs',
    vaccinated: 'Yes',
    taxiService: 'No'
  }
];

const Appointments: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        {appointments.map((appointment, index) => (
          <div key={index} className="col-md-4 col-xl-3">
            <AppointmentCard appointment={appointment} bgColor={index % 2 === 0 ? 'bg-c-blue' : 'bg-c-green'} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
