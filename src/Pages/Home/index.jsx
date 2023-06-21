
import Header from '../../Components/Header'
import './Home.css'
import { NavLink } from 'react-router-dom'
import Form from '../../Components/Form'


function Home() {



  return (
    <>
     <Header />
     <main className='container'>
       
       <NavLink to={'/employees'} className={'btn btn-success'} aria-label='link to the employees list'>View Current employees</NavLink>
        
        <div className='form-part b-shadow'> 
          <h2 aria-label='create employee'>Create Employee</h2>
          <Form/>
        </div>
     </main>
    </>
  )
}

export default Home

