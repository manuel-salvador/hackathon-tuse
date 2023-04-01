import React from 'react';

type Props = {
    title: string;
    children: string | JSX.Element;
};

export default function Card({ title, children }: Props) {
    return (
        <div className="border-slate-400 border p-8 rounded-lg shadow-md shadow-slate-400 ">
            <h4 className="text-center mb-4 text-xl font-bold">{title}</h4>
            <p>{children}</p>
        </div>
    );
}
