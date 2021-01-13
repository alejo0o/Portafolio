/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

import {
  FooterMain,
  FooterFirstContainer,
  FooterMainContainer,
  FooterImg,
  FooterSecond,
  HorizontalLine,
  SecondContainer,
  ThirdContainer,
  IconImg,
} from './FooterStyle';

const Footer = () => {
  return (
    <FooterMain>
      <FooterMainContainer>
        <div className='container'>
          <FooterFirstContainer>
            <FooterImg
              alt='Alejandro Vivanco briefcase'
              src='https://i.ibb.co/WpgfrpQ/fotomini.jpg'
              width='80'
              height='70'
              className='d-inline-block align-top'
            />
            <p className='mr-5'>You can find me on:</p>
            <a
              rel='noreferrer'
              target='_blank'
              className='buttonEffect'
              href='https://www.linkedin.com/in/alejandro-manuel-vivanco-mosquera-646625116/'>
              <i className='fa fa-linkedin-square lk_color' />
            </a>

            <a
              rel='noreferrer'
              target='_blank'
              className='buttonEffect'
              href='https://platzi.com/@alejo0o/'>
              <IconImg alt='' src='https://i.ibb.co/zmmfkF6/platzi-logo.png' />
            </a>

            <a
              rel='noreferrer'
              target='_blank'
              className='buttonEffect'
              href='https://github.com/alejo0o'>
              <i className='fa fa-github' />
            </a>

            <a
              rel='noreferrer'
              target='_blank'
              className='buttonEffect'
              href='https://www.facebook.com/manuel.vivanco.716/'>
              <i className='fa fa-facebook-f fb_color' />
            </a>

            <a
              rel='noreferrer'
              target='_blank'
              className='buttonEffect'
              href='https://www.coursera.org/user/9a5402d1d502173ba2eca249be406d0f'>
              <IconImg
                alt=''
                src='https://i.ibb.co/8PCt6nK/coursera-logo-icon-145379.png'
              />
            </a>

            <a
              rel='noreferrer'
              target='_blank'
              className='buttonEffect'
              href='https://www.instagram.com/manuelvivanco/'>
              <i className='fa fa-instagram instagram_color' />
            </a>
          </FooterFirstContainer>
        </div>
        <HorizontalLine />
        <SecondContainer>
          <FooterSecond>
            <p>Or you can send me an email:</p>
            <a
              rel='noreferrer'
              target='_blank'
              className='buttonEffect'
              href='mailto:alejandrovivanco1998@gmail.com?subject=Hello%20Alejandro!&amp;body=Hi%20Alejandro%20Vivanco,%0A%0A'>
              <i className='fa fa-envelope lk_color' />
            </a>
          </FooterSecond>
        </SecondContainer>
        <ThirdContainer>
          <div className='ml-1'>
            <i className='fa fa-copyright m-1' aria-hidden='true' />
            2020 Alejandro Vivanco. All Rights Reserved
          </div>
          <div className='ml-auto mr-2'>CellPhone: +593 99 328 0922</div>
        </ThirdContainer>
      </FooterMainContainer>
      <style>
        {`
            .fb_color {
                color: #343fdb;
            }
            .lk_color {
                color: #3498db;
            }
            .instagram_color {
                color: #d639af;
            }
            .buttonEffect img {
                line-height: 2.5em;
                font-size: 1.8em;
                transition: 0.2s linear;
            }
            .buttonEffect:hover img {
                transform: scale(1.3);
            }
            .buttonEffect {
                display: inline-block;
                width: 5em;
                height: 5em;
                background: #f1f1f1;
                margin: 1%;
                border-radius: 3em;
                box-shadow: 0 5px 15px -5px #00000070;
                overflow: hidden;
                position: relative;
                text-align: center;
            }
            .buttonEffect i {
                line-height: 2.5em;
                font-size: 1.9em;
                transition: 0.2s linear;
            }
            .buttonEffect:hover i {
                transform: scale(1.3);
                color: #f1f1f1;
            }
            .buttonEffect::before {
                content: '';
                position: absolute;
                width: 120%;
                height: 120%;
                background: #3498db;
                transform: rotate(45deg);
                left: -110%;
                top: 90%;
            }
            .buttonEffect:hover::before {
                animation: aaa 0.7s 1;
                top: -10%;
                left: -10%;
            }
           
            @keyframes aaa {
                0% {
                    left: -110%;
                    top: 90%;
                }
                50% {
                    left: 10%;
                    top: -30%;
                }
                100% {
                    top: -10%;
                    left: -10%;
                }
            }   
            @media screen and (max-width: 450px) {
                .buttonEffect {
                    width: 3em;
                    height: 3em;
                }
                .buttonEffect i {
                    font-size: 1em;
                }
                .buttonEffect img {
                    font-size: 1em;
                }
            }   
        `}
      </style>
    </FooterMain>
  );
};

export default Footer;
