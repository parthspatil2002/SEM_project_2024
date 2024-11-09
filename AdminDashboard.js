import React from 'react';
import { Bar } from 'react-chartjs-2';

function AdminDashboard() {
  const data = {
    labels: ['Food Quality', 'Cleanliness', 'Washroom', 'Games Equipment'],
    datasets: [
      {
        label: 'Feedback Score',
        data: [3, 4, 2, 5], // Sample data
      },
    ],
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Bar data={data} />
    </div>
  );
}

export default AdminDashboard;
