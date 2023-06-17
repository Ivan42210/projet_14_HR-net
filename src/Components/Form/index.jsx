import { useState } from 'react'
import { departments } from '../../services/departments'
import { states } from '../../services/UsState'
import SelectMenu from '../SelectorPlugIn'
import {PropTypes} from 'prop-types'
import './Form.css'

export default function Form({onSubmit}){

    const [formData, setFormData ] = useState({
        State: "",
        Department: ""
    });

    const handleSelectorState = (selectedValue) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            State: selectedValue,
        }))
    }

    const handleSelectorDepartment = (selectedValue) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            Department: selectedValue,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData)
    }

    

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id='first-name' />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" />

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" />

                <fieldset className='address'>
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id='street' type="text"/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <SelectMenu options={states} onChange={handleSelectorState}/>                    

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />

                </fieldset>

                    <label>Department</label>
                    <SelectMenu options={departments} onChange={handleSelectorDepartment}/>

                    <button type='submit'>Save</button>
            </form>
        </>
    )
}


Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

/* 
                    < SelectMenu />*/