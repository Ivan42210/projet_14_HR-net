
import Header from '../../Components/Header'
import './Home.css'
import '../../styles/Button.css'
import { NavLink } from 'react-router-dom'
import Form from '../../Components/Form'
import { useState } from 'react'

function Home() {

  const [setDatas, GenDatas] = useState([]);

  const onSubmit = (data) =>{
    setDatas(data)
  }

  console.log(GenDatas)
  

  return (
    <>
     <Header />
     <main className='container'>
       
       <NavLink to={'/employees'} className={'btn btn-success'}>View Current employees</NavLink>
        
        <div className='form-part b-shadow'> 
          <h2>Create Employee</h2>
          <Form onSubmit={onSubmit}/>
        </div>
     </main>
    </>
  )
}

export default Home
