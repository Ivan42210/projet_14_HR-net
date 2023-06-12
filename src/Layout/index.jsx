import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/home'
import Employees from '../Pages/Employees'

export default function Layout(){
    return(
        <Router >
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/employees' element={<Employees />} />
            </Routes>
        </Router>
    )
}