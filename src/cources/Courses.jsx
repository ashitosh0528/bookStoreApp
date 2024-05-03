import React from 'react'
import Navbar from '../components/Navbar'
import Cource from '../components/Cource'
import Lastthing from '../components/Lastthing'
function Courses() {
  return (
<>
<Navbar/>
<div className='min-h-screen'>
<Cource/>
</div>
<Lastthing/>

</>  
)
}

export default Courses