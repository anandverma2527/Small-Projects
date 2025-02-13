import React, { useState } from 'react';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Form validation
  const validateForm = () => {
    let formIsValid = true;
    let errorMessages = { email: '', password: '', confirmPassword: '' };

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      errorMessages.email = 'Please enter a valid email address.';
      formIsValid = false;
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.match(passwordRegex)) {
      errorMessages.password = 'Password must contain at least one number, one uppercase letter, and be at least 8 characters long.';
      formIsValid = false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      errorMessages.confirmPassword = 'Passwords do not match.';
      formIsValid = false;
    }

    setErrors(errorMessages);
    return formIsValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid - handle form submission
      console.log('Form Submitted:', { email, password });
      alert('Password reset successful!');
    }
  };

  return (
    <div className="container">
      <div className="registration form">
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="item_required_h"
              id="user_email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <label id="error1_email" style={{ color: 'red' }}>{errors.email}</label>
          </div>

          <div className="form-group">
            <input
              type="password"
              className="item_required_h"
              id="psw"
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              required
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <label style={{ color: 'red' }}>{errors.password}</label>
          </div>

          <div className="form-group">
            <input
              type="password"
              className="item_required_h"
              id="conf_psw"
              name="conf_psw"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
            <label id="match_psw" style={{ color: 'red' }}>{errors.confirmPassword}</label>
          </div>

          <button type="submit" className="button">Reset Password</button>
        </form>
      </div>
    </div>
  );
}





