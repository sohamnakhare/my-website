import Head from 'next/head';
import { Inter } from 'next/font/google';
import { FollowCursor } from '@/ui/components/FollowCursor/FollowCursor';
import { useState } from 'react';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });

const Minimalistic = () => (
  <div
    className="pointer-default relative layer-2 d-flex full-screen-height column"
    style={{ justifyContent: 'center' }}
  >
    <h1 className="text-large font-medium">Hey ! I am a Soham</h1>
    <br />
    <br />
    <div className="relative layer-2">
      <h1 className="text-huge font-medium">
        <span className="pointer">Full-Stack Web Developer</span>
        , <br />
        <span>Delivering Clean Applications with Precision</span>
      </h1>
      <br />
      <br />
      <h1 className="text-large font-medium" data-cursor="large">
        My hands are dirty since 2013
      </h1>
    </div>
  </div>
);

const Detailed = () => (
  <div className="relative layer-2 d-flex full-screen-height align-items-center">
    <div className="d-flex space-between ">
      <div
        style={{ transform: 'rotate(-90deg)' }}
        className="text-huge font-medium"
      >
        Hi ! I am Soham
      </div>
      <div className="text-md font-medium" style={{ flexBasis: '30%' }}>
        I am a Full-Stack Web Developer with a passion for delivering clean,
        precise applications that exceed client expectations. With [number of
        years] of experience in the field, I have honed my skills in both
        front-end and back-end development, enabling me to handle a wide range
        of tasks and projects. <br />
        Skills: <br />
        Front-End Development: HTML, CSS, JavaScript, React, Angular, Vue.js{' '}
        <br />
        Back-End Development: Node.js, PHP, Python, Ruby on Rails, ASP.NET
        Database <br />
        Technologies: MySQL, MongoDB, PostgreSQL, SQLite Other Technologies:
        Git, AWS, Docker, Jenkins, Linux
      </div>
    </div>
  </div>
);

export default function Home() {
  const [contentVisibility, setContentVisibility] = useState(true);

  const handleMainContentVisibility = (visibility: boolean) => () => {
    setContentVisibility(visibility);
  };

  const mainClasses = classNames(inter.className, {
    'bg-alt': !contentVisibility,
  });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mainClasses}>
        <div className="container-fluid">
          <div
            className="container m-auto"
            style={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <div
              onMouseEnter={handleMainContentVisibility(false)}
              onMouseLeave={handleMainContentVisibility(true)}
              data-cursor="large"
            >
              {contentVisibility && <Minimalistic />}
              {!contentVisibility && <Detailed />}
            </div>
          </div>
        </div>
        <FollowCursor />
      </main>
    </>
  );
}
