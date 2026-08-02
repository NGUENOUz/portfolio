import React, { useState, useEffect } from 'react';

interface CountdownProps {
  initialTime: number;
}

const Countdown: React.FC<CountdownProps> = ({ initialTime }) => {
  const [time, setTime] = useState<number>(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const jours = Math.floor(seconds / (3600 * 24));
    const heures = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondes = seconds % 60;

    return { jours, heures, minutes, secondes };
  };

  const { jours, heures, minutes, secondes } = formatTime(time);

  return (
    <div className="countdown-container">
      <div className="time-values">
        {jours} : {heures} : {minutes} : {secondes}
      </div>
      <div className="time-labels">
        JOURS HEURES MINUTES SECONDES
      </div>
    </div>
  );
};

export default Countdown;