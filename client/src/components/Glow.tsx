import React from 'react';

type Props = {
    color: keyof typeof colors;
    position: 'left' | 'right' | 'center';
    size: number;
};

const colors = { green: 'bg-green-800', blue: 'bg-blue-800', orange: 'bg-orange-800' };

export default function Glow({ color, position, size }: Props) {
    return (
        <div className="h-0 -z-10">
            <div
                style={{ width: `${size}px`, height: `${size}px` }}
                className={`blur-[300px] ${colors[color]} ${
                    position === 'left' ? '-translate-x-[50%]' : position === 'right' ? 'translate-x-[50%]' : ''
                }`}
            />
        </div>
    );
}
