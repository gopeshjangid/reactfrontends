import React from "react";

import { useNavigate } from "react-router-dom";

// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/bootstrap.css";

import { useState, useEffect } from "react";
import env from "react-dotenv";
// import axios from 'axios'

const PricesGetintouch = () => {
  const initialValues = {
    username: "",
    email: "",
    number: "",
    password: "",
    deadline: "",
    expertLevel: "",
    contentType: "",
    countryCode: "",
  };

  const navigate = useNavigate();

  const [User, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState();
  const [data, setData] = useState();
  const [country, setCountry] = useState([]);
  const [Alltype, setAlltype] = useState([]);
  const [expertlevel, setExpertlevel] = useState([]);

  // const [state, setState] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  useEffect(() => {
    fetch(`${env.REACT_APP_APIURL}/getAllExpertLevel`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json(console.log(res));
      })
      .then((response) => {
        setExpertlevel(response.message);

        console.log(response.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch(`${env.REACT_APP_APIURL}/getAllContentType`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json(console.log(res)))
      .then((response) => {
        setAlltype(response.message);

        console.log(response.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  // 	console.log(message);
  // 	if(Object.keys(message).length === 0 && isSubmit) {
  // 		console.log(User);

  // 	}
  // },[])
  useEffect(() => {
    fetch(`${env.REACT_APP_APIURL}/getCountryCode`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json(console.log(res)))
      .then((response) => {
        setCountry(response.message);

        console.log(response.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      username,
      email,
      password,
      number,
      deadline,
      contentType,
      expertLevel,
      countryCode,
    } = User;

    const object = {
      username: username.trim(),
      email: email.trim(),

      password: password.trim(),
      number: number.trim(),
      deadline: deadline.trim(),
      contentType: contentType.trim(),
      expertLevel: expertLevel.trim(),
      countryCode: countryCode.trim(),
    };

    setFormErrors(validate(User));

    // add entity - POST
    // e.preventDefault();
    // creates entity

    const passwordLength1 = /^.{6,}$/;
    const regex1 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      number.trim() === "" ||
      deadline.trim() === "" ||
      contentType.trim() === "" ||
      expertLevel.trim() === "" ||
      countryCode.trim() === "" ||
      regex1.test(email.trim()) === false ||
      passwordLength1.test(password.trim()) === false
    ) {
      return;
    } else {
      fetch(`${env.REACT_APP_APIURL}/getInTouch`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json(console.log(response)))

        .then((json) => {
          setData({
            User: json,
          });
          if (json.message === "successfully login and order") {
            localStorage.setItem("token", json.token);
            navigate("/accountSetting");
          }

          // setMessage(json.message)
          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });
      // setState(valid(json.message));

      setIsSubmit(true);
    }
  };

  // useEffect(() => {
  // 	const res = data?.User?.error;
  // 	setError(res);

  // }, [])

  useEffect(() => {
    const res = data?.User?.message;
    setMessage(res);
  }, [data]);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(User);
      // fetchData()
    }
  }, [formErrors, isSubmit, User]);
  const validate = (values) => {
    const errors = {};

    const passwordLength = /^.{6,}$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "!'Please Enter Your Name'";
    }
    if (!values.email) {
      errors.email = "!'Please Enter Your Email'";
    } else if (!regex.test(values.email)) {
      errors.email = "!'This is not Email Format'";
    }
    if (!values.password) {
      errors.password = "!'Please Enter Your Password'";
    } else if (!passwordLength.test(values.password)) {
      errors.password = "!'Please enter maximum 6 character'";
    }
    if (!values.number) {
      errors.number = "!'Please Enter Your Number'";
    }
    if (!values.countryCode) {
      errors.countryCode = "!'Please Choose your countrycode'";
    }
    // else if (values.number.length < 10) {
    //   errors.number = "!'Please Enter 10 Character'";
    // } else if (values.number.length > 10) {
    //   errors.number = "!'Please Enter 10 Character'";
    // }
    if (!values.deadline) {
      errors.deadline = "!'Please Enter Your deadline'";
    }
    if (!values.expertLevel) {
      errors.expertLevel = "!'Please Choose your Expert Level'";
    }
    if (!values.contentType) {
      errors.contentType = "!'Please Choose your AllType'";
    }

    return errors;
  };

  return (
    <form
      style={{ padding: "4%" }}
      className="text-center"
      onSubmit={handleSubmit}
    >
      <h2 className="form_sec-h2">
        Get In <span className="spa">Touch </span>
      </h2>
      <div className="form-inputs d-flex space-between">
        <div className="Home-Name">
          <input
            type="text"
            name="username"
            placeholder="Name"
            onChange={handleChange}
            className="text_set ms-0 me-1 mt-0"
          />
          <p className="mb-0" style={{ color: "red" }}>
            {formErrors.username}
          </p>
        </div>

        <div className="Home-Name">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="text_set ms-1 mt-0"
          />
          <p className="mb-0" style={{ color: "red" }}>
            {formErrors.email}
          </p>
        </div>
      </div>
      <div className="Home-Name">
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          className="text_set ms-0 mt-0"
        />
      </div>
      <p className="mb-0" style={{ color: "red" }}>
        {formErrors.password}
      </p>
      <div className="form-inputs d-flex space-between">
        <div className="Home-Name">
          <div className=" position-relative">
            <select
              className=" position-absolute h-100 border-0"
              style={{
                top: "0px",
                width: "20%",
                cursor: "pointer",
              }}
              name="countryCode"
              onChange={handleChange}
              // name="name"
            >
              <option>
                {country?.[93]?.dial_code}&nbsp;{country?.[93]?.name}
              </option>
              {country?.map((countryitem, value) => {
                return (
                  <>
                    <option value={value}>
                      {countryitem.dial_code}
                      &nbsp;{countryitem.name}
                    </option>
                  </>
                );
              })}
            </select>

            <input
              type="text"
              style={{ paddingLeft: "60px" }}
              name="number"
              placeholder="number"
              onChange={handleChange}
              className="text_set ms-0 me-1 mt-0"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <p className="mb-0" style={{ color: "red" }}>
            {formErrors.countryCode}
          </p>

          {/* <P className="mb-0"honeInput
            country={"India"}
            enableSearch={true}
            value={phone}
            name="number"
            className="w-100 me-1"
            onChange={(phone) => setPhone(phone)}
          /> */}
          <p className="mb-0" style={{ color: "red" }}>
            {formErrors.number}
          </p>
        </div>
        <div className="Home-Name">
          <select
            aria-label="Default select example"
            className="form-select rounded-0 text_set ms-1 mt-0"
            onChange={handleChange}
            name="contentType"
            style={{
              cursor: "pointer",
            }}
          >
            {Alltype?.map((Alltypeitem, value) => {
              return (
                <>
                  <option value={value}>{Alltypeitem.contentType}</option>
                </>
              );
            })}
          </select>

          <p className="mb-0" style={{ color: "red" }}>
            {formErrors.contentType}
          </p>
        </div>
      </div>
      <div className="form-inputs d-flex space-between">
        <div className="Home-Name">
          <input
            type="text"
            name="deadline"
            placeholder="Deadline"
            onChange={handleChange}
            className="text_set ms-0 me-1 mt-0"
          />
          <p className="mb-0" style={{ color: "red" }}>
            {formErrors.deadline}
          </p>
        </div>

        <div className="Home-Name">
          <select
            aria-label="Default select example"
            className="form-select rounded-0 text_set ms-1 mt-0"
            onChange={handleChange}
            name="expertLevel"
            style={{
              cursor: "pointer",
            }}
          >
            {/* <option selected>Expert Level</option> */}
            {expertlevel?.map((expertlevelItem, value) => {
              return (
                <>
                  <option value={value}>{expertlevelItem.expertLevel}</option>
                </>
              );
            })}
          </select>

          <p className="mb-0" style={{ color: "red" }}>
            {formErrors.expertLevel}
          </p>
        </div>
      </div>
      <button type="submit" className="btn_set1 ms-0">
        Register
      </button>{" "}
      {message === "successfully login and order" ? (
        <h3 className="Success text-center" style={{ color: "#03979c" }}>
          {message}
        </h3>
      ) : (
        <h3 className="Success text-danger text-center">{message}</h3>
      )}
      {/* <Link to="/Login"><button type="button" className="btn_set2" onClick={(e) => this.create(e)}>Login</button></Link> */}
    </form>
  );
};

export default PricesGetintouch;
