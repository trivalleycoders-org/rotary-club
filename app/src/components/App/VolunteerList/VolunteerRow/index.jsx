import React from 'react'
import { Table, Button } from 'react-bootstrap'
import styles from './style.css'

const VolunteerRow = () => {
  return (
    <div id='volunteerRow' className={styles.volunteerRow}>
      <Table striped condensed hover>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Text</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Button>Edit</Button></td>
            <td>James Cameron</td>
            <td>jcameron@gmail.com</td>
            <td>310-555-555</td>
          </tr>
        </tbody>
      </Table> 
    </div>    
  )
}

export default VolunteerRow
