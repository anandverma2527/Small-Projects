import React from 'react';

export function IncidentList() {
  // Sample data, you can replace this with actual data fetched from an API or database
  const incidents = [
    {
      id: 1,
      code: 'INC12345',
      status: 'Open',
      priority: 'High',
      time: '2025-02-12 14:30',
    },
    {
      id: 2,
      code: 'INC12346',
      status: 'In Progress',
      priority: 'Medium',
      time: '2025-02-12 15:00',
    },
    // Add more incidents as needed
  ];

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2>Incident List</h2>
          <a href="/create-incident">
            <i className="bi bi-plus-lg"></i> Add Incident
          </a>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Code</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {incidents.map((incident, index) => (
                <tr key={incident.id}>
                  <td>
                    <input type="text" className="form-control" value={index + 1} readOnly />
                  </td>
                  <td>
                    <a href={`/incident/${incident.code}`} target="_blank">
                      <input
                        type="text"
                        className="form-control"
                        value={incident.code}
                        readOnly
                      />
                    </a>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={incident.status}
                      readOnly
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={incident.priority}
                      readOnly
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={incident.time}
                      readOnly
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


