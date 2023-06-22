/**
 * React component for the header of the application.
 *
 * @component Header
 */
import './Header.min.css';

/**
 * Renders the Header component.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
export default function Header() {
    return (
        <header className="header">
            <div className='title logo'>
                <h1 aria-label='HRnet site title'>HRnet</h1>
            </div>
            <div className='logo-shadow'></div>
            <div className='logo-shadow-second'></div>
        </header>
    );
}
