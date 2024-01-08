import React, { useRef, useState } from "react";
import './components/App.css'
import { v4 as uuidv4 } from 'uuid';
function App() {
const ed=uuidv4()
  const [yoq , setyoq]=useState(true)
  const [student,setstudent]=useState([{firstname:'', lastname:'', number:'' ,id:ed  }])
  const [students,setstudents]=useState([{firstname:'Ali', lastname:'Doe', number:'847463632' ,id:ed}])
  




  const addnew=(e)=>{
    e.preventDefault()
    setstudents([...students ,student ])
    
  }
 
 
  const  delstudent=(ed)=>{
    console.log(ed);
    }


    return (
      <>
      <div className="route">
          <form onSubmit={addnew}>
            <input onChange={(e)=> setstudent({...student,firstname:e.target.value})} value={student.firsname} name='firstname' placeholder='FirstName...' type="text" />
            <input onChange={(e)=> setstudent({...student,lastname:e.target.value})} value={student.lastnamesname} name='lastname'  placeholder='LastName...' type="text" />
            <input onChange={(e)=> setstudent({...student,number:e.target.value})} value={student.number} name='number'  placeholder='Number..' type="number" />
            <button type='submit' onClick={()=>addnew()} className='Add'>Add</button>
          </form>
  
  
          <table>
            <thead>
              <tr>
                <th>#FirstName</th>
                <th>#LastnName</th>
                <th>#Numbers</th>
                <th></th>
                <th></th>
  
              </tr>
            </thead>
            <tbody className='table'>
                {
                  students.map((st)=>{
                    return(
                      <>
                        <tr key={ed }>
                        <td>{st.firstname}</td>
                        <td>{st.lastname}</td>
                        <td>{st.number}</td>
                        <div className="buttons">
                        <button className='edit'>Edit</button>
                        <button className='delete' onClick={()=>delstudent(ed)}>Delete</button>
                        </div>
                        </tr>
                      </>
                    )
                  })
                }
            </tbody>
          </table>
      </div>
         
      </>
    )

  }
  

export default App
