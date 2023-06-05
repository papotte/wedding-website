import React from 'react';

type Props = { error?: Error };
const Loader = ({ error }: Props = {}) => {
    if (error) return <div>Failed to load</div>;

    return <progress className="progress w-50 animate-pulse"></progress>;
};
export default Loader;
