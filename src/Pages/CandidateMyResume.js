import React, { useState } from "react";
import { Link } from "react-router-dom";

const CandidateMyResume = () => {
  const resumeValues = [{ ResumeHeadline: "" }];

  const [resumeHeadline, setResumeHaeadline] = useState(resumeValues);

  const ResumeHeadlineClick = () => {
    setResumeHaeadline(resumeHeadline);
    console.log(resumeHeadline);
  };
  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    fullName: "",
  });

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
                        <div>{`${resumeHeadline}`}</div>
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
                          <form>
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
                                      onChange={(e) =>
                                        setResumeHaeadline(e.target.value)
                                      }
                                      placeholder="Type Description"
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
                              <button
                                type="button"
                                onClick={ResumeHeadlineClick}
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
                        <p>Google INC</p>
                        <p>January 2023 to Present</p>
                        <p>Jobjilla Template</p>
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
                      <Link
                        data-bs-toggle="modal"
                        href="#Desired_Career"
                        title="Edit"
                        className="site-text-primary"
                      >
                        <span className="fa fa-edit" />
                      </Link>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 ">
                      <div className="twm-panel-inner">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Industry</div>
                              <span className="twm-s-info-discription">
                                IT-Software/Software Services
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Functional Area</div>
                              <span className="twm-s-info-discription">
                                Design / Creative / User Experience
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Role</div>
                              <span className="twm-s-info-discription">
                                Web Designer
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Job Type</div>
                              <span className="twm-s-info-discription">
                                permanent
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Employment Type</div>
                              <span className="twm-s-info-discription">
                                Full Time
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Desired Shift</div>
                              <span className="twm-s-info-discription">
                                Add Desired Shift
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">
                                Availability to Join
                              </div>
                              <span className="twm-s-info-discription">
                                06 August
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Expected Salary</div>
                              <span className="twm-s-info-discription">
                                1 Lakhs
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Desired Location</div>
                              <span className="twm-s-info-discription">
                                Add Desired Location
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Desired Industry</div>
                              <span className="twm-s-info-discription">
                                Add Desired Industry
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
                      tabIndex={-1}
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <form>
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
                                      <select
                                        className="wt-select-box selectpicker"
                                        data-live-search="true"
                                        title
                                        data-bv-field="size"
                                      >
                                        <option>Accounting / Finance</option>
                                        <option>
                                          Banking / Financial Services / Broking
                                        </option>
                                        <option>
                                          Education / Teaching / Training
                                        </option>
                                        <option>
                                          IT-Hardware / Networking
                                        </option>
                                        <option>Other</option>
                                      </select>
                                      <i className="fs-input-icon fa fa-industry" />
                                    </div>
                                  </div>
                                </div>
                                {/*Functional Area / Department*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Functional Area / Department</label>
                                    <div className="ls-inputicon-box">
                                      <select
                                        className="wt-select-box selectpicker"
                                        data-live-search="true"
                                        title
                                        data-bv-field="size"
                                      >
                                        <option>Agent</option>
                                        <option>
                                          Architecture / Interior Design
                                        </option>
                                        <option>
                                          Beauty / Fitness / Spa Services
                                        </option>
                                        <option>
                                          IT Hardware / Technical Support
                                        </option>
                                        <option>
                                          IT Software - System Programming
                                        </option>
                                        <option>Other</option>
                                      </select>
                                      <i className="fs-input-icon fa fa-building" />
                                    </div>
                                  </div>
                                </div>
                                {/*Role*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Role</label>
                                    <div className="ls-inputicon-box">
                                      <select
                                        className="wt-select-box selectpicker"
                                        data-live-search="true"
                                        title
                                        data-bv-field="size"
                                      >
                                        <option>Creative</option>
                                        <option>Web Designer</option>
                                        <option>Graphic Designer</option>
                                        <option>
                                          National Creative Director
                                        </option>
                                        <option>Fresher</option>
                                        <option>Other</option>
                                      </select>
                                      <i className="fs-input-icon fa fa-globe-americas" />
                                    </div>
                                  </div>
                                </div>
                                {/*Job Type*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Job Type</label>
                                    <div className="row twm-form-radio-inline">
                                      <div className="col-md-6">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="Permanent"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="Permanent"
                                        >
                                          Permanent
                                        </label>
                                      </div>
                                      <div className="col-md-6">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="Contractual"
                                          defaultChecked
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="Contractual"
                                        >
                                          Contractual
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*Employment Type*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Employment Type</label>
                                    <div className="row twm-form-radio-inline">
                                      <div className="col-md-6">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="Full_Time"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="Full_Time"
                                        >
                                          Full Time
                                        </label>
                                      </div>
                                      <div className="col-md-6">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="part_Time"
                                          defaultChecked
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="part_Time"
                                        >
                                          Part Time
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*Preferred Shift*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Preferred Shift</label>
                                    <div className="row twm-form-radio-inline">
                                      <div className="col-md-4">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="S_day"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="S_day"
                                        >
                                          Day
                                        </label>
                                      </div>
                                      <div className="col-md-4">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="S_night"
                                          defaultChecked
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="S_night"
                                        >
                                          Night
                                        </label>
                                      </div>
                                      <div className="col-md-4">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="s_part_time"
                                          defaultChecked
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="s_part_time"
                                        >
                                          Part Time
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*Availability to join*/}
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Availability to Join</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        className="form-control datepicker"
                                        data-provide="datepicker"
                                        name="company_since"
                                        type="text"
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
                                      <div className="col-md-6">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="US_Dollars"
                                        />
                                        <label className="form-check-label">
                                          US Dollars
                                        </label>
                                      </div>
                                      <div className="col-md-6">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="US_Dollars"
                                          id="indian_rpees"
                                          defaultChecked
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="indian_rpees"
                                        >
                                          Indian Rupees
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                  <div className="form-group">
                                    <label>Lakh</label>
                                    <div className="ls-inputicon-box">
                                      <select
                                        className="wt-select-box selectpicker"
                                        data-live-search="true"
                                        title
                                        data-bv-field="size"
                                      >
                                        <option
                                          className="bs-title-option"
                                          value
                                        >
                                          Select Category
                                        </option>
                                        <option>0 lakh</option>
                                        <option>1 lakh</option>
                                        <option>2 lakh</option>
                                        <option>5 lakh</option>
                                        <option>4 lakh</option>
                                        <option>5 lakh</option>
                                      </select>
                                      <i className="fs-input-icon fa fa-dollar-sign" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                  <div className="form-group">
                                    <label>Thousand</label>
                                    <div className="ls-inputicon-box">
                                      <select
                                        className="wt-select-box selectpicker"
                                        data-live-search="true"
                                        title
                                        data-bv-field="size"
                                      >
                                        <option
                                          className="bs-title-option"
                                          value
                                        >
                                          Select Category
                                        </option>
                                        <option> 05 Thousand </option>
                                        <option> 10 Thousand </option>
                                        <option> 15 Thousand </option>
                                        <option> 20 Thousand </option>
                                        <option> 25 Thousand </option>
                                        <option> 30 Thousand </option>
                                        <option> 35 Thousand </option>
                                        <option> 40 Thousand </option>
                                        <option> 45 Thousand </option>
                                        <option> 50 Thousand </option>
                                      </select>
                                      <i className="fs-input-icon fa fa-dollar-sign" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Desired Location</label>
                                    <div className="ls-inputicon-box">
                                      <select
                                        className="wt-select-box selectpicker"
                                        data-live-search="true"
                                        title
                                        data-bv-field="size"
                                      >
                                        <option
                                          className="bs-title-option"
                                          value
                                        >
                                          Country
                                        </option>
                                        <option>India</option>
                                        <option>Australia</option>
                                        <option>Bahrain</option>
                                        <option>China</option>
                                        <option>Dubai</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                        <option>Hong Kong</option>
                                        <option>Kuwait</option>
                                      </select>
                                      <i className="fs-input-icon fa fa-map-marker-alt" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group mb-0">
                                    <label>Desired Industry</label>
                                    <div className="ls-inputicon-box">
                                      <select
                                        className="wt-select-box selectpicker"
                                        data-live-search="true"
                                        title
                                        data-bv-field="size"
                                      >
                                        <option
                                          className="bs-title-option"
                                          value
                                        >
                                          Country
                                        </option>
                                        <option>Software</option>
                                        <option>Factory</option>
                                        <option>Ngo</option>
                                        <option>Other</option>
                                      </select>
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
                              <button type="button" className="site-button">
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
                      <Link
                        data-bs-toggle="modal"
                        href="#Personal_Details"
                        title="Edit"
                        className="site-text-primary"
                      >
                        <span className="fa fa-edit" />
                      </Link>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 ">
                      <div className="twm-panel-inner">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Date of Birth</div>
                              <span className="twm-s-info-discription">
                                31 July 1998
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Permanent Address</div>
                              <span className="twm-s-info-discription">
                                Add Permanent Address
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Gender</div>
                              <span className="twm-s-info-discription">
                                Male
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Area Pin Code</div>
                              <span className="twm-s-info-discription">
                                302021
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Marital Status</div>
                              <span className="twm-s-info-discription">
                                Single / unmarried
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Hometown</div>
                              <span className="twm-s-info-discription">
                                USA
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Passport Number</div>
                              <span className="twm-s-info-discription">
                                +123 456 7890
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">
                                Work permit of other country
                              </div>
                              <span className="twm-s-info-discription">UK</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Differently Abled</div>
                              <span className="twm-s-info-discription">
                                None
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="twm-s-detail-section">
                              <div className="twm-title">Languages</div>
                              <span className="twm-s-info-discription">
                                English
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
                      tabIndex={-1}
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <form>
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
                                        className="form-control datepicker"
                                        data-provide="datepicker"
                                        name="company_since"
                                        type="text"
                                        placeholder="mm/dd/yyyy"
                                      />
                                      <i className="fs-input-icon far fa-calendar" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Gender</label>
                                    <div className="row twm-form-radio-inline">
                                      <div className="col-md-6">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="S_male"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="S_male"
                                        >
                                          Male
                                        </label>
                                      </div>
                                      <div className="col-md-6">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="S_female"
                                          defaultChecked
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="S_female"
                                        >
                                          Female
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Permanent Address</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        className="form-control"
                                        type="text"
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
                                        className="form-control"
                                        type="text"
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
                                        className="form-control"
                                        type="text"
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
                                      <select
                                        className="wt-select-box selectpicker"
                                        data-live-search="true"
                                        title
                                        data-bv-field="size"
                                      >
                                        <option
                                          className="bs-title-option"
                                          value
                                        >
                                          Select Category
                                        </option>
                                        <option>Married</option>
                                        <option>Single</option>
                                      </select>
                                      <i className="fs-input-icon fa fa-user" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                  <div className="form-group">
                                    <label>Passport Number</label>
                                    <div className="ls-inputicon-box">
                                      <input
                                        className="form-control"
                                        type="text"
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
                                      <select
                                        className="wt-select-box selectpicker"
                                        data-live-search="true"
                                        title
                                        data-bv-field="size"
                                      >
                                        <option
                                          className="bs-title-option"
                                          value
                                        >
                                          Country
                                        </option>
                                        <option>Afghanistan</option>
                                        <option>Albania</option>
                                        <option>Algeria</option>
                                        <option>Andorra</option>
                                        <option>Angola</option>
                                        <option>Antigua and Barbuda</option>
                                        <option>Argentina</option>
                                        <option>Armenia</option>
                                        <option>Australia</option>
                                        <option>Austria</option>
                                        <option>Azerbaijan</option>
                                        <option>The Bahamas</option>
                                        <option>Bahrain</option>
                                        <option>Bangladesh</option>
                                        <option>Barbados</option>
                                      </select>
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
                              <button type="button" className="site-button">
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Attach Resume*/}
                  <div className="panel panel-default mb-3">
                    <div className="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                      <h4 className="panel-tittle m-a0">Attach Resume</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 ">
                      <div className="twm-panel-inner">
                        <p>
                          Resume is the most important document recruiters look
                          for. Recruiters generally do not look at profiles
                          without resumes.
                        </p>
                        <div className="dashboard-cover-pic">
                          <form
                            action="https://thewebmax.org/jobzilla/upload.php"
                            className="dropzone"
                          />
                          <p>Upload Resume File size is 3 MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Accomplishments*/}
                  <div className="panel panel-default mb-3">
                    <div className="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                      <h4 className="panel-tittle m-a0">Accomplishments</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 ">
                      <div className="twm-panel-inner">
                        <div className="twm-list-wrap">
                          <div className="twm-list-inner d-flex justify-content-between">
                            <b>Online Profile</b>
                            <Link
                              data-bs-toggle="modal"
                              href="#Online_Profile"
                              title="Edit"
                              className="site-text-primary"
                            >
                              <span className="fa fa-edit" />
                            </Link>
                          </div>
                          <p>
                            Add link to Online profiles (e.g. Linkedin, Facebook
                            etc.).
                          </p>
                        </div>
                        {/*Online Profile Modal */}
                        <div
                          className="modal fade twm-saved-jobs-view"
                          id="Online_Profile"
                          tabIndex={-1}
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <form>
                                <div className="modal-header">
                                  <h2 className="modal-title">
                                    Online Profiles
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
                                    <div className="col-xl-12 col-lg-12">
                                      <div className="form-group">
                                        <label>Social Profile</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Social Profile Name"
                                          />
                                          <i className="fs-input-icon fa fa-address-card" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12">
                                      <div className="form-group">
                                        <label>URL</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Url"
                                          />
                                          <i className="fs-input-icon fa fa-globe-americas" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="form-group mb-0">
                                        <label>Description</label>
                                        <textarea
                                          className="form-control"
                                          rows={3}
                                          placeholder="Type Description"
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
                                  <button type="button" className="site-button">
                                    Save
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="twm-list-wrap">
                          <div className="twm-list-inner d-flex justify-content-between">
                            <b>Work Sample</b>
                            <Link
                              data-bs-toggle="modal"
                              href="#Work_Sample"
                              title="Edit"
                              className="site-text-primary"
                            >
                              <span className="fa fa-edit" />
                            </Link>
                          </div>
                          <p>
                            Add link to your Projects (e.g. Github links etc.).
                          </p>
                        </div>
                        {/*Work Sample Modal */}
                        <div
                          className="modal fade twm-saved-jobs-view"
                          id="Work_Sample"
                          tabIndex={-1}
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <form>
                                <div className="modal-header">
                                  <h2 className="modal-title">Work Sample</h2>
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
                                        <label>Work Title</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Work Title"
                                          />
                                          <i className="fs-input-icon fa fa-address-card" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12">
                                      <div className="form-group">
                                        <label>URL</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Url"
                                          />
                                          <i className="fs-input-icon fa fa-globe-americas" />
                                        </div>
                                      </div>
                                    </div>
                                    {/*Start Date*/}
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label>Duration From</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control datepicker"
                                            data-provide="datepicker"
                                            name="company_since"
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
                                        <label>Duration to</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control datepicker"
                                            data-provide="datepicker"
                                            name="company_since"
                                            type="text"
                                            placeholder="mm/dd/yyyy"
                                          />
                                          <i className="fs-input-icon far fa-calendar" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12">
                                      <div className="form-group">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="flexRadioDefault"
                                          id="Working_on"
                                          defaultChecked
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="Working_on"
                                        >
                                          I am currently working on this
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="form-group mb-0">
                                        <label>Description</label>
                                        <textarea
                                          className="form-control"
                                          rows={3}
                                          placeholder="Type Description"
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
                                  <button type="button" className="site-button">
                                    Save
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="twm-list-wrap">
                          <div className="twm-list-inner d-flex justify-content-between">
                            <b>
                              White Paper / Research Publication / Journal Entry
                            </b>
                            <Link
                              data-bs-toggle="modal"
                              href="#Research_Publication"
                              title="Edit"
                              className="site-text-primary"
                            >
                              <span className="fa fa-edit" />
                            </Link>
                          </div>
                          <p>Add links to your Online publications.</p>
                        </div>
                        {/*White Paper / Research Publication / Journal Entry Modal */}
                        <div
                          className="modal fade twm-saved-jobs-view"
                          id="Research_Publication"
                          tabIndex={-1}
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <form>
                                <div className="modal-header">
                                  <h2 className="modal-title">
                                    White Paper / Research Publication / Journal
                                    Entry
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
                                    <div className="col-xl-12 col-lg-12">
                                      <div className="form-group">
                                        <label>Title</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Title"
                                          />
                                          <i className="fs-input-icon fa fa-address-card" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12">
                                      <div className="form-group">
                                        <label>URL</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Url"
                                          />
                                          <i className="fs-input-icon fa fa-globe-americas" />
                                        </div>
                                      </div>
                                    </div>
                                    {/*Start Date*/}
                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <label>Published On</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control datepicker"
                                            data-provide="datepicker"
                                            name="company_since"
                                            type="text"
                                            placeholder="mm/dd/yyyy"
                                          />
                                          <i className="fs-input-icon far fa-calendar" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="form-group mb-0">
                                        <label>Description</label>
                                        <textarea
                                          className="form-control"
                                          rows={3}
                                          placeholder="Type Description"
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
                                  <button type="button" className="site-button">
                                    Save
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="twm-list-wrap">
                          <div className="twm-list-inner d-flex justify-content-between">
                            <b>Presentation</b>
                            <Link
                              data-bs-toggle="modal"
                              href="#Presentation_modal"
                              title="Edit"
                              className="site-text-primary"
                            >
                              <span className="fa fa-edit" />
                            </Link>
                          </div>
                          <p>
                            Add links to your Online presentations (e.g.
                            Slideshare presentation links etc.).
                          </p>
                        </div>
                        {/*Presentation Modal */}
                        <div
                          className="modal fade twm-saved-jobs-view"
                          id="Presentation_modal"
                          tabIndex={-1}
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <form>
                                <div className="modal-header">
                                  <h2 className="modal-title">Presentation</h2>
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
                                        <label>Social Profile</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Social Profile Name"
                                          />
                                          <i className="fs-input-icon fa fa-address-card" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12">
                                      <div className="form-group">
                                        <label>URL</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Url"
                                          />
                                          <i className="fs-input-icon fa fa-globe-americas" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="form-group mb-0">
                                        <label>Description</label>
                                        <textarea
                                          className="form-control"
                                          rows={3}
                                          placeholder="Type Description"
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
                                  <button type="button" className="site-button">
                                    Save
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="twm-list-wrap">
                          <div className="twm-list-inner d-flex justify-content-between">
                            <b>Certification</b>
                            <Link
                              data-bs-toggle="modal"
                              href="#Certification_modal"
                              title="Edit"
                              className="site-text-primary"
                            >
                              <span className="fa fa-edit" />
                            </Link>
                          </div>
                          <p>Add details of Certification you have filed.</p>
                        </div>
                        {/*Certification Modal */}
                        <div
                          className="modal fade twm-saved-jobs-view"
                          id="Certification_modal"
                          tabIndex={-1}
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <form>
                                <div className="modal-header">
                                  <h2 className="modal-title">Certification</h2>
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
                                        <label>Certification Name</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Certification Name"
                                          />
                                          <i className="fs-input-icon fa fa-address-card" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12">
                                      <div className="form-group">
                                        <label>Certification Body</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Certification Body"
                                          />
                                          <i className="fs-input-icon fa fa-address-card" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12">
                                      <div className="form-group mb-0">
                                        <label>Year Onlabel</label>
                                        <div className="ls-inputicon-box">
                                          <select
                                            className="wt-select-box selectpicker"
                                            data-live-search="true"
                                            title
                                            data-bv-field="size"
                                          >
                                            <option
                                              className="bs-title-option"
                                              value
                                            >
                                              Year
                                            </option>
                                            <option>2021</option>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>2015</option>
                                            <option>2014</option>
                                            <option>2013</option>
                                            <option>2012</option>
                                            <option>2011</option>
                                          </select>
                                          <i className="fs-input-icon fa fa-calendar-alt" />
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
                                  <button type="button" className="site-button">
                                    Save
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="twm-list-wrap">
                          <div className="twm-list-inner d-flex justify-content-between">
                            <b>Patent</b>
                            <Link
                              data-bs-toggle="modal"
                              href="#Patent_modal"
                              title="Edit"
                              className="site-text-primary"
                            >
                              <span className="fa fa-edit" />
                            </Link>
                          </div>
                          <p>Add details of Patents you have filed.</p>
                        </div>
                        {/*Patent Modal */}
                        <div
                          className="modal fade twm-saved-jobs-view"
                          id="Patent_modal"
                          tabIndex={-1}
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <form>
                                <div className="modal-header">
                                  <h2 className="modal-title">Patent</h2>
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
                                        <label>Title</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Title"
                                          />
                                          <i className="fs-input-icon fa fa-address-card" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12">
                                      <div className="form-group">
                                        <label>Url</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Url "
                                          />
                                          <i className="fs-input-icon fa fa-globe-americas" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12">
                                      <div className="form-group">
                                        <label>Patent Office</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Patent Office"
                                          />
                                          <i className="fs-input-icon fa fa-building" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12">
                                      <div className="form-group">
                                        <label>Application Number</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Application Number"
                                          />
                                          <i className="fs-input-icon fa fa-dice-d6" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12">
                                      <div className="form-group">
                                        <label>Status</label>
                                        <div className="row twm-form-radio-inline">
                                          <div className="col-md-6">
                                            <input
                                              className="form-check-input"
                                              type="radio"
                                              name="flexRadioDefault"
                                              id="Patent_Issued"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="Patent_Issued"
                                            >
                                              Patent Issued
                                            </label>
                                          </div>
                                          <div className="col-md-6">
                                            <input
                                              className="form-check-input"
                                              type="radio"
                                              name="flexRadioDefault"
                                              id="Patent_pending"
                                              defaultChecked
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="Patent_pending"
                                            >
                                              Patent pending
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/*Start Date*/}
                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <label>Published On</label>
                                        <div className="ls-inputicon-box">
                                          <input
                                            className="form-control datepicker"
                                            data-provide="datepicker"
                                            name="company_since"
                                            type="text"
                                            placeholder="mm/dd/yyyy"
                                          />
                                          <i className="fs-input-icon far fa-calendar" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="form-group mb-0">
                                        <label>Description</label>
                                        <textarea
                                          className="form-control"
                                          rows={3}
                                          placeholder="Type Description"
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
                                  <button type="button" className="site-button">
                                    Save
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Profile Summary*/}
                  <div className="panel panel-default mb-3">
                    <div className="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                      <h4 className="panel-tittle m-a0">Profile Summary</h4>
                      <Link
                        data-bs-toggle="modal"
                        href="#Profile_Summary"
                        title="Edit"
                        className="site-text-primary"
                      >
                        <span className="fa fa-edit" />
                      </Link>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 ">
                      <div className="twm-panel-inner">
                        <p>
                          Your Profile Summary should mention the highlights of
                          your career and education, what your professional
                          interests are, and what kind of a career you are
                          looking for. Write a meaningful summary of more than
                          50 characters.
                        </p>
                      </div>
                    </div>
                    {/*Modal Popup */}
                    <div
                      className="modal fade twm-saved-jobs-view"
                      id="Profile_Summary"
                      tabIndex={-1}
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <form>
                            <div className="modal-header">
                              <h2 className="modal-title">Profile Summary</h2>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <p>
                                Your Profile Summary should mention the
                                highlights of your career and education, what
                                your professional interests are, and what kind
                                of a career you are looking for. Write a
                                meaningful summary of more than 50 characters.
                              </p>
                              <div className="row">
                                <div className="col-lg-12 col-md-12">
                                  <div className="form-group twm-textarea-full">
                                    <textarea
                                      className="form-control"
                                      placeholder="Detail of Project"
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
                              <button type="button" className="site-button">
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
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
