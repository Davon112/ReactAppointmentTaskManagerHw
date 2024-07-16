import React, { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, Container, Row} from 'react-bootstrap'
import Navigation from './components/Navigation/Navigation'
import TasksCards from './components/Home/TasksCards'
import ScheduleAppointmnet from './components/ScheduleAppointments'
import SignInForm from './components/SignIn/Index'
import SignUpForm from './components/SignUp'
import AuthenticationGuard from './components/AuthenticationGuard'
import ProfilePage from './components/ProfilePage'
import AppointmentCard from './components/MyAppointments'
import Appointments from './components/MyAppointments/Appointments'



function App() {

  return (
    
  
  <BrowserRouter>
   <Container>
    <Navigation />
    <TasksCards />
    <Row>
      <Col>
      <Routes>
        <Route path='/' element={<TasksCards />} />
        <Route path='/schedule-appointment' element={<ScheduleAppointmnet />} />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/my-appointments' element={<Appointments />} />
        <Route
            path="/profile"
            element={<AuthenticationGuard component={ProfilePage} />}
          />


      </Routes>
      
      </Col>
    </Row>

   </Container>
  </BrowserRouter>
  
   
  )
}

export default App
