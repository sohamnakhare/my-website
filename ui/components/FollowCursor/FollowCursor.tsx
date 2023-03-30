import React, { useLayoutEffect, useState } from 'react';
import styles from './FollowCursor.module.css';

const InfoContainer = ({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) => (
  <div
    style={{
      position: 'absolute',
      top: mouseY,
      left: mouseX,
      width: '50vw',
      height: '50vh',
      border: '1px solid white',
    }}
  >
    <h1>Information</h1>
  </div>
);

export const FollowCursor = () => {
  const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 });
  const { mouseX, mouseY } = mousePosition;

  useLayoutEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setMousePosition({ mouseX: e.clientX, mouseY: e.clientY });
    });
  });

  const dotPosition = () => ({ left: mouseX - 4, top: mouseY - 4 });

  return (
    <>
      <InfoContainer mouseX={mouseX} mouseY={mouseY} />
      <span style={dotPosition()} className={styles.dot}></span>
    </>
  );
};
