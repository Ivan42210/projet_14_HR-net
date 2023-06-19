import PropTypes from 'prop-types'
import './CloseBtn.css'

export default function CloseBtn({clickFn}){
    return(
        <div className='close-btn-container'>
            <button className='close-btn' onClick={clickFn}>
                <span></span>
                <span></span>
            </button>
        </div>  
    )
}

CloseBtn.propTypes = {
    clickFn: PropTypes.func.isRequired
}


