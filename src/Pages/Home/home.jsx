
import Header from '../../Components/Header'
import './Home.css'
import '../../styles/Button.css'
import { NavLink } from 'react-router-dom'

function Home() {
  

  return (
    <>
     <Header />
     <main className='container'>
       
       <NavLink to={'/employees'} className={'btn btn-success'}>View Current employees</NavLink>
        <h2>Create Employee</h2>



     </main>
    </>
  )
}

export default Home
