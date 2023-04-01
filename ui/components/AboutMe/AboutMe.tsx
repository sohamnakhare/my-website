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
      border: '1px solid',
      pointerEvents: 'none',
      background: 'beige',
    }}
    className="transition-timing-function-linear transition-duration-500ms"
  >
    <h1>{name}</h1>
  </div>
);

const AboutMeItem = ({ i, item }: { i: string; item: string }) => {
  return (
    <>
      <div data-cursor="small">
        <div className="d-flex align-items-baseline mb-3">
          <div className="mr-1">
            <h5 className="font-light text-lg">{i}.</h5>
          </div>
          <h1 className="text-huge font-normal">{item}</h1>
        </div>
      </div>
    </>
  );
};

export const AboutMe = () => {
  const [mousePosition, setMousePosition] = useState({
    mouseX: 0,
    mouseY: 0,
  });
  const [showInfo, setShowInfo] = useState(false);
  const [name, setName] = useState('');

  const { mouseX, mouseY } = mousePosition;

  const handleOnMouseMove =
    (name: string) => (e: MouseEvent<HTMLDivElement>) => {
      setMousePosition({ mouseX: e.clientX + 20, mouseY: e.clientY + 20 });
      setName(name);
    };

  const handleOnMouseEnter = () => {
    setShowInfo(true);
  };

  const handleOnMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div
      onMouseOver={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className="container m-auto"
    >
      <div className="d-flex column d-inline-block">
        <InfoContainer
          visibility={showInfo && mouseX > 0 ? 'visible' : 'hidden'}
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
    </div>
  );
};
