import React, { useState } from 'react';

function Feedback() {
  const [feedback, setFeedback] = useState({
    foodQuality: '',
    hostelCleanliness: '',
    washroomCleanliness: '',
    gamesEquipment: '',
  });

  const handleSubmit = () => {
    alert('Feedback submitted');
    // Send feedback data to backend or store in local storage
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <label>Food Quality</label>
      <select onChange={(e) => setFeedback({ ...feedback, foodQuality: e.target.value })}>
        <option value="">Select</option>
        <option value="Poor">Poor</option>
        <option value="Average">Average</option>
        <option value="Good">Good</option>
        <option value="Excellent">Excellent</option>
      </select>

      {/* Repeat similar dropdowns for each category */}
      
      <button onClick={handleSubmit}>Submit Feedback</button>
    </div>
  );
}

export default Feedback;
