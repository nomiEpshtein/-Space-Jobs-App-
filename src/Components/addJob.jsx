import React, { useEffect, useState } from 'react'
import { addJobToDb } from '../api'
import { useNavigate } from 'react-router-dom'
import '../styles/forms.css'

const AddJob = ({addState}) => {



    useEffect(()=>{
        document.title="add job"},[])

   const[jobNameValue,setJobNameValue]=useState("")
   const[jobTypeValue,setJobTypeValue]=useState("")
   const[jobSalaryValue,setJobSalaryValue]=useState("")
   const navigate = useNavigate()


 const addJob = async () => {
     if(!jobNameValue.trim() || !jobTypeValue.trim() )
   {
    alert("Please fill in Job Name and Job Type")
    return
   }

   const salary = parseInt(jobSalaryValue, 10);
   if(isNaN(salary) ||salary <0)
      {
    alert("Please enter a valid non-negative number for salary")
    return
   }

  const newJob = {
    jobName: jobNameValue.trim(),
    jobType: jobTypeValue.trim(),
    jobSalary: parseInt(jobSalaryValue) || 0,
  };
  try {
    const current = await addJobToDb(newJob);
    console.log("current add", current);
    addState(current)
    navigate("/jobs") 
    return current
  } catch (err) {
    console.error(err);
    return 
  }
};

  return (
    <div className="homepage">
      <div className="form-container">
        <h1 className="form-title">➕ Add New Job</h1>
        
        <div className="form-group">
          <label className="form-label">Job Name</label>
          <input className="form-input" placeholder="Enter job name..." value={jobNameValue} onChange={(e) => setJobNameValue(e.target.value)} 
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Job Type</label>
          <select className="form-input form-select" value={jobTypeValue} onChange={(e)=>setJobTypeValue(e.target.value)}
          >
            <option value="">Select job type...</option>
            <option value="Office">Office</option>
            <option value="Kindergarten">Kindergarten</option>
            <option value="Secretary">Secretary</option>
            <option value="Programmer">Programmer</option>
          </select>
        </div>
        
        <div className="form-group">
          <label className="form-label">Salary</label>
          <input className="form-input" type="number" placeholder="0" value={jobSalaryValue} onChange={(e)=>setJobSalaryValue(e.target.value)}
          />
        </div>
        
        <button className="form-submit" onClick={addJob}>
          ✨ Add Job
        </button>
      </div>
    </div>
  )
}


export default AddJob