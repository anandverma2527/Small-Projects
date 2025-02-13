import React, { useState } from 'react';

export function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    mobileNo: '',
    faxNo: '',
    phoneNo: '',
    newPassword: '',
    confirmPassword: '',
    userType: 'individual'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleClick = () => {
    console.log(formData); 
  };

  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <ul className="nav nav-pills border border-2 rounded-pill" role="tablist">
            <li className="nav-item w-50">
              <a className="nav-link active rounded-pill text-center" data-bs-toggle="pill" href="#login">
                LOGIN
              </a>
            </li>
            <li className="nav-item w-50">
              <a className="nav-link rounded-pill text-center" data-bs-toggle="pill" href="#signup">
                SIGNUP
              </a>
            </li>
          </ul>
          <div className="tab-content">
            {/* LOGIN FORM */}
            <div id="login" className="container tab-pane active p-5">
              <h2>USER LOGIN</h2>
              <form role="form" autoComplete="off" id="login_user">
                <div className="mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Enter your email"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 text-end">
                  <a href="#">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-info btn-block w-100 rounded-pill text-white" id="login_val">
                  LOG ME IN
                </button>
              </form>
            </div>

            {/* SIGNUP FORM */}
            <div id="signup" className="container tab-pane fade">
              <form role="form" autoComplete="off" id="signup_user">
                <div className="row py-3">
                  <div className="col-md-12">
                    <label>
                      Individual/Enterprise/Government <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="individual"
                        name="userType"
                        value="individual"
                        checked={formData.userType === 'individual'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">Individual</label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="enterprise"
                        name="userType"
                        value="enterprise"
                        checked={formData.userType === 'enterprise'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">Enterprise</label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="government"
                        name="userType"
                        value="government"
                        checked={formData.userType === 'government'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">Government</label>
                    </div>
                  </div>
                </div>

                {/* Other inputs */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">First Name <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label className="form-label">Email <span className="text-danger">*</span></label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <button type="button" className="btn btn-info btn-block w-100 rounded-pill text-white" id="sign_up" onClick={handleClick}>
                    SIGNUP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
