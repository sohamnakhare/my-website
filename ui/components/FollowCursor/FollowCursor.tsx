import React, { useLayoutEffect, useState } from 'react';
import styles from './FollowCursor.module.css';

export const FollowCursor = () => {
  const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 });
  const { mouseX, mouseY } = mousePosition;

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ mouseX: e.clientX, mouseY: e.clientY });
  };

  useLayoutEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const dotPosition = () => ({ left: mouseX - 4, top: mouseY - 4 });

  return (
    <>
      <span
        style={{ ...dotPosition(), pointerEvents: 'none' }}
        className={styles.dot}
      ></span>
    </>
  );
};
