/**
 * React component for the layout of the application.
 *
 * @component Layout
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from '../store';
import '../styles/Button.min.css';
import Home from '../Pages/Home';
import Employees from '../Pages/Employees';
import { Provider } from 'react-redux/es/exports';

/**
 * Renders the Layout component.
 *
 * @returns {JSX.Element} The rendered Layout component.
 */
export default function Layout() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/employees' element={<Employees />} />
                </Routes>
            </Router>
        </Provider>
    );
}