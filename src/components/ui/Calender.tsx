import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';

interface HighlightedDate {
  date: number;
  description: string;
}

interface CalendarProps {
  year: number;
  month: number;
  highlightedDates: HighlightedDate[];
}

const Calendar: React.FC<CalendarProps> = ({ year, month, highlightedDates }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const getHighlightedDate = (day: number) => {
    return highlightedDates.find((highlightedDate) => highlightedDate.date === day);
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const highlightedDate = getHighlightedDate(day);

      days.push(
        <Box
          key={day}
          sx={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: highlightedDate ? ' #3794F0' : 'transparent',
            borderRadius: '50%',
            cursor: highlightedDate ? 'pointer' : 'default',
            '&:hover': highlightedDate && {
              backgroundColor: '#1976d2',
            },
          }}
        >
          {highlightedDate ? (
            <Tooltip title={highlightedDate.description} arrow>
              <Typography>{day}</Typography>
            </Tooltip>
          ) : (
            <Typography>{day}</Typography>
          )}
        </Box>
      );
    }
    return days;
  };

  return (
    <Box sx={{
       display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' ,
      // boxShadow: "0px 4px 12px rgba(173, 216, 230, 0.2)",
      // borderColor: "black",
    }}>
      {renderCalendarDays()}
    </Box>
  );
};

export default Calendar;
