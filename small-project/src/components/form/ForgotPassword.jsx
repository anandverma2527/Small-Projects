import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // for navigation if needed

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
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="user_email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="psw"
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              required
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="conf_psw"
              name="conf_psw"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">Reset Password</button>

          <div className="mt-3 text-center">
            <Link to="/" className="btn btn-link">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
