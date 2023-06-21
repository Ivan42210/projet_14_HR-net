import {useDispatch} from 'react-redux'
import { addEmployee } from '../../employeeSlice'
import { useState } from 'react'
import { departments } from '../../services/departments'
import { states } from '../../services/UsState'
import './Form.css'
import Selector from 'select-label-dropdown-fix'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Overlay from 'react-overlay-component'
import '../../assets/overrideStyles/calendarStyle.css'
import '../../assets/overrideStyles/overrideDropdown.css'
import '../../assets/overrideStyles/modalOverride.css'
import { formatDate } from '../../services/formatDate'
import CloseBtn from '../CloseBtn'

export default function Form(){

    const dispatch = useDispatch();

    const [formData, setFormData ] = useState({
        FirstName: "",
        LastName: "",
        StartDate: "",
        Department: "",
        BirthDate: "",
        Street:"",
        City: "",
        State: "",
        ZipCode: ""
        });

    const [ startDate, setStartDate] = useState(new Date());
    const[birthDate, setBirthDate] = useState(new Date());
    const [isOpen, setOverlay] = useState(false)

    const configs = {
        animate: true,
    }


    const handleDateChange = (fieldName, selectedValue) => {
        if (fieldName === "BirthDate" || fieldName === "StartDate") {
          const formDate = formatDate(selectedValue);
          setFormData((prevFormData) => ({
            ...prevFormData,
            [fieldName]: formDate,
          }));
        }

        console.log(formData)
      };
      
      
      const handleBirthDate = (selectedValue) => {
        setBirthDate(selectedValue);
        handleDateChange("BirthDate", selectedValue);
      };
      
      const handleStartDate = (selectedValue) => {
        setStartDate(selectedValue);
        handleDateChange("StartDate", selectedValue);
      };
      
    

    const handleInputChange = (fielName, fieldValue) =>{
        setFormData((prevFormData) => ({
            ...prevFormData,
            [fielName]: fieldValue,
        }))
    }  
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        dispatch(addEmployee(formData));
        setOverlay(true)
        
    }

    

    return(
        <>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="first-name">First Name</label>
                <input type="text" id='first-name' className='text-input' value={formData.FirstName} onChange={(e) => handleInputChange("FirstName", e.target.value)} aria-label='first name'/>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" className='text-input' value={formData.LastName} onChange={(e) => handleInputChange("LastName", e.target.value)} aria-label='Last name'/>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker onChange={handleBirthDate} value={birthDate}/>

                <label htmlFor="start-date">Start Date</label>
                <DatePicker onChange={handleStartDate} value={startDate}/>

                <fieldset className='address'>
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id='street' type="text" className='text-input' value={formData.Street} onChange={(e) => handleInputChange("Street", e.target.value)} aria-label='Street'/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" className='text-input' value={formData.City} onChange={(e) => handleInputChange("City", e.target.value)} aria-label='City'/>

                    <label htmlFor="state">State</label>
                    <Selector options={states} onChange={(selectedValue) => handleInputChange("State", selectedValue)} labelName={'State'}/>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" className='text-input' value={formData.ZipCode} onChange={(e) => handleInputChange("ZipCode", e.target.value)} aria-label='zip code'/>
                    
                </fieldset>

                    <label>Department</label>
                    <Selector options={departments} onChange={(selectedValue) => handleInputChange("Department", selectedValue)} labelName={'Department'}/>

                    <button type='submit' className='btn btn-success submit-btn'>Save</button>
            </form>
            <Overlay configs={configs} isOpen={isOpen}>

                <h3 aria-label='employee has been created'>Employee created</h3>

                
                <CloseBtn clickFn={() => {setOverlay(false)}}/>
            </Overlay>
        </>
    )
}



