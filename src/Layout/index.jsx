
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from '../store'
import '../styles/Button.css'
import Home from '../Pages/Home'
import Employees from '../Pages/Employees'
import { Provider } from 'react-redux/es/exports'


export default function Layout(){
   
  

    return(
    <Provider store={store}>
        <Router >
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/employees' element={<Employees />} />
            </Routes>
        </Router>
    </Provider>
    )
}