import React from 'react'
import EditRow from './EditRow'
import { FormControl, Button } from 'react-bootstrap'
import './style.css' 

{/* save button should bring back ScheduleList component */}

const EditList = () => (
  <div id='editList' className='editList'>
    <Button id='save'>Save</Button>
    <h1 className='title'>Volunteer Schedule for</h1>
    <form>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">current date</option>
        <option value="other">...</option>
      </FormControl>
    </form>
    <EditRow />
  </div>   
)

export default EditList
