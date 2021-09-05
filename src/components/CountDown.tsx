import React, { FC, useEffect, useState } from 'react';

interface CountDown {
  timer: number,
}

const CountDown: FC<CountDown> = ({ timer }) => {

  const [currentTime, setCurrentTime] = useState<number>(timer);

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(currentTime - 1);
    }, 1000)
  }, [currentTime])

  
  return (
    <div>
      {currentTime > 0 ? currentTime : null}
    </div>
  )
}

export default CountDown;