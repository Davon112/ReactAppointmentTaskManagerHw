import React from 'react';
import { Link, NavLink } from 'react-router-dom';


interface CardProps {
  title: string;
  text: string;
  backTitle: string;
  backText: string;
}

const Card: React.FC<CardProps> = ({ title, text, backTitle, backText }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div className="image-flip" onTouchStart={(e) => e.currentTarget.classList.toggle('hover')}>
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{text}</p>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">{backTitle}</h4>
                <p className="card-text">{backText}</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02" rel="noopener noreferrer">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02" rel="noopener noreferrer">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02" rel="noopener noreferrer">
                      <i className="fa fa-skype"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02" rel="noopener noreferrer">
                      <i className="fa fa-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TasksCards: React.FC = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="row">
          <Card
          title="Schedule Appointment"
          text='Schedule Your Next Appointment'
          backTitle= '2 clicks & done!'
          backText='We pride ourselves in making every aspect of scheduling your doctor visits seamless.'
          />
          <Card
            title="View Appointment"
            text="View your upcoming appointments"
            backTitle="100% Transparent Billing"
            backText="Check your appointment date, time, and total bill. No surprises here!"
          />
          <Card
            title="Find Doctor"
            text="Search and Filter through doctors in your area who are accepting patients"
            backTitle="We do the dirtywork!"
            backText="Only the best for you! No more searching for the perfect doctor just to findout they aren't accepting patients."
          />
          <Card
            title="Sliding Scale Clinics"
            text="Clinics that work with you and your income"
            backTitle="No insurance? No problem!"
            backText="Here we have a list of clinics that specialize in making healthcare affordable."
          />
          <Card
            title="2/3 Leg Transportation"
            text="Schedule a ride with one of our partners"
            backTitle="Need a ride? We got you!"
            backText="Free round trip rides. This includes medication pickup post appointment."
          />
          <Card
            title="Pharmacies"
            text="Pharmacies near you"
            backTitle="Skip the Line!"
            backText="Not only can you find the nearest pharmacy, but you can also receive notifications when your prescription is ready."
          />
        </div>
      </div>
    </section>
  );
};

export default TasksCards;
