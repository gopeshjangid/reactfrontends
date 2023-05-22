import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const Login = () => {
  // const proceedLogin = localStorage.getItem("false");
  // console.log("eeeeeeeee", proceedLogin);
  const initialValues = {
    username: "",
    password: "",
  };

  const router = useRouter([]);
  const [User, setUser] = useState(initialValues);
  const [data, setData] = useState();
  const [message, setMessage] = useState();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = User;
    let getAllProduct = JSON.parse(localStorage.getItem("product"));
    console.log(getAllProduct);
    if (getAllProduct === null) {
      getAllProduct = [];
    }
    const object = {
      username: username.trim(),
      password: password.trim(),
      getAllProduct,
    };

    setFormErrors(validate(User));
    // add entity - POST
    // e.preventDefault();
    // creates entity

    if (username.trim() === "" || password.trim() === "") {
      return;
    } else {
      setIsLoggedin(true);
      fetch(`${process.env.NEXT_PUBLIC_APIURL}/login`, {
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
          localStorage.setItem("user", JSON.stringify(json.user));
          if (json.message === "successfully login") {
            localStorage.setItem("token", json.token);
            setIsLoggedin(true);
            localStorage.removeItem("product");
            router.push("/dashboard");
          }

          if (
            localStorage.getItem("false") &&
            json.message === "successfully login"
          ) {
            localStorage.setItem("token", json.token);
            setIsLoggedin(true);
            localStorage.removeItem("product");
            localStorage.removeItem("false");
            router.push("/viewcart");
          }

          console.log(json);
          setIsLoggedin(false);
        })
        .catch((err) => {
          console.log(err);
        });

      setIsSubmit(true);
    }
  };

  useEffect(() => {
    const res = data?.User?.message;
    setMessage(res);
  }, [data]);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(User);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    // const regex = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (!values.username) {
      errors.username = "!'Please Enter Your Email / Username'";
    } // else if(!regex.test(values.username)) {
    // 	errors.username = "!'This is not Email Format'"
    // }

    if (!values.password) {
      errors.password = "!'Please Enter Your Password'";
    }

    return errors;
  };

  return (
    <div>
      {/* {message === "successfully login" && isLoggedin ? (
        <Loader />
      ) : ( */}
      <section className="reg_sec">
        <Head>
          <title>Login - Get Pro Writer</title>

          <meta
            name="description"
            content="Login to use our content writing services. You tell us what you need, we deliver it on time."
          />
          <meta
            name="robots"
            content="noindex, nofollow, max-image-preview:large"
          />
          <link rel="canonical" href="https://getprowriter.com/login/" />
          <meta name="generator" content="All in One SEO (AIOSEO) 4.2.3.1 " />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:site_name"
            content="Get Pro Writer - Content That Brings Wow Reaction"
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Login - Get Pro Writer" />
          <meta
            property="og:description"
            content="Login to use our content writing services. You tell us what you need, we deliver it on time."
          />
          <meta property="og:url" content="https://getprowriter.com/login/" />
          <meta
            name="twitter:image"
            content="https://getprowriter.com/static/media/gp-writer-complete.27da0b023e5c7ba342e7.png"
          />
          <meta
            property="article:published_time"
            content="2022-01-10T06:41:20+00:00"
          />
          <meta
            property="article:modified_time"
            content="2022-04-15T10:54:07+00:00"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Login - Get Pro Writer" />
          <meta
            name="twitter:description"
            content="Login to use our content writing services. You tell us what you need, we deliver it on time."
          />
          <meta
            name="twitter:image"
            content="https://getprowriter.com/static/media/gp-writer-complete.27da0b023e5c7ba342e7.png"
          />
        </Head>

        <div className="container">
          <div className="row justify-content-center">
            <form method="POST" className="login-form" onSubmit={handleSubmit}>
              <label className="reg-lbl"> Username or E-mail </label>
              <input
                type="text"
                autoComplete="username"
                id="fname"
                name="username"
                placeholder=" Username or E-mail "
                onChange={handleChange}
                className="text_set"
              />
              <p style={{ color: "red" }}>{formErrors.username}</p>

              <label className="reg-lbl">Password</label>
              <input
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                className="ct_text-set1"
              />
              <p style={{ color: "red" }}>{formErrors.password}</p>

              <button
                type="submit"
                disabled={isLoggedin}
                className="reg_btn-1 d-flex justify-content-center m-0 mt-4 m-auto"
              >
                Login
              </button>
              <br />

              {message === "successfully login" ? (
                <h3
                  className="Success text-center"
                  style={{ color: "#03979c" }}
                >
                  {message}
                </h3>
              ) : (
                <h3 className="Success text-danger text-center">{message}</h3>
              )}

              <p className="text-center m-0 fs-6 mb-1">
                <span>Not a member?</span>
                <Link href="/register" className="signup">
                  SignUp!
                </Link>
              </p>

              <p className="text-center m-0 fs-6">
                <Link className="forgot_p p-0" href="/forgot">
                  Forgot Password?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
      {/* )} */}
    </div>
  );
};

export default Login;
