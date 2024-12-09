import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(
    new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date())
  );

  useEffect(() => {
    // Update the time every second
    const timeInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Update the date at midnight
    const now = new Date();
    const timeUntilMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0
    ).getTime() - now.getTime();

    const dateTimeout = setTimeout(() => {
      setDate(
        new Intl.DateTimeFormat('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }).format(new Date())
      );
    }, timeUntilMidnight);

    // Cleanup intervals and timeout
    return () => {
      clearInterval(timeInterval);
      clearTimeout(dateTimeout);
    };
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-white text-[15rem] font-bold">{time}</h1>
        <p className="text-white text-[1.5rem]">{date}</p>
      </section>
    </>
  );
};

export default Clock;
