import { useEffect, useState } from 'react';

const Timer = ({ initialMinutes = 0, initialSeconds = 0 }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className='rounded-xl p-3 text-white font-poppins font-semibold text-2xl leading-3.5 '>
      <span className='rounded-xl p-2 text-white font-poppins font-semibold text-2xl leading-3.5'>
        <span className='bg-black p-1 border border-customRed'>{minutes < 10 ? `0` : ''}</span>
        <span className='bg-black p-1 border border-customRed'>{minutes}</span>
      </span>:
      <span className='rounded-xl p-2 text-white font-poppins font-semibold text-2xl leading-3.5'>
        {seconds < 10 ? (
          <>
            <span className='bg-black p-1 border border-customRed'>0</span>
            <span className='bg-black p-1 border border-customRed'>{seconds}</span>
          </>
        ) : (<>
          <span className='bg-black p-1 border border-customRed'>{seconds}</span>
          </>
        )}
      </span> </div>
  );
};

export default Timer;
