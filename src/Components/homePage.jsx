import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/homepage.css'

const HomePage = () => {

  const navigate=useNavigate()


     useEffect (()=>{
      const timer=setTimeout(()=>{
        navigate("/jobs");
      },4000)
    return ()=>clearTimeout(timer)
  },[])

  return(
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">🚀 Space Jobs</h1>
          <p className="hero-subtitle">
            The most advanced platform for finding jobs in the future
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => navigate('/jobs')}>
              🔍 Search Jobs
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/addJob')}>
              ➕ Add Job
            </button>
          </div>
        </div>
      </div>
      </div>
   

   )

}

export default HomePage