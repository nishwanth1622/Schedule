import React, { useState } from 'react';

const LoadTable = () => {
    const [load, setLoad] = useState({
        X1: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
        X2: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
        X3: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
        X4: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
        X5: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
        X6: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
        X7: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    }); // State to keep track of staff member load


    const handleIncrement = (staff, day, slot) => {
        let isConflict = false;
        Object.keys(load).forEach((key) => {
            if (load[key][day] === slot) {
                isConflict = true;
            }
        });

        if (isConflict) {
            alert(`${slot} is already taken in ${day}`);
        } else if (load[staff][day] === slot) {
            alert(`${staff} is already scheduled for ${slot} in ${day}`);
        } else if (getTotalShiftsPerWeek(load[staff]) === 7 && slot !== '') {
            alert(`${staff} has already been scheduled for 7 shifts this week`);
        } else if (getTotalShiftsPerDay(load[staff], day) === 2 && slot !== '') {
            alert(`${staff} cannot have more than 2 shifts on ${day}`);
        } else {
            setLoad((prevLoad) => {
                const newLoad = { ...prevLoad };
                newLoad[staff][day] = slot;
                return newLoad;
            });
        }
    };

    const handleDecrement = (staff, day) => {
        setLoad((prevLoad) => {
            const newLoad = { ...prevLoad };
            newLoad[staff][day] = '';
            return newLoad;
        });
    };

    const getTotalShiftsPerWeek = (staffLoad) => {
        let total = 0;
        Object.keys(staffLoad).forEach((key) => {
            if (staffLoad[key] !== '') {
                total++;
            }
        });
        return total;
    };

    const getTotalShiftsPerDay = (staffLoad, day) => {
        let total = 0;
        Object.keys(staffLoad).forEach((key) => {
            if (staffLoad[key] === day) {
                total++;
            }
        });
        return total;
    };


    return (
        <table>
            <thead>
                <tr>
                    <th></th> {/* Empty cell to represent the top-left corner of the table */}
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(load).map((staff) => (
                    <tr key={staff}>
                        <td>{staff}</td>
                        <td>
                            <button onClick={() => handleIncrement(staff, 'Monday')}>+</button>
                            {load[staff]['Monday']}
                            <button onClick={() => handleDecrement(staff, 'Monday')}>-</button>
                        </td>
                        <td>
                            <button onClick={() => handleIncrement(staff, 'Tuesday')}>+</button>
                            {load[staff]['Tuesday']}
                            <button onClick={() => handleDecrement(staff, 'Tuesday')}>-</button>
                        </td>
                        <td>
                            <button onClick={() => handleIncrement(staff, 'Wednesday')}>+</button>
                            {load[staff]['Wednesday']}
                            <button onClick={() => handleDecrement(staff, 'Wednesday')}>-</button>
                        </td>
                        <td>
                            <button onClick={() => handleIncrement(staff, 'Thursday')}>+</button>
                            {load[staff]['Thursday']}
                            <button onClick={() => handleDecrement(staff, 'Thursday')}>-</button>
                        </td>
                        <td>
                            <button onClick={() => handleIncrement(staff, 'Friday')}>+</button>
                            {load[staff]['Friday']}
                            <button onClick={() => handleDecrement(staff, 'Friday')}>-</button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    );
};


export default LoadTable;