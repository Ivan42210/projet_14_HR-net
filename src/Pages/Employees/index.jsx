/**
 * React component for displaying a table of employees.
 *
 * @component Employees
 */
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Employees.min.css';
import "datable-react/dist/index.css";
import '../../assets/overrideStyles/dataTableOverride.css';
import { DataTable } from 'datable-react';
import { NavLink } from 'react-router-dom';

/**
 * Renders the Employees component.
 *
 * @returns {JSX.Element} The rendered Employees component.
 */
export default function Employees() {
    const employees = useSelector((state) => state.employees);

    const labels = [
        { text: "First Name", value: "FirstName" },
        { text: "Last Name", value: "LastName" },
        { text: "Start Date", value: "StartDate" },
        { text: "Department", value: "Department" },
        { text: "Date of Birth", value: "BirthDate" },
        { text: "Street", value: "Street" },
        { text: "City", value: "City" },
        { text: "State", value: "State" },
        { text: "Zip Code", value: "ZipCode" }
    ];

    /**
     * Logs the 'employees' state whenever it changes.
     */
    useEffect(() => {
        console.log(employees);
    }, [employees]);

    return (
        <main className="employees-page">
            <h3 className='employees-title'>Current employees</h3>
            <section className='table-section'>
                <DataTable
                    labels={labels}
                    data={employees}
                    language={true}
                />
                <NavLink to={'/'} className={'mx-auto btn btn-dark'} aria-label='homepage link'>Home</NavLink>
            </section>
        </main>
    );
}

