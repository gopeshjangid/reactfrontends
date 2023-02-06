// import React from "react";
// import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";

// const ViewProfile = () => {
//   // const navigate = useNavigate();

//   useEffect(() => {
//     const getToken = localStorage.getItem("token");

//     console.log(getToken);

//     // if (getToken == null) {

//     // 	navigate('/login')

//     // }
//   }, []);

//   const initialValues = {
//     username: "",
//     email: "",
//     password: "",
//   };

//   const [Users, setUsers] = useState(initialValues);
//   const [Data, setData] = useState([]);
//   const [userName, setUserName] = useState("");
//   const [message, setMessage] = useState();

//   // const [value, setValue] = useState();
//   // const [formErrors, setFormErrors] = useState({});
//   // const [isSubmit, setIsSubmit] = useState(false);

//   // const [isLoggedin, setIsLoggedin] = useState(false);

//   useEffect(() => {
//     const tokenID = localStorage.getItem("token");
//     console.log("hello", tokenID);
//     fetch("http://localhost:5000/viewProfile", {
//       method: "GET",
//       mode: "cors",

//       headers: {
//         "Content-type": "application/json",
//         Authorization: `${tokenID}`,
//       },
//     })
//       .then((response) =>
//         response.json(
//           setUsers({
//             response,
//           })
//         )
//       )
//       .then((json) => {
//         setUserName(json.data.username);
//         console.log(Users);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [Users]);

//   // console.log("sonu",Data.json.data)

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setData({ ...Users, [name]: value });
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // setFormErrors(validate(Users));
//     const tokenId = localStorage.getItem("token");
//     console.log("namastey", tokenId);
//     fetch("http://localhost:5000/updateProfile", {
//       method: "POST",
//       mode: "cors",
//       body: JSON.stringify({ NewUserName: userName }),
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `${tokenId}`,
//       },
//     })
//       .then((response) => response.json(console.log(response)))
//       .then((json) => {
//         setData({
//           json,
//         });
//         // if (json.message === "successfully updated") {
//         //   // navigate("/AccountSetting");
//         // }
//         setMessage(json.data);

//         console.log(json.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   console.log(message);

//   console.log("--------------", Data.data);

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="me-3">
//         <label className="as-lbl">FullName</label>
//         <input
//           type="text"
//           id="fname1"
//           name="username"
//           onChange={(e) => setUserName(e.target.value)}
//           className="as-text_set"
//           value={userName}
//         />
//         {/* <p style={{ color: "red" }}>{formErrors.username}</p> */}
//       </div>

//       <div className="me-3">
//         <label className="as-lbl">Email Id</label>
//         <input
//           type="text"
//           id="fname2"
//           name="email"
//           className="as-text_set"
//           value={Data?.data?.email}
//         />
//       </div>

//       <button type="submit" className="as-btn_set m-auto me-1">
//         Update
//       </button>
//       {message === "successfully updated" ? (
//         <span className="Success" style={{ color: "#03979c" }}>
//           {message}
//         </span>
//       ) : (
//         <span className="Success text danger">{message}</span>
//       )}
//     </form>
//   );
// };

// export default ViewProfile;

import React from "react";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const ViewProfile = () => {
  // const navigate = useNavigate();

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    console.log(getToken);

    // if (getToken == null) {

    // 	navigate('/login')

    // }
  }, []);

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const [Users, setUsers] = useState(initialValues);
  const [Data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState();

  // const [value, setValue] = useState();
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const tokenID = localStorage.getItem("token");
    console.log("hello", tokenID);
    fetch("https://getprowriter.onrender.com/viewProfile", {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((response) =>
        response.json(
          setUsers({
            response,
          })
        )
      )
      .then((json) => {
        setData(json);
        setUserName(json.data.username);
        console.log(Users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log("sonu",Data.json.data)

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...Users, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(Users));
    const tokenId = localStorage.getItem("token");
    console.log("namastey", tokenId);
    fetch("https://getprowriter.onrender.com/updateProfile", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ NewUserName: userName }),
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenId}`,
      },
    })
      .then((response) => response.json(console.log(response)))
      .then((json) => {
        setData({
          json,
        });
        // if (json.message === "successfully updated") {
        //   // navigate("/AccountSetting");
        // }
        setMessage(json.data);

        console.log(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(message);

  console.log("--------------", Data.data);

  return (
    <form onSubmit={handleSubmit}>
      <div className="me-3">
        <label className="as-lbl">FullName</label>
        <input
          type="text"
          id="fname1"
          name="username"
          onChange={(e) => setUserName(e.target.value)}
          className="as-text_set"
          value={userName}
        />
        {/* <p style={{ color: "red" }}>{formErrors.username}</p> */}
      </div>

      <div className="me-3">
        <label className="as-lbl">Email Id</label>
        <input
          type="text"
          id="fname2"
          name="email"
          className="as-text_set"
          value={Data?.data?.email}
        />
      </div>

      <button type="submit" className="as-btn_set m-auto me-1">
        Update
      </button>
      {message === "successfully updated" ? (
        <span className="Success" style={{ color: "#03979c" }}>
          {message}
        </span>
      ) : (
        <span className="Success text danger">{message}</span>
      )}
    </form>
  );
};

export default ViewProfile;
