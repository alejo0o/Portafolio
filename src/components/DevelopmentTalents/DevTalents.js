import React from 'react';
import Talent from './Talent';
import { DevelopTMain, VerticalLine } from './DevTalentsStyle';

const DevelopmentTalents = () => {
  return (
    <>
      <DevelopTMain>
        <Talent
          image='https://i.ibb.co/L5yLcjq/3499793-browser-window-cloning-site-website-107633.png'
          title='Front End'
          description="I enjoy front-end development, I'm always looking to give an aesthetic to a web page."
          tools="Languages and technologies I've used:"
          languages='HTML5, CSS3, ReactJS, Redux, React-Router, SSR, Webpack'
        />
        <VerticalLine />
        <Talent
          image='https://i.ibb.co/2dGLpf6/terminal-icon-34340.png'
          title='Backend End'
          description="My strength is back-end development, I enjoy working with data, develop API's and deploy an app"
          tools="Languages and technologies I've used:"
          languages='C#, Java, JavaScript, PHP on Laravel, Python, NodeJS, SQL, REST, GQL, Linux Servers, AWS, Docker'
        />
        <VerticalLine />
        <Talent
          image='https://i.ibb.co/qy9rbhw/cellphone-79786.png'
          title='Mobile Development'
          description="I'm familiar with some technologies in this area and I'm looking forward to learn more about this."
          tools="Languages and technologies I've used:"
          languages='React-Native, Expo, JavaScript, GQL'
        />
      </DevelopTMain>
    </>
  );
};

export default DevelopmentTalents;
