import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Footer from "./Header-Footer/Footer";
import Header from "./Header-Footer/Header";
import CandidateProfileDetails from "./Pages/CandidateProfileDetails";
import CandidateList from "./Pages/CandidateList";
import CandidateProfile from "./Pages/CandidateProfile";
import EmployerDetails from "./Pages/EmployerDetails";
import EmployerList from "./Pages/EmployerList";
import EmployerProfile from "./Pages/EmployerProfile";
import EmployerProfileDetails from "./Pages/EmployerProfileDetails";

import Index from "./Pages/Index";
import Index2 from "./Pages/Index2";

import Index4 from "./Pages/Index4";
import Index5 from "./Pages/Index5";
import Login from "./Pages/Login";
import CandidateDetail from "./Pages/CandidateDetail";
import EmployerPostJob from "./Pages/EmployerPostJob";
import EmployerDashboard from "./Pages/EmployerDashboard";
import DashboardCandidate from "./Pages/DashboardCandidate";
import EmployerManageJob from "./Pages/EmployerManageJob";
import EmployerJobDetail from "./Pages/EmployerJobDetail";
import CandidateJobApplied from "./Pages/CandidateJobApplied";
import BrowseCandidate from "./Pages/BrowseCandidate";
import CandidateMyResume from "./Pages/CandidateMyResume";
import CandidateMyResumeDetail from "./Pages/CandidateMyResumeDetail";
import DashPostJob from "./Pages/DashPostJob";
import DashCompanyProfile from "./Pages/DashCompanyProfile";
import DashCompanyProfileUpdate from "./Pages/DashCompanyProfileUpdate";


function App() {
  const [login,setLogin]=useState(false)
  const [admin,setAdmin] = useState([])

const tokenID = localStorage.getItem("token")
console.log(tokenID)

useEffect(()=>{
  fetch("http://localhost:5000/checkLogin", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          Authorization: `${tokenID}`,
        },
      })
        .then((response) => response.json(console.log(response)))

        .then((json) => {
          setAdmin(json)
        console.log(json.message.accountType)
        if(json.message.accountType=="admin"){
            setLogin(true)
        }else{
          setLogin(false)
        }
        
        })
        .catch((err) => {
          console.log(err);
        });
 

},[tokenID])


  return (


    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index-2" element={<Index2 />} />

        <Route path="/index-4" element={<Index4 />} />
        <Route path="/index-5" element={<Index5 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/candidate-list" element={<CandidateList />} />
        <Route path="/employer-list" element={<EmployerList />} />

        <Route path="/employer-profile" element={<EmployerProfile />} />
        <Route
          path="/employer-profile-details"
          element={<EmployerProfileDetails />}
        />

        <Route path="/employer-detail/:id" element={<EmployerDetails />} />
        <Route path="/candidate-profile" element={<CandidateProfile />} />
        <Route path="/candidate-list" element={<CandidateList />} />
        <Route
          path="/candidate-profile-detail"
          element={<CandidateProfileDetails />}
        />
        <Route path="/candidate-detail/:id" element={<CandidateDetail />} />
        <Route path="/employer-post-job" element={<EmployerPostJob />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/candidate-dashboard" element={<DashboardCandidate />} />
        <Route path="/employer-manage-job" element={<EmployerManageJob />} />
        <Route
          path="/employer-job-detail/:id"
          element={<EmployerJobDetail />}
        />
        <Route
          path="/candidate-jobs-applied"
          element={<CandidateJobApplied />}
        />
        <Route path="/candidate-grid" element={<BrowseCandidate />} />
        <Route path="/candidate-my-resume" element={<CandidateMyResume />} />
        <Route
          path="/candidate-my-resume-detail"
          element={<CandidateMyResumeDetail />}
        />
   
          <>
        <Route path="/dash-post-job" element={<DashPostJob /> }/>
        <Route path="/dash-company-profile" element={<DashCompanyProfile />} />
        <Route
          path="/dash-company-profile-update"
          element={<DashCompanyProfileUpdate />}  
        />
        </>

   
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
