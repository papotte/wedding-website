import React from 'react';

type DateTimeProps = {
    value: number;
    type: string;
};
export const DateTimeDisplay = ({ value, type }: DateTimeProps) => {
    return (
        <div className="flex flex-col w-16 h-16 md:w-20 md:h-20 justify-center text-center text-secondary-600 px-2">
            <h6 className="text-2xl md:text-3xl">{value}</h6>
            <h6 className="whitespace-nowrap">{type}</h6>
        </div>
    );
};
