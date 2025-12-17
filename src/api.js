import axios from 'axios'


const URL="https://server-jobs-app-1.onrender.com/api"

//1
export const getAllJobs=async()=>{
    try{
        const list=await axios.get(`${URL}/Jobs`)
        return list.data
    }
    catch (e){
         console.error(e)
        
    }
}

//2
export const addJobToDb=async(newjob)=>{
    try{
        const addNow=await axios.post(`${URL}/jobs`,newjob)
        return addNow.data

    }
    catch(e){
        console.error(e)
    }

}

//3
export const deleteFromDb=async(job)=>
{
  try{
    const currentDelete = await axios.delete(`${URL}/jobs/${job.jobID}`)
    return console.log("currentDelete",currentDelete)
  }
  catch (e){
    console.error(e)
  }

}
//4
export const upDteFromDb = async (job) => {
  try {
    const currentUpDate = await axios.put(`${URL}/jobs/${job.jobID}`, job)
    return currentUpDate.data
  } catch (e) {
    console.error(e)
  }
}

//5
export const showStistikot = async (fieldObj) => {
  try {
    const response = await axios.get(`${URL}/jobs/statistics`, {
      params: { field: fieldObj.field } 
    });
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};


//6
export const DownStistikot = async () => {
  try {
    const response = await axios.get(`${URL}/jobs/export-to-excel`, {
      responseType: "blob" 
    });
    return response; 
  } catch (e) {
    console.error(e);
    throw e;
  }
};
