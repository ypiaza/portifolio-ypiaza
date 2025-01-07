import React, { useState, useEffect } from 'react';

const Home = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen w-full bg-gray-200 overflow-hidden relative shadow-2xl">
            {/* Fundo de Parallax */}
            <div
                className="absolute inset-0 "
                style={{
                    transform: `translateY(${offsetY * 0.5}px)`,
                }}
            ></div>

            <div className="z-10 text-center">
                <div className="gap-1">
                    <h1
                        className="text-3xl font-extrabold text-cyan-600"
                        style={{
                            transform: `translateY(${offsetY * 0.3}px)`,
                        }}
                    >
                        Bem vindos ao meu portifólio!
                    </h1>
                </div>
                <div className='interative absolute bottom-5 left-[50%] w-3 h-3 bg-cyan-400 animate-bounce'></div>
            </div>
        </div>
    );
};

export default Home;
