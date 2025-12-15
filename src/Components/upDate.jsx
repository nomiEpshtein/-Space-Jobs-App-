import React, { useEffect, useState } from 'react'
import {upDateJobToState, upDteFromDb} from '../api'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/forms.css'


const UpDate = ({arrJobs,upDateJobToState}) => {

   const{id}=useParams()


     useEffect(()=>{
         document.title=`you upDate job ${id}`},[id])

   

   const[jobNameValue,setJobNameValue]=useState("")
   const[jobTypeValue,setJobTypeValue]=useState("")
   const[jobSalaryValue,setJobSalaryValue]=useState("")
   const navigate = useNavigate()


   const currentJob = arrJobs.find(job => job.jobID == parseInt(id));


  useEffect(() => {
  if (currentJob) {
    setJobNameValue(currentJob.jobName)
    setJobTypeValue(currentJob.jobType)
    setJobSalaryValue(currentJob.jobSalary) 
  }
}, [currentJob])



   const update=async()=>{


      if(!jobNameValue.trim() || !jobTypeValue.trim() )
   {
    alert("Please fill in Job Name and Job Type")
    return
   }

   if(isNaN(jobSalaryValue) ||jobSalaryValue <0)
      {
    alert("Please enter a valid non-negative number for salary")
    return
   }
    try{
const newCurrent = {
  jobID: currentJob.jobID,
  jobName: jobNameValue,
  jobType: jobTypeValue,
  jobSalary: parseInt(jobSalaryValue)
}
    const current=await upDteFromDb(newCurrent)
    upDateJobToState(current)
    navigate(`/detailJobs/${current.jobID}`) 
    return console.log("current",current)
    }
    
   catch(e)
   {
    return console.error(e)
   }
   }
   
  if (!currentJob) {
    return (
      <div className="homepage">
        <div className="form-container">
          <div className="jobs-loading">Loading data...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="homepage">
      <div className="form-container">
        <h1 className="form-title">✏️ Update Job</h1>
        
        <div className="form-group">
          <label className="form-label">Job Name</label>
          <input  className="form-input" placeholder="Enter job name..."  value={jobNameValue}  onChange={(e) => setJobNameValue(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Job Type</label>
          <select  className="form-input form-select" value={jobTypeValue} onChange={(e)=>setJobTypeValue(e.target.value)}
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
          <input  className="form-input"type="number"placeholder="0" value={jobSalaryValue} onChange={(e)=>setJobSalaryValue(e.target.value)}
          />
        </div>
        <div className="form-buttons">
          <button className="form-submit" onClick={update}>💾 Update Job</button>
          <button className="btn btn-secondary" onClick={() => navigate('/jobs')}>↩️ Back to Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default UpDate
