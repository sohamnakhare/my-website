import React, { MouseEvent, useState } from 'react';

const aboutMeItems = ['My Story', 'Education', 'Skills'];

const InfoContainer = ({
  mouseX,
  mouseY,
  visibility,
  name,
}: {
  mouseX: number;
  mouseY: number;
  visibility: 'hidden' | 'visible';
  name: string;
}) => (
  <div
    style={{
      visibility,
      position: 'absolute',
      top: mouseY,
      left: mouseX,
      width: '50vw',
      height: '50vh',
      border: '1px solid white',
      pointerEvents: 'none',
    }}
    className="transition-info-container"
  >
    <h1>{name}</h1>
  </div>
);

const AboutMeItem = ({ i, item }: { i: string; item: string }) => {
  return (
    <>
      <div>
        <div className="d-flex align-items-baseline mb-3">
          <div className="mr-2">
            <h5 className="text-lg">{i}.</h5>
          </div>
          <h1 className="text-huge">{item}</h1>
        </div>
      </div>
    </>
  );
};

export const AboutMe = () => {
  const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 });
  const [showInfo, setShowInfo] = useState(false);
  const [name, setName] = useState('');

  const { mouseX, mouseY } = mousePosition;

  const handleOnMouseMove =
    (name: string) => (e: MouseEvent<HTMLDivElement>) => {
      setMousePosition({ mouseX: e.clientX, mouseY: e.clientY });
      setName(name);
    };

  const handleOnMouseEnter = () => {
    setShowInfo(true);
  };

  const handleOnMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div onMouseOver={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <InfoContainer
        visibility={showInfo ? 'visible' : 'hidden'}
        mouseX={mouseX}
        mouseY={mouseY}
        name={name}
      />
      {aboutMeItems.map((aboutMeItem, i) => (
        <div key={i} onMouseMove={handleOnMouseMove(aboutMeItem)}>
          <AboutMeItem item={aboutMeItem} i={`0${i + 1}`} />
        </div>
      ))}
    </div>
  );
};
