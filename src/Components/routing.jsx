import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './homePage'
import DetailJobs from './detailJobs'
import Jobs from './jobs';
import AddJob from './addJob'
import UpDate from './upDate'
import Delete from './delete'
import Statistics from './statistics'
import { getAllJobs } from '../api'

const Routing = () => {



const [arrjob,setArrJob]=useState([]);


  //1

  
useEffect(() => {
  getAllJobs().then(data => {
    console.log("data", data)
    setArrJob(data)  
  })
}, [])


//2
const addJobToState = (newJob) => {
  setArrJob(prev => [
    ...prev,
    { ...newJob, jobID: Math.random() } 
  ])
}

//3
  const deleteJobToState = (id) => {
  setArrJob(prevJobs => prevJobs.filter(job => job.jobID !== id));
};

//4

 const upDateJobToState = (updatedJob) => {
  setArrJob(prevArr =>
    prevArr.map(job => job.jobID == updatedJob.jobID ? updatedJob : job)
  )
}
  


  return (
    <div>
        <Routes>
            <Route path= "/" element={<HomePage/>}/>
            <Route path="/homePage" element={<HomePage/>}/>
            <Route path="/detailJobs/:id" element={<DetailJobs arrJobs={arrjob} deleteJobToState={deleteJobToState}/>} />
            <Route path="/jobs" element={<Jobs arrJobs={arrjob} />}/>
            <Route path="/addJob" element={<AddJob addState={addJobToState}/>}/>
            <Route path="/upDate/:id" element={<UpDate arrJobs={arrjob} upDateJobToState={upDateJobToState}/>}/>
            <Route path="/delete/:id" element={<Delete arrJobs={arrjob} deleteJobToState={deleteJobToState}/>}/>
            <Route path="/Statistics" element={<Statistics/>}/>
        </Routes>
    </div>
  )
}

export default Routing