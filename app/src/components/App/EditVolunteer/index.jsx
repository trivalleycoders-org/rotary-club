// EditVolunteer
import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.css'

const EditVolunteer = () => {
  return (
    <div className='editVolunteer' id={styles.editVolunteer}  >
      <Button id='save'>Save</Button>
      <h1 className='name'>James Cameron</h1>

    </div>
  )
}

export default EditVolunteer
