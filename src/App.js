import React from 'react';
import StaffDropdown from './StaffDropDown';
import LoadTable from './LoadTable';
import Schedule from './Schedule';

const App = () => {
  return (
    <div>
      <h1>My Schedule</h1>
      <Schedule/>
      <StaffDropdown />
      <LoadTable/>
    </div>
  );
};

export default App;
