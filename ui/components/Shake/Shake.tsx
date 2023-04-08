import classNames from 'classnames';
import React, { ReactNode, useEffect, useState } from 'react';

export const Shake = ({ children }: { children: ReactNode }) => {
  const [shakeElement, setShakeElement] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShakeElement(!shakeElement);
    }, 2500);
    return () => clearInterval(interval);
  }, [shakeElement]);

  const classes = classNames('d-inline-block', {
    shake: shakeElement,
  });

  return <div className={classes}>{children}</div>;
};
