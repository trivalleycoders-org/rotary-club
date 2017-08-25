import React from 'react'
import { Table } from 'react-bootstrap'
import './style.css'

const VolunteerRow = () => (
  <div className='volunteerRow' id='volunteerRow'>
    <Table striped condensed hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Text</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>James Cameron</td>
          <td>jcameron@gmail.com</td>
          <td>310-555-555</td>
        </tr>
      </tbody>
    </Table> 
  </div>    
)

export default VolunteerRow
