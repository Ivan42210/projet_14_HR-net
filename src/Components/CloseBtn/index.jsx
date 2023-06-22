import PropTypes from 'prop-types';
import './CloseBtn.css';

/**
 * Close button component.
 *
 * @component CloseBtn
 * @param {Object} props - The component props.
 * @param {Function} props.clickFn - The click function to be called when the button is clicked.
 * @returns {JSX.Element} The rendered CloseBtn component.
 */
export default function CloseBtn({ clickFn }) {
    return (
        <div className='close-btn-container'>
            <button className='close-btn' onClick={clickFn}>
                <span></span>
                <span></span>
            </button>
        </div>
    );
}

// Prop types for CloseBtn component
CloseBtn.propTypes = {
    clickFn: PropTypes.func.isRequired,
};

