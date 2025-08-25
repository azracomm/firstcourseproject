import { useState } from 'react'
import './App.css'
import Header from './header'
import {courses} from './data.js'
import Course from './course'
import './css/Coursemain.css'

function App() {

  return (
    <div>
      <Header/>
      <div className='course-main'>

      {
        courses?.map((course)=>(
          <Course key={course.id}course={course}/>
        ))
      }
    </div>
    </div>
  )
}

export default App
