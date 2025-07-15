import React from 'react';

const ProjectCard = ({ title, color, number }) => {
    return (
        <div className="bg-[rgb(38,38,38)] w-45 px-6 py-7 rounded-4xl">
            <h2 className="text-neutral-400 text-base">{title}</h2>
            <div className="h-10 mt-4 flex items-center">
                <div className="w-2 h-full rounded-full mr-3" style={{ backgroundColor: color }}></div>
                <h1 className="text-4xl text-neutral-200 font-bold">{number}</h1>
            </div>
        </div>
    );
};

export default ProjectCard;
