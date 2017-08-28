import React from 'react'
import { Table, FormControl } from 'react-bootstrap'
import styles from './style.css'

const EditRow = () => {
  return (
    <div id='scheduleRow' className={styles.scheduleRow}>
      <Table striped condensed hover>
        <thead>
          <tr>
            <th>Task</th>
            <th>Volunteer</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Photographer</td>
            <td>
              <FormControl componentClass='select' placeholder='select'>
                <option value='select'>James Cameron</option>
                <option value='other'>...</option>
              </FormControl>
            </td>
            <td>
              <FormControl componentClass='textarea' placeholder='textarea' />
            </td>
          </tr>
          <tr>
            <td>Newsletter</td>
            <td>
              <FormControl componentClass='select' placeholder='select'>
                <option value='select'>Steven Spielberg</option>
                <option value='other'>...</option>
              </FormControl>
            </td>
            <td>
              <FormControl componentClass='textarea' placeholder='textarea' />
            </td>
          </tr>
        </tbody>
      </Table> 
    </div>    
  )
}

export default EditRow
