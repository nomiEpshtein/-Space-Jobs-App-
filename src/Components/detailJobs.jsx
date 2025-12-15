import React, { useEffect, useState } from 'react'
import {  useBeforeUnload, useNavigate, useParams } from 'react-router-dom'
import '../styles/forms.css'



const DetailJobs = ({arrJobs}) => {

  const {id} =useParams()


  useEffect(()=>{
  document.title=`you insert job ${id}`},[id])


  const navigate=useNavigate()

  const currentJob = arrJobs.find(job => job.jobID == parseInt(id));

  if (!currentJob) return <p>Loading ..</p>;


  return (
    <div className="homepage">
      <div className="form-container">
        <h1 className="form-title">🔍 Job Details</h1>
        
        <div className="job-details">
          <div className="detail-card">
            <h2 className="job-title">💼 {currentJob.jobName}</h2>
            <div className="job-info-grid">
              <div className="info-item">
                <span className="info-label">Job Type:</span>
                <span className="info-value">{currentJob.jobType}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Salary:</span>
                <span className="info-value salary">₪{currentJob.jobSalary}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Job ID:</span>
                <span className="info-value">#{currentJob.jobID}</span>
              </div>
            </div>
          </div>
          
          <div className="action-buttons">
            <button 
              className="btn btn-warning" 
              onClick={() => navigate(`/upDate/${currentJob.jobID}`)}
            >
              ✏️ Edit
            </button>
            <button 
              className="btn btn-danger" 
              onClick={() => navigate(`/delete/${currentJob.jobID}`)}
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}



export default DetailJobs