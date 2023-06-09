import React, { useLayoutEffect, useState } from 'react';
import styles from './FollowCursor.module.css';

const dotPostitionOffset = {
  normal: 10,
  large: 250,
};

export const FollowCursor = () => {
  const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 });
  const [cursorType, setCursorType] = useState<'normal' | 'large'>('normal');
  const { mouseX, mouseY } = mousePosition;

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ mouseX: e.clientX, mouseY: e.clientY });
    // @ts-ignore
    const dataCursor = e.target?.closest('[data-cursor]');
    if (dataCursor) {
      const cursorType = dataCursor.dataset.cursor;
      setCursorType(cursorType);
    } else {
      setCursorType('normal');
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const dotPosition = () => ({
    left: mouseX - dotPostitionOffset[cursorType],
    top: mouseY - dotPostitionOffset[cursorType],
  });

  return (
    <>
      <span
        style={{ ...dotPosition(), pointerEvents: 'none' }}
        className={`${styles.dot} ${styles[cursorType + '-dot']}`}
      ></span>
    </>
  );
};
