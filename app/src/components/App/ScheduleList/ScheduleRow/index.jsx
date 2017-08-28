import React from 'react'
import { Table } from 'react-bootstrap'
import styles from './style.css'

const ScheduleRow = () => {
  return (
    <div id='scheduleRow' className={styles.scheduleRow}>
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
}

export default ScheduleRow
