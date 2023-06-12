import Fieldset from '../FieldSet'
import './Form.css'

export default function Form(){
    return(
        <>
            <form>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id='first-name' />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" />

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" />

                <Fieldset />
            </form>
        </>
    )
}