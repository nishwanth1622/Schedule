import React, { useState } from 'react';

const StaffDropdown = () => {
  const [selectedStaff, setSelectedStaff] = useState(null); // State to keep track of selected staff member

  const staffMembers = ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7']; // Array of staff member names

  const handleSelect = (event) => {
    setSelectedStaff(event.target.value); // Update selected staff member when user selects a new option
  };

  return (
    <div>
      <label htmlFor="staff-dropdown">Select staff member:</label>
      <select id="staff-dropdown" value={selectedStaff} onChange={handleSelect}>
        <option value="">Choose a staff member</option>
        {staffMembers.map((staff) => (
          <option key={staff} value={staff}>
            {staff}
          </option>
        ))}
      </select>
      <p>Selected staff member: {selectedStaff || 'None'}</p>
    </div>
  );
};

export default StaffDropdown;
