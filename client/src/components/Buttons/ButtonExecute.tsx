import React from 'react';

type Props = {
    canExecute: boolean;
};

export default function ButtonExecute({ canExecute }: Props) {
    if (!canExecute) {
        return <button className="px-4 py-2 w-32 bg-gray-600 rounded cursor-not-allowed">Ejecutar</button>;
    }
    return <button className="px-4 py-2 w-32 bg-blue-600 rounded">Ejecutar</button>;
}
