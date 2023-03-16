import React, { useState } from "react";
import { Link } from "react-router-dom";

const CandidateMyResume = () => {
  const resumeValues = { ResumeHeadline: "" };

  const [resumeHeadline, setResumeHaeadline] = useState(resumeValues);

  const resumeChange = (e) => {
    const { name, value } = e.target;
    setResumeHaeadline({ ...resumeHeadline, [name]: value });
  };

  const ResumeHeadlineClick = (e) => {
    e.preventDefault();
    setResumeHaeadline(resumeHeadline);
    console.log(resumeHeadline);
  };



const tableValue ={
  fullName: "",
}

  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState(tableValue);

  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setformInputData(newInput);
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = { fullName: "" };
      setformInputData(emptyInput);
    }
  };

  const EmployerValues = {
    Designation: "",
    ComapnyName: "",
    startDate: "",
    EndDate: "",
    JobProfile: "",
  };

  const [employer, setEmployer] = useState(EmployerValues);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setEmployer({ ...employer, [name]: value });
  };

  const EmployerClick = (e) => {
    e.preventDefault();
    setEmployer(employer);
    console.log(employer);
  };

  const educationValues = {
    education: "",
    course: "",
    institute: "",
  };

  const [education, setEducation] = useState(educationValues);

  const educationChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const EducationClick = (e) => {
    e.preventDefault();
    setEducation(education);
    console.log(education);
  };

  const projectValues = {
    ProjectClientName: "",
    ProjectEducation: "",
    ProjectTitle: "",
    projectDetail: "",
    projectEndDate: "",
    projectStartDate: "",
  };

  const [project, setProject] = useState(projectValues);

  const ProjectChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const ProjectClick = (e) => {
    e.preventDefault();
    setProject(project);
    console.log(project);
  };




  const desiredValues = {
    industry: "",
    functionalarea: "",
    role: "",
    jobtype: "",
    employmenttype: "",
    preferredshift: "",
    availabilityjoin: "",
    expectedsalary: "",
    desiredlocation: "",
    desiredindustry: "",
  };

  const [desired, setDesired] = useState(desiredValues);

  const desiredChange = (e) => {
    const { name, value } = e.target;
    setDesired({ ...desired, [name]: value });
  };

  const desiredClick = (e) => {
    e.preventDefault();
    setDesired(desired);
    console.log(desired);
  };

  const personalValues = {
    dateofbirth: "",
    gender: "",
    permanentAddress: "",
    hometown: "",
    pincode: "",
    maritalstatus: "",
    passportnumber: "",
    assistance: "",
    otherCountry: "",
  };

  const [personal, setPersonal] = useState(personalValues);

  const personalChange = (e) => {
    const { name, value } = e.target;
    setPersonal({ ...personal, [name]: value });
  };

  const personalClick = (e) => {
    e.preventDefault();
    setPersonal(personal);
    console.log(personal);
  };

  const Allset = [{ resumeHeadline, employer, education,tableData, project, desired, personal }]

  console.log(Allset)
  const [all, setAll] = useState([Allset])

  const allClick = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/register", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(Allset),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json(console.log(response)))

      .then((json) => {
        setAll({
          User: json,
        });


        // setMessage(json.message);
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
    setAll(all);
    console.log(all);
  };
  return (
    <div>
      {/* CONTENT START */}
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: "url(jobzilla/images/banner/1.jpg)" }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="wt-title">Candidate Resume</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Candidate Resume</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        {/* OUR BLOG START */}
        <div className="section-full p-t120  p-b90 site-bg-white">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-12 rightSidebar m-b30">
                <div className="side-bar-st-1">
                  <div className="twm-candidate-profile-pic">
                    <img src="jobzilla/images/user-avtar/pic4.jpg" alt="" />
                    <div className="upload-btn-wrapper">
                      <div id="upload-image-grid" />
                      <button className="site-button button-sm">
                        Upload Photo
                      </button>
                      <input
                        type="file"
                        name="myfile"
                        id="file-uploader"
                        accept=".jpg, .jpeg, .png"
                      />
                    </div>
                  </div>
                  <div className="twm-mid-content text-center">
                    <Link href="/candidate-detail" className="twm-job-title">
                      <h4>Randall Henderson </h4>
                    </Link>
                    <p>IT Contractor</p>
                  </div>
                  <div className="twm-nav-list-1">
                    <ul>
                      <li>
                        <Link href="/candidate-dashboard">
                          <i className="fa fa-tachometer-alt" /> Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link href="/candidate-profile">
                          <i className="fa fa-user" /> My Pfofile
                        </Link>
                      </li>
                      <li>
                        <Link href="/candidate-jobs-applied">
                          <i className="fa fa-suitcase" /> Applied Jobs
                        </Link>
                      </li>
                      <li className="active">
                        <Link href="/candidate-my-resume">
                          <i className="fa fa-receipt" /> My Resume
                        </Link>
                      </li>
                      <li>
                        <Link href="/candidate-saved-jobs">
                          <i className="fa fa-file-download" /> Saved Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/candidate-cv-manager">
                          <i className="fa fa-paperclip" /> CV Manager
                        </Link>
                      </li>
                      <li>
                        <Link href="/candidate-job-alert">
                          <i className="fa fa-bell" /> Job Alerts
                        </Link>
                      </li>
                      <li>
                        <Link href="/candidate-change-password">
                          <i className="fa fa-fingerprint" /> Change Passeord
                        </Link>
                      </li>
                      <li>
                        <Link href="/candidate-chat">
                          <i className="fa fa-comments" />
                          Chat
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12 m-b30">
                <div className="twm-right-section-panel site-bg-gray">
                  {/*Resume Headline*/}
                  <div className="panel panel-default mb-3">
                    <div className="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                      <h4 className="panel-tittle m-a0">Resume Headline</h4>
                      <button
                        data-bs-toggle="modal"
                        href="#Resume_Headline"
                        title="Edit"
                        className="site-text-primary bg-transparent border-0 p-0"
                      >
                        <span className="fa fa-edit" />
                      </button>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 ">
                      <div className="twm-panel-inner">
                        <div>{resumeHeadline.ResumeHeadline }</div>
                      </div>
                    </div>
                    {/*Modal Popup */}
                    <div
                      className="modal fade twm-saved-jobs-view"
                      id="Resume_Headline"
                      tabIndex={-1}
                      style={{ background: "#00000045" }}
                      aria-hidden="true"
                      data-bs-backdrop="static"
                      aria-labelledby="Resume_HeadlineLabel"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <form  onSubmit={ResumeHeadlineClick}>
                            <div className="modal-header">
                              <h2 className="modal-title">Resume Headline</h2>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <p>
                                It is the first thing recruiters notice in your
                                profile. Write concisely what makes you unique
                                and right person for the job you are looking
                                for.
                              </p>
                              <div className="row">
                                <div className="col-lg-12 col-md-12">
                                  <div className="form-group twm-textarea-full">
                                    <textarea
                                      className="form-control"
                                      name="ResumeHeadline"
                                      onChange={resumeChange}
                                      placeholder="Type Description"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="site-button"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="submit"
                               
                                className="site-button"
                              >
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Key Skills*/}
                  <div className="panel panel-default mb-3">
                    <div className="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                      <h4 className="panel-tittle m-a0">Key Skills</h4>

                      <div
                        className="modal fade twm-saved-jobs-view"
                        style={{ background: "#00000045" }}
                        id="Key_Skills"
                        tabIndex={-1}
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <form>
                              <div className="modal-header">
                                <h2 className="modal-title">Key Skills</h2>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                />
                              </div>
                              <div className="modal-body">
                                <p>
                                  It is the first thing recruiters notice in
                                  your profile. Write concisely what makes you
                                  unique and right person for the job you are
                                  looking for.
                                </p>
                                <div className="form-group">
                                  <input
                                    htmlFor="fullName"
                                    className="form-control"
                                    name="fullName"
                                    type="text"
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="site-button"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  onClick={handleSubmit}
                                  className="site-button"
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <button
                        data-bs-toggle="modal"
                        href="#Key_Skills"
                        title="Edit"
                        className="site-text-primary bg-transparent p-0 border-0"
                      >
                        <span className="fa fa-edit" />
                      </button>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 ">
                      <div className="tw-sidebar-tags-wrap">
                        <div className="tagcloud">
                          {tableData?.map((friend, index) => {
                            return (
                              <>
                                {" "}
                                <Link>{friend.fullName}</Link>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    {/*Modal popup */}
                  </div>
                  {/*Employment*/}
                  <div className="panel panel-default mb-3">
                    <div className="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                      <h4 className="panel-tittle m-a0">Employment</h4>
                      <button
                        data-bs-toggle="modal"
                        href="#Employment"
                        title="Edit"
                        className="site-text-primary bg-transparent border-0 p-0"
                      >
                        <span className="fa fa-edit" />
                      </button>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 ">
                      <div className="twm-panel-inner">
                        <p>
                          <b>Senior UI / UX Designer and Developer</b>
                        </p>
                        <p>{employer.ComapnyName}</p>
                        <p>{employer.Designation}</p>
                        <p>{employer.JobProfile}</p>
                      </div>
                    </div>
                    {/*Employment */}
                    <div
                      className="modal fade twm-saved-jobs-view"
                      style={{ background: "#00000045" }}
                      id="Employment"
                      tabIndex={-1}
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <form onSubmit={EmployerClick}>
                            <div className="modal-header">
                              <h2 className="modal-title">Add Employment</h2>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Your Designation</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        className="form-control"
                                        type="text"
                                        onChange={inputChange}
                                        name="Designation"
                                        placeholder="Enter Your Designation"
                                      />
                                      <i className="fs-input-icon fa fa-address-card" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Your Company Name</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        className="form-control"
                                        type="text"
                                        onChange={inputChange}
                                        name="ComapnyName"
                                        placeholder="Enter Your Organization"
                                      />
                                      <i className="fs-input-icon fa fa-building" />
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Is this your current company?</label>
                                    <div className="row twm-form-radio-inline">
                                      <div className="col-md-6">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="flexRadioDefault1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexRadioDefault1"
                                        >
                                          Yes
                                        </label>
                                      </div>
                                      <div className="col-md-6">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="S_no"
                                          defaultChecked
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="S_no"
                                        >
                                          No
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
                                {/*Start Date*/}
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label>Started Working From</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        className="form-control datepicker"
                                        data-provide="datepicker"
                                        name="startDate"
                                        onChange={inputChange}
                                        type="text"
                                        placeholder="mm/dd/yyyy"
                                      />
                                      <i className="fs-input-icon far fa-calendar" />
                                    </div>
                                  </div>
                                </div>
                                {/*End Date*/}
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label>Worked Till</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        className="form-control datepicker"
                                        data-provide="datepicker"
                                        name="EndDate"
                                        onChange={inputChange}
                                        type="text"
                                        placeholder="mm/dd/yyyy"
                                      />
                                      <i className="fs-input-icon far fa-calendar" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group mb-0">
                                    <label>Describe your Job Profile</label>
                                    <textarea
                                      className="form-control"
                                      rows={3}
                                      onChange={inputChange}
                                      name="JobProfile"
                                      placeholder="Describe your Job"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="site-button"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="submit" className="site-button">
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Education*/}
                  <div className="panel panel-default mb-3">
                    <div className="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                      <h4 className="panel-tittle m-a0">Education</h4>
                      <button
                        data-bs-toggle="modal"
                        href="#Education"
                        title="Edit"
                        className="site-text-primary bg- transparent border-0 p-0"
                      >
                        <span className="fa fa-edit" />
                      </button>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 ">
                      <div className="twm-panel-inner">
                        <p>
                          Mention your employment details including your current
                          and previous company work experience
                        </p>
                        <p>2004 to 2006</p>
                        <p>
                          <b>{education.education}</b>
                        </p>
                        <p>2006 to 2008</p>
                        <p>
                          <b>{education.course}</b>
                        </p>
                        <p>2008 to 20011</p>
                        <p>
                          <b>{education.institute}</b>
                        </p>
                      </div>
                    </div>
                    {/*Education */}
                    <div
                      className="modal fade twm-saved-jobs-view"
                      id="Education"
                      style={{ background: "#00000045" }}
                      tabIndex={-1}
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <form onSubmit={EducationClick}>
                            <div className="modal-header">
                              <h2 className="modal-title">Education</h2>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label>Education</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        className="form-control"
                                        name="education"
                                        onChange={educationChange}
                                        type="text"
                                        placeholder="Education"
                                      />
                                      <i class="fs-input-icon fa fa-user-graduate" />
                                    </div>
                                  </div>
                                </div>
                                {/*End Date*/}
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label>Course</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        className="form-control"
                                        name="course"
                                        onChange={educationChange}
                                        type="text"
                                        placeholder="Course"
                                      />
                                      <i class="fs-input-icon fa fa-book" />
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label>University/Institute</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        className="form-control"
                                        name="institute"
                                        onChange={educationChange}
                                        type="text"
                                        placeholder="University/Institute"
                                      />
                                      <i class="fs-input-icon fas fa-book-reader" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="site-button"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="submit" className="site-button">
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*Project*/}
                  <div className="panel panel-default mb-3">
                    <div className="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                      <h4 className="panel-tittle m-a0">Project</h4>
                      <button
                        data-bs-toggle="modal"
                        href="#Pro_ject"
                        title="Edit"
                        className="site-text-primary border-0 p-0 bg-transparent"
                      >
                        <span className="fa fa-edit" />
                      </button>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 ">
                      <div className="twm-panel-inner">
                        <p>
                          <b>Jobzilla</b>
                        </p>
                        <p>{project?.ProjectTitle}</p>
                        <p>{project?.ProjectEducation}</p>
                        <p>{project?.projectDetail}</p>
                      </div>
                    </div>
                    {/*Project */}
                    <div
                      className="modal fade twm-saved-jobs-view"
                      id="Pro_ject"
                      style={{ background: "#00000045" }}
                      tabIndex={-1}
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <form onSubmit={ProjectClick}>
                            <div className="modal-header">
                              <h2 className="modal-title">Add Project</h2>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Project Title</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="ProjectTitle"
                                        placeholder="Enter Project Title"
                                        onChange={ProjectChange}
                                      />
                                      <i className="fs-input-icon fa fa-address-card" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Education</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={ProjectChange}
                                        className="form-control"
                                        type="text"
                                        name="ProjectEducation"
                                        placeholder="Enter Education"
                                      />
                                      <i className="fs-input-icon fa fa-user-graduate" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Client</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={ProjectChange}
                                        className="form-control"
                                        type="text"
                                        name="ProjectClientName"
                                        placeholder="Enter Client Name"
                                      />
                                      <i className="fs-input-icon fa fa-user" />
                                    </div>
                                  </div>
                                </div>

                                {/*Start Date*/}
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label>Started Working From</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={ProjectChange}
                                        className="form-control datepicker"
                                        data-provide="datepicker"
                                        name="projectStartDate"
                                        type="text"
                                        placeholder="mm/dd/yyyy"
                                      />
                                      <i className="fs-input-icon far fa-calendar" />
                                    </div>
                                  </div>
                                </div>
                                {/*End Date*/}
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label>Worked Till</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={ProjectChange}
                                        className="form-control datepicker"
                                        data-provide="datepicker"
                                        name="projectEndDate"
                                        type="text"
                                        placeholder="mm/dd/yyyy"
                                      />
                                      <i className="fs-input-icon far fa-calendar" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group mb-0">
                                    <label>Detail of Projects</label>
                                    <textarea
                                      onChange={ProjectChange}
                                      className="form-control"
                                      rows={3}
                                      name="projectDetail"
                                      placeholder="Describe your Job"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="site-button"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="submit" className="site-button">
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Desired Career Profile*/}
                  <div className="panel panel-default mb-3">
                    <div className="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                      <h4 className="panel-tittle m-a0">
                        Desired Career Profile
                      </h4>
                      <button
                        data-bs-toggle="modal"
                        href="#Desired_Career"
                        title="Edit"
                        className="site-text-primary bg-transparent border-0 p-0"
                      >
                        <span className="fa fa-edit" />
                      </button>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 ">
                      <div className="twm-panel-inner">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Industry</div>
                              <span className="twm-s-info-discription">
                                {desired.industry}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Functional Area</div>
                              <span className="twm-s-info-discription">
                                {desired.functionalarea}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Role</div>
                              <span className="twm-s-info-discription">
                                {desired.role}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Job Type</div>
                              <span className="twm-s-info-discription">
                                {desired.role}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Employment Type</div>
                              <span className="twm-s-info-discription">
                                {desired.employmenttype}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Desired Shift</div>
                              <span className="twm-s-info-discription">
                                {desired.preferredshift}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">
                                Availability to Join
                              </div>
                              <span className="twm-s-info-discription">
                                {desired.availabilityjoin}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Expected Salary</div>
                              <span className="twm-s-info-discription">
                                {desired.expectedsalary}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Desired Location</div>
                              <span className="twm-s-info-discription">
                                {desired.desiredlocation}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Desired Industry</div>
                              <span className="twm-s-info-discription">
                                {desired.desiredindustry}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Desired Career Profile */}
                    <div
                      className="modal fade twm-saved-jobs-view"
                      id="Desired_Career"
                      style={{ background: "#0000003d" }}
                      tabIndex={-1}
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <form onSubmit={desiredClick}>
                            <div className="modal-header">
                              <h2 className="modal-title">
                                Desired Career Profile
                              </h2>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                {/*Industry*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Industry</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={desiredChange}
                                        className="form-control "
                                        type="text"

                                        placeholder="Industry"
                                        name="industry"
                                        id="Permanent"
                                      />
                                      <i className="fs-input-icon fa fa-industry" />
                                    </div>
                                  </div>
                                </div>
                                {/*Functional Area / Department*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Functional Area / Department</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={desiredChange}
                                        className="form-control "
                                        type="text"
                                        placeholder="Agent"
                                        name="functionalarea"
                                        id="Permanent"
                                      />
                                      <i className="fs-input-icon fa fa-building" />
                                    </div>
                                  </div>
                                </div>
                                {/*Role*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Role</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={desiredChange}
                                        className="form-control "
                                        type="text"
                                        placeholder="Role"
                                        name="role"
                                        id="Permanent"
                                      />
                                      <i className="fs-input-icon fa fa-globe-americas" />
                                    </div>
                                  </div>
                                </div>
                                {/*Job Type*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Job Type</label>
                                    <div className=" twm-form-radio-inline">
                                      <input
                                        onChange={desiredChange}
                                        className="form-control "
                                        type="text"
                                        placeholder="Job Types"
                                        name="jobtype"
                                        id="Permanent"
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/*Employment Type*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Employment Type</label>
                                    <div className=" twm-form-radio-inline">
                                      <input
                                        onChange={desiredChange}
                                        className="form-control "
                                        type="text"
                                        placeholder="Employment Type"
                                        name="employmenttype"
                                        id="Permanent"
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/*Preferred Shift*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Preferred Shift</label>
                                    <div className="row twm-form-radio-inline">
                                      <input
                                        onChange={desiredChange}
                                        className="form-control "
                                        type="text"
                                        placeholder="Prefferd Shift"
                                        name="preferredshift"
                                        id="Permanent"
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/*Availability to join*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Availability to Join</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={desiredChange}
                                        className="form-control datepicker"
                                        data-provide="datepicker"
                                        name="availabilityjoin"
                                        type="date"
                                        placeholder="mm/dd/yyyy"
                                      />
                                      <i className="fs-input-icon far fa-calendar" />
                                    </div>
                                  </div>
                                </div>
                                {/*Expected Salary*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Expected Salary</label>
                                    <div className="row twm-form-radio-inline">
                                      <input
                                        onChange={desiredChange}
                                        className="form-control "
                                        type="number"
                                        placeholder="Expected Salary"
                                        name="expectedsalary"
                                        id="Permanent"
                                      />

                                    </div>
                                  </div>
                                </div>

                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Desired Location</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={desiredChange}
                                        className="form-control "
                                        type="text"
                                        placeholder="Desired Location"
                                        name="desiredlocation"
                                        id="Permanent"
                                      />
                                      <i className="fs-input-icon fa fa-map-marker-alt" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group mb-0">
                                    <label>Desired Industry</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={desiredChange}
                                        className="form-control "
                                        type="text"
                                        placeholder="Desired Industry"
                                        name="desiredindustry"
                                        id="Permanent"
                                      />
                                      <i className="fs-input-icon fa fa-globe-americas" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="site-button"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="submit" className="site-button">
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Personal Details*/}
                  <div className="panel panel-default mb-3">
                    <div className="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                      <h4 className="panel-tittle m-a0">Personal Details</h4>
                      <button
                        data-bs-toggle="modal"
                        href="#Personal_Details"
                        title="Edit"
                        className="site-text-primary border-0 bg-transparent p-0"
                      >
                        <span className="fa fa-edit" />
                      </button>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 ">
                      <div className="twm-panel-inner">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Date of Birth</div>
                              <span className="twm-s-info-discription">
                                {personal.dateofbirth}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Permanent Address</div>
                              <span className="twm-s-info-discription">
                                {personal.permanentAddress}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Gender</div>
                              <span className="twm-s-info-discription">
                                {personal.gender}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Area Pin Code</div>
                              <span className="twm-s-info-discription">
                                {personal.pincode}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Marital Status</div>
                              <span className="twm-s-info-discription">
                                {personal.maritalstatus}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Hometown</div>
                              <span className="twm-s-info-discription">
                                {personal.hometown}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Passport Number</div>
                              <span className="twm-s-info-discription">
                                {personal.passportnumber}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">
                                Work permit of other country
                              </div>
                              <span className="twm-s-info-discription">{personal.otherCountry}</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Differently Abled</div>
                              <span className="twm-s-info-discription">
                                {personal.assistance}
                              </span>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    {/*Personal Details Modal */}
                    <div
                      className="modal fade twm-saved-jobs-view"
                      id="Personal_Details"
                      style={{ background: "#00000066" }}
                      tabIndex={-1}
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <form onSubmit={personalClick}>
                            <div className="modal-header">
                              <h2 className="modal-title">Personal Detail</h2>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                {/*Birth Date*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Date of Birth</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={personalChange}
                                        className="form-control "
                                        name="dateofbirth"
                                        type="date"
                                        placeholder="mm/dd/yyyy"
                                      />
                                      <i className="fs-input-icon far fa-calendar" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Gender</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={personalChange}
                                        className="form-control"

                                        name="gender"
                                        type="text"
                                        placeholder="Gender"
                                      />
                                      <i className="fs-input-icon far fa-calendar" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Permanent Address</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={personalChange}
                                        className="form-control"
                                        type="text"
                                        name="permanentAddress"
                                        placeholder="Enter Permanent Address"
                                      />
                                      <i className="fs-input-icon fa fa-map-marker-alt" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Hometown</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={personalChange}
                                        className="form-control"
                                        type="text"
                                        name="hometown"
                                        placeholder="Enter Hometown"
                                      />
                                      <i className="fs-input-icon fa fa-map-marker-alt" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Pincode</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={personalChange}
                                        className="form-control"
                                        type="text"
                                        name="pincode"
                                        placeholder="Enter Pincode"
                                      />
                                      <i className="fs-input-icon fa fa-map-pin" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Marital Status</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={personalChange}
                                        className="form-control"
                                        type="text"
                                        name="maritalstatus"
                                        placeholder="Marital Status"
                                      />
                                      <i className="fs-input-icon fa fa-user" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Passport Number</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={personalChange}
                                        className="form-control"
                                        type="number"
                                        name="passportnumber"
                                        placeholder="Enter Passport Number"
                                      />
                                      <i className="fs-input-icon fa fa-star-of-life" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label>What assistance do you need</label>
                                    <textarea
                                      className="form-control"
                                      rows={3}
                                      onChange={personalChange}
                                      name="assistance"
                                      placeholder="Describe"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group mb-0">
                                    <label>
                                      Work Permit for Other Countries
                                    </label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        onChange={personalChange}
                                        className="form-control"
                                        type="text"
                                        name="otherCountry"
                                        placeholder="Enter Other Country"
                                      />
                                      <i className="fs-input-icon fa fa-globe-americas" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="site-button"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="submit" className="site-button">
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Attach Resume*/}
                  <button type="button" onClick={allClick} className="site-button">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* OUR BLOG END */}
      </div>
      {/* CONTENT END */}
    </div>
  );
};

export default CandidateMyResume;
