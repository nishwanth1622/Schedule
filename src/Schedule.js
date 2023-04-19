import React, { useState } from 'react';

const Schedule = () => {
    const [staff, setStaff] = useState({
        Monday: { Upstairs: '', Downstairs: '', ParkingLot: '' },
        Tuesday: { Upstairs: '', Downstairs: '', ParkingLot: '' },
        Wednesday: { Upstairs: '', Downstairs: '', ParkingLot: '' },
        Thursday: { Upstairs: '', Downstairs: '', ParkingLot: '' },
        Friday: { Upstairs: '', Downstairs: '', ParkingLot: '' },
    });
    const [warning, setWarning] = useState(false);

    const handleSelect = (day, shift, selectedStaff) => {
        // Check if staff member is already assigned to consecutive lunch slots on the same day
        if (shift === 'LunchB' && staff[day]['LunchA'] === selectedStaff) {
            setWarning(true);
        } else if (shift === 'LunchC' && (staff[day]['LunchA'] === selectedStaff || staff[day]['LunchB'] === selectedStaff)) {
            setWarning(true);
        } else {
            setWarning(false);
        }

        setStaff((prevStaff) => ({
            ...prevStaff,
            [day]: {
                ...prevStaff[day],
                [shift]: selectedStaff,
            },
        }));
    };

    return (
        <div>
            <h1>Schedule</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Morning Upstairs</td>
                        <td>
                            <select value={staff.Monday.Upstairs} onChange={(e) => handleSelect('Monday', 'Upstairs', e.target.value)}>
                                <option value=""></option>
                                <option value="X1">X1</option>
                                <option value="X2">X2</option>
                                <option value="X3">X3</option>
                                <option value="X4">X4</option>
                                <option value="X5">X5</option>
                                <option value="X6">X6</option>
                                <option value="X7">X7</option>
                            </select>
                        </td>
                        <td>
                            <select value={staff.Tuesday.Upstairs} onChange={(e) => handleSelect('Tuesday', 'Upstairs', e.target.value)}>
                                <option value=""></option>
                                <option value="X1">X1</option>
                                <option value="X2">X2</option>
                                <option value="X3">X3</option>
                                <option value="X4">X4</option>
                                <option value="X5">X5</option>
                                <option value="X6">X6</option>
                                <option value="X7">X7</option>
                            </select>
                        </td>
                        <td>
                            <select value={staff.Wednesday.Upstairs} onChange={(e) => handleSelect('Wednesday', 'Upstairs', e.target.value)}>
                                <option value=""></option>
                                <option value="X1">X1</option>
                                <option value="X2">X2</option>
                                <option value="X3">X3</option>
                                <option value="X4">X4</option>
                                <option value="X5">X5</option>
                                <option value="X6">X6</option>
                                <option value="X7">X7</option>
                            </select>
                        </td>
                        <td>
                            <select value={staff.Thursday.Upstairs} onChange={(e) => handleSelect('Thursday', 'Upstairs', e.target.value)}>
                                <option value=""></option>
                                <option value="X1">X1</option>
                                <option value="X2">X2</option>
                                <option value="X3">X3</option>
                                <option value="X4">X4</option>
                                <option value="X5">X5</option>
                                <option value="X6">X6</option>
                                <option value="X7">X7</option>
                            </select>
                        </td>
                        <td>
                            <select value={staff.Friday.Upstairs} onChange={(e) => handleSelect('Friday', 'Upstairs', e.target.value)}>
                                <option value=""></option>
                                <option value="X1">X1</option>
                                <option value="X2">X2</option>
                                <option value="X3">X3</option>
                                <option value="X4">X4</option>
                                <option value="X5">X5</option>
                                <option value="X6">X6</option>
                                <option value="X7">X7</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;
