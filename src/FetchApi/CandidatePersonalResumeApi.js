// import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CandidatePersonalResumeApi = () => {
  const [personalresume, setPersonalResume] = useState([]);
  const tokenID = localStorage.getItem("token");
  const { _id } = useParams();
  console.log(_id, "id");
  useEffect(() => {
    fetch("http://localhost:5000/findUserResume", {
      method: "GET",
      mode: "cors",
      body: { userId: _id },
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((response) => response.json(console.log(response)))

      .then((json) => {
        setPersonalResume(json.message);
        // const resumeData = json.message?.filter(
        //   (item, index) => item._id === id
        // );
        // console.log(resumeData);
        // setMessage(json.message);
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return personalresume;
};

export default CandidatePersonalResumeApi;
