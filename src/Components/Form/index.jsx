import { useState } from 'react'
import { departments } from '../../services/departments'
import { states } from '../../services/UsState'
import SelectMenu from '../../PluginSelector/Selector'
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
                <input type="text" id='first-name' className='text-input'/>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" className='text-input'/>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" className='text-input' type="text" />

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" className='text-input' type="text" />

                <fieldset className='address'>
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id='street' type="text" className='text-input'/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" className='text-input'/>

                    <label htmlFor="state">State</label>
                    <SelectMenu options={states} onChange={handleSelectorState} labelName={'State'}/>                    

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" className='text-input'/>

                </fieldset>

                    <label>Department</label>
                    <SelectMenu options={departments} onChange={handleSelectorDepartment} labelName={'Department'}/>

                    <button type='submit' className='submit-btn'>Save</button>
            </form>
        </>
    )
}


Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

/* 
                    < SelectMenu />*/