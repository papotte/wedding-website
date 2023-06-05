import React from 'react';

type DateTimeProps = {
    value: number;
    type: string;
};
export const DateTimeDisplay = ({ value, type }: DateTimeProps) => {
    return (
        <div className="flex flex-col bg-accent-900 w-16 h-16 md:w-20 md:h-20 rounded-full justify-center animate-beat text-center text-white/75 px-2 overflow-hidden">
            <h6 className="text-2xl md:text-3xl">{value}</h6>
            <h6 className="overflow-ellipsis whitespace-nowrap overflow-x-hidden">{type}</h6>
        </div>
    );
};
