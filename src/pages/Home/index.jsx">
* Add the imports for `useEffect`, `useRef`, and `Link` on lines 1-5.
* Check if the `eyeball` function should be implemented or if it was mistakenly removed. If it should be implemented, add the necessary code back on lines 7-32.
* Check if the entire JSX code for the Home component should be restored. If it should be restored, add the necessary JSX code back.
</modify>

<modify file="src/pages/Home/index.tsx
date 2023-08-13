// src/pages/Home/index.jsx

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import avataaar from './../../assets/imgs/avatar.png';

import css from './home.module.css';
import Features from '../../components/Features/Features';

const Home = () => {
  const eyes = useRef(null);

  const eyeball = (e) => {
    const eyesList = eyes.current.children;
    for (let eye of eyesList) {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

      let radian = Math.atan2(e.pageX - x, e.pageY - y);
      let rotate = radian * (180 / Math.PI) * -1 + 270;
      eye.style.transform = `rotate(${rotate}deg)`;
    }
  };

  useEffect(() => {
    document.body.addEventListener('mousemove', eyeball);
    return () => {
      document.body.removeEventListener('mousemove', eyeball);
    };
  }, []);

  return (
    <div className={css.Home}>
      <div className={`${css.Hero} ${css['has-image']} ${css.HomeHero}`}>
        <div className={css.container}>
          <div className={css.main}>
            <h1 className={css.name}>
              <span className={css.clip}>Andrew J Hughes</span>
            </h1>
            <p className={css.text}>Frontend Web Developer</p>
            <p className={css.tagline}>
              Empowering Developers to Build Amazing Websites
            </p>
            <div className={css.actions}>
              <div className={css.action}>
                <Link
                  className={`${css.Button} ${css.medium} ${css.brand}`}
                  to='/portfolio/'
                >
                  Latest Projects
                </Link>
              </div>
              <div className={css.action}>
                <a
                  className={`${css.Button} ${css.medium} ${css.alt}`}
                  href='https://github.com/ajhughesdev'
                  target='_blank'
                  rel='noreferrer'
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          <div className={css.image}>
            <div className={css['image-container']}>
              <div className={css['image-bg']}></div>
              <img
                src={avataaar}
                alt='avatar'
                className={`${css.Image} ${css['img-src']}`}
              // src/pages/Home/index.tsx
              
              import React from 'react';
              
              const Home = () => {
                // Add your JSX code here
                return (
                  <div>
                    <h1>Welcome to the Home page</h1>
                    <p>This is the content of the Home page</p>
                  </div>
                );
              };
              
              export default Home;

