import React from 'react';

const Card = ({ color, title, subtitle }) => {
    return (
        <div
            className="flex flex-col items-center justify-center text-center h-24 w-64 rounded-lg text-white cursor-pointer transition-all duration-400 hover:scale-110"
            style={{ backgroundColor: color }}
        >
            <p className="text-base font-bold">{title}</p>
            <p className="text-sm">{subtitle}</p>
        </div>
    );
};

export default Card;