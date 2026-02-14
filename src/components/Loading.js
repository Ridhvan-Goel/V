import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import loading_animation from './assets/animations/loader_animation.json';
import './styles/loading.css';

const Loading = () => {
    const [dots, setDots] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => (prevDots % 3) + 1);
        }, 400);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loading min-h-screen flex justify-center items-center flex-col bg-gradient-to-br from-[#cc2b5e] to-[#753a88]">
            <div className='lottie relative pointer-events-none'>
                <Lottie
                    animationData={loading_animation}
                    loop={true}
                    autoplay={true}
                    style={{ height: 230, width: 230 }}
                />
            </div>
            <div className="loading-text select-none">
                Loading{Array.from({ length: 3 }).map((_, index) => <span key={index} style={{ opacity: index < dots ? 1 : 0 }}>.</span>)}
            </div>
        </div>
    );
};

export default Loading;
