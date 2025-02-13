import React, { useState } from 'react';

export function CreateIncident() {
  const [incident, setIncident] = useState({
    reporter: '',
    email: '',
    address: '',
    time: '',
    status: 'Open',
    priority: 'Low',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncident({
      ...incident,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', incident);
    // Handle form submission logic here
  };

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2>Incident</h2>
          <a href="/">
            <i className="bi bi-plus-lg"></i>
          </a>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} role="form" enctype="multipart/form-data" method="post" autoComplete="off" id="incident_create_form_id">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Reporter</label>
                  <input
                    type="text"
                    name="reporter"
                    value={incident.reporter}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={incident.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={incident.address}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Time</label>
                  <input
                    type="datetime-local"
                    name="time"
                    value={incident.time}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    name="status"
                    value={incident.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="Closed">Closed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Open">Open</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Priority</label>
                  <select
                    className="form-select"
                    name="priority"
                    value={incident.priority}
                    onChange={handleChange}
                    required
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" id="incident_create_id" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}
