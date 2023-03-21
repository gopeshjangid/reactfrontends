import { useEffect, useState } from "react";

// import { useParams } from "react-router-dom";

const CandidateResumeApi = () => {
  const [resume, setResume] = useState([]);
  const tokenID = localStorage.getItem("token");
  // const { id } = useParams();
  // console.log(id, "id");
  useEffect(() => {
    fetch("http://localhost:5000/findResume", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((response) => response.json(console.log(response)))

      .then((json) => {
        setResume(json.message);
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
  return resume;
};

export default CandidateResumeApi;
