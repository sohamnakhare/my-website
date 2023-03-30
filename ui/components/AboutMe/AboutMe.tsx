import React, { useState } from 'react';

const aboutMeItems = ['My Story', 'Education', 'Skills'];

export const AboutMe = () => {
  return (
    <div>
      {aboutMeItems.map((aboutMeItem, i) => (
        <div className="d-flex mb-3" key={i}>
          <div className="mr-2">
            <h5 className="text-lg">0{i + 1}</h5>
          </div>
          <h1 className="text-huge leading-none">{aboutMeItem}</h1>
        </div>
      ))}
    </div>
  );
};
