import React, { useEffect, useState } from "react";
import { showStistikot } from "../api";
import '../styles/statistics.css'; 

const Statistics = () => {


  useEffect(()=>{
  document.title=`you insert to statistics`},[])

  const [selectedField, setSelectedField] = useState("");  
  const [statistics, setStatistics] = useState(null);     
  const [error, setError] = useState(""); 
  

   useEffect(()=>{
  document.title=`you insert to statistics ${selectedField}`},[statistics])
  


  const handleShowStatistics = async () => {
    if (!selectedField) 
    {

      alert("Please chek kind to field")
      return;
    }
    try {
      const data = await showStistikot({ field: selectedField });
      setStatistics(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Error fetching statistics");
    }
  };

  const renderValue = (value) => {
    if (typeof value === "object" && value !== null) {
      return Object.entries(value)
        .map(([k, v]) => `${k}: ${v}`)
        .join(", ");
    }
    return value;
  };

  return (
    <div className="statistics-page">
      <div className="statistics-header">
        <h1 className="statistics-title">📊 Advanced Statistics</h1>
        <p className="statistics-subtitle">Data and insights from the world of work</p>
      </div>

      <div className="stats-overview">
        <div className="stat-card">
          <div className="stat-icon">💼</div>
          <span className="stat-value">1,247</span>
          <span className="stat-label">Total Jobs</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏢</div>
          <span className="stat-value">89</span>
          <span className="stat-label">Active Companies</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <span className="stat-value">3,456</span>
          <span className="stat-label">Candidates</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✨</div>
          <span className="stat-value">92%</span>
          <span className="stat-label">Success Rate</span>
        </div>
      </div>

      <div className="form-container">
        <h2 className="form-title">Select Field for Analysis</h2>
        
        <div className="form-group">
          <label className="form-label">Data Type</label>
          <select className="form-input form-select" value={selectedField} onChange={(e) => setSelectedField(e.target.value)} >
            <option value="">Select field...</option>
            <option value="JobName">Job Name</option>
            <option value="JobType">Job Type</option>
          </select>
        </div>
        <button className="form-submit" onClick={handleShowStatistics}>🔍 Show Statistics</button>
      </div>

      {error && (
        <div className="alert alert-error">
          <strong>Error:</strong> {error}
        </div>
      )}

      {statistics && (
        <div className="data-table-container">
          <h3 className="table-title">Results for: {selectedField}</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(statistics).map(([key, value], index) => (
                <tr key={key} className="data-reveal" style={{animationDelay: `${index * 0.1}s`}}>
                  <td>{key}</td>
                  <td>{renderValue(value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Statistics;
