import React from 'react'
import { Table } from 'react-bootstrap'
import './style.css'

const ScheduleRow = () => (
  <div id='scheduleRow' className='scheduleRow'>
    <Table striped condensed hover>
      <thead>
        <tr>
          <th>Volunteer</th>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>James Cameron</td>
          <td>Photographer</td>
        </tr>
      </tbody>
    </Table> 
  </div>    
)

export default ScheduleRow
