import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { DownStistikot } from '../api'
import '../styles/jobs.css'

const Jobs = ({arrJobs}) => {
  

  useEffect(() => {
  document.title = `The count of jobs: ${arrJobs?.length || 0}`;
}, [arrJobs]);

  //פונקציה שמציגה את הנתונים
  const handleDownload = async () => {
    try {
      const response = await DownStistikot(); 

      const url = window.URL.createObjectURL(
        new Blob([response.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        })
      );

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Jobs.xlsx"); 
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading Excel:", error);
    }
  };


  const navigate=useNavigate()
    if (!arrJobs) {
        return <div>Loading..</div>
}
  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <h1 className="jobs-title">💼 Job Opportunities</h1>
        <div className="jobs-actions">
          <Link to="/addJob">➕ Add Job</Link>
          <button onClick={()=> navigate("/Statistics")}>📊 Statistics</button>
          <button onClick={handleDownload}>📄 Download File</button>
        </div>
      </div>
      <div className="jobs-grid">
        {arrJobs && arrJobs.map((job) => (
          <div key={job.jobID} className="job-card">
            <div className="job-info">
              <h2 className="job-title">💼 {job.jobName}</h2>
              <div className="job-type">{job.jobType}</div>
              <div className="job-salary">₪{job.jobSalary}</div>
            </div>
            <div className="job-actions">
              <Link to={`/detailJobs/${job.jobID}`}>🔍 Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jobs