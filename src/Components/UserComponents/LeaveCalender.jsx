// import React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

// export default function LeaveCalender() {
//   // Define a list of dates that represent employee leave records (in YYYY-MM-DD format)
//   const employeeLeaveRecords = ['2023-09-10', '2023-09-15', '2023-09-20'];

//   // Function to render each day in the calendar
//   const renderDay = (day, _selectedDate, isDayInCurrentMonth, dayComponent) => {
//     // Check if the day is in the list of employee leave records
//     const isLeaveRecord = employeeLeaveRecords.includes(day.toISOString().split('T')[0]);

//     // Apply red color to the day if it's a leave record
//     const style = isLeaveRecord ? { color: 'red' } : {};

//     return React.cloneElement(dayComponent, { style });
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateRangeCalendar']}>
//         <DateRangeCalendar renderDay={renderDay} />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

import React from 'react'

const LeaveCalender = () => {
  return (
    <div>LeaveCalender</div>
  )
}

export default LeaveCalender
