import React, { useEffect, useState } from 'react'
import { deleteFromDb } from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/forms.css';

const Delete = ({arrJobs,deleteJobToState}) => {


    const{id}=useParams()
    useEffect(()=>{
    document.title=`you delete job ${id}`},[])
    const navigate = useNavigate()
    const currentJob = arrJobs.find(job => job.jobID == parseInt(id));


 const delatedJob=async () => {
  try{
     const current=await deleteFromDb(currentJob )
    deleteJobToState(currentJob.jobID)
    navigate("/jobs")  
     return console.log("current",current)
     

  }
  catch(e)
  {
    return console.error(e)
  }

}
const back=()=>{
    navigate("/jobs")
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
        <h1 className="form-title">🗑️ Delete Job</h1>
        
        <div className="delete-confirmation">
          <div className="warning-card">
            <div className="warning-icon">⚠️</div>
            <h2>Are you sure you want to delete?</h2>
            <div className="job-preview">
              <h3>💼 {currentJob.jobName}</h3>
              <p>Type: {currentJob.jobType}</p>
              <p>Salary: ₪{currentJob.jobSalary}</p>
            </div>
            <p className="warning-text">This action cannot be undone!</p>
          </div>
          
          <div className="action-buttons">
            <button className="btn btn-danger" onClick={delatedJob}>
              🗑️ Yes, Delete
            </button>
            <button className="btn btn-secondary" onClick={back}>
              ❌ No, Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delete