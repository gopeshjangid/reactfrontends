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
    // add entity - POST
    // e.preventDefault();
    // creates entity
    const tokenID = localStorage.getItem("token");
    console.log("hello", tokenID);
    fetch("http://localhost:5000/viewProfile", {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    }) // .then((res) => res.json())
      .then((response) =>
        response.json(
          setUsers({
            response,
          })
        )
      )

      .then((json) => {
        // if (json.message === "mail have sent successfully") {
        // 	navigate('/login');
        // }

        setData(json);
        setUserName(json.data.username);

        // setError(json.error)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Users]);

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
    fetch("http://localhost:5000/updateProfile", {
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

    // setIsSubmit(true);
  };

  // useEffect(() => {
  // 	const res = Data?.Users?.data;
  // 	setMessage(res);

  // }, [Data])

  // useEffect(() => {
  //   const res = Data?.data?.message;
  //   setMessage(res);
  // }, [Data]);
  console.log(message);

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(Users);
  //   }
  // }, [formErrors]);
  // console.log(Users);

  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.username) {
  //     errors.username = "!'Please Change Your username'";
  //   }

  //   return errors;
  // };

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
          //   onChange={handleChange}
          className="as-text_set"
          value={Data?.data?.email}
        />

        {/* <p style={{ color: "red" }}>{formErrors.email}</p> */}
      </div>
      {/* {Object.keys(formErrors, message).length === 0 && isSubmit ? ( */}

      {/* ) : (
        ""
      )} */}

      <button type="submit" className="as-btn_set m-auto me-1">
        Update
      </button>
      <span className="Success">{message}</span>
    </form>
  );
};

export default ViewProfile;
