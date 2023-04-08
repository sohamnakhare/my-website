import classNames from 'classnames';
import React, { MouseEvent, ReactNode, Fragment, useState } from 'react';

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
      pointerEvents: 'none',
    }}
    className="p-2 text-lg bg-middleground  transition-timing-function-linear transition-duration-300ms"
  >
    <p>
      As a full stack developer with expertise in JavaScript, I have a strong
      foundation in Test Driven Development (TDD), which allows me to deliver
      high-quality software with a focus on reliability and maintainability. I
      follow clean coding practices, ensuring that my code is easy to read,
      understand, and modify, while also adhering to industry best practices and
      design patterns. With my experience in Amazon Web Services (AWS), I am
      well-versed in building and deploying scalable and secure applications
      using cloud technologies. Whether it&apos;s working with AWS Lambda,
      Amazon S3, or any other cloud-based services, I have the knowledge and
      skills necessary to deliver robust solutions that meet the needs of modern
      businesses. Overall, I am a dedicated professional with a passion for
      developing software that is both efficient and effective. I am always
      looking for new challenges and opportunities to learn and grow, and I
      bring a strong work ethic and attention to detail to every project that I
      undertake.
    </p>
  </div>
);

const AboutMeItem = ({
  i,
  item,
  mode,
}: {
  i: string;
  item: string;
  mode: 'blur' | 'normal' | 'highlight';
}) => {
  const itemModeClassName = classNames({
    'fg-text-color-lighter': mode === 'blur',
  });

  return (
    <>
      <div data-cursor="small">
        <div className={`d-flex align-items-baseline mb-3 pointer-default`}>
          <div className="mr-1">
            <h5 className={`font-light text-lg ${itemModeClassName}`}>{i}.</h5>
          </div>
          <h1 className={`text-huge font-normal ${itemModeClassName}`}>
            {item}
          </h1>
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
  const [hoveredItem, setHoveredItem] = useState('');
  const { mouseX, mouseY } = mousePosition;

  const handleOnMouseMoveOnItem =
    (name: string) => (e: MouseEvent<HTMLDivElement>) => {
      setMousePosition({ mouseX: e.clientX + 20, mouseY: e.clientY + 20 });
      setName(name);
    };

  const handleOnMouseEnterOnContainer = () => {
    setShowInfo(true);
  };

  const handleOnMouseLeaveOnContainer = () => {
    setShowInfo(false);
  };

  const handleOnMouseEnterOnItem = (itemName: string) => () => {
    setHoveredItem(itemName);
  };

  const handleOnMouseLeaveOnItem = () => {
    setHoveredItem('');
  };

  const getItemMode = (itemName: string): 'normal' | 'blur' => {
    if (!hoveredItem) return 'normal';
    return itemName == hoveredItem ? 'normal' : 'blur';
  };

  return (
    <div
      className="d-inline-block"
      onMouseOver={handleOnMouseEnterOnContainer}
      onMouseLeave={handleOnMouseLeaveOnContainer}
    >
      <div className="d-flex column">
        <InfoContainer
          visibility={showInfo && mouseX > 0 ? 'visible' : 'hidden'}
          mouseX={mouseX}
          mouseY={mouseY}
          name={name}
        />
        {aboutMeItems.map((aboutMeItem, i) => (
          <div
            key={i}
            onMouseMove={handleOnMouseMoveOnItem(aboutMeItem)}
            onMouseOver={handleOnMouseEnterOnItem(aboutMeItem)}
            onMouseLeave={handleOnMouseLeaveOnItem}
          >
            <AboutMeItem
              mode={getItemMode(aboutMeItem)}
              item={aboutMeItem}
              i={`0${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
