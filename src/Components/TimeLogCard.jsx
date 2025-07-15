import React from "react";

const WavyRingCard = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="relative w-64 h-64">
                {/* Wavy Gradient Ring (SVG background) */}
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-full h-full"
                >
                    <defs>
                        <radialGradient id="grad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#7ef9ff" />
                            <stop offset="100%" stopColor="#8a2be2" />
                        </radialGradient>
                    </defs>
                    <path
                        fill="url(#grad)"
                        d="
              M63.1,-69.5
              C78.6,-55.6,87.9,-34.2,87.5,-13.9
              C87.1,6.3,76.9,25.6,64.3,41.3
              C51.7,57,36.7,69.1,19.3,75.6
              C1.9,82.1,-17.9,82.9,-35.6,75.3
              C-53.2,67.6,-68.6,51.5,-77.5,33.2
              C-86.5,14.9,-89,-5.6,-80.8,-23.6
              C-72.6,-41.6,-53.7,-57,-34.3,-70.4
              C-14.9,-83.9,4.9,-95.3,22.4,-91.2
              C39.9,-87.1,55.1,-67.8,63.1,-69.5Z
            "
                        transform="translate(100 100)"
                    />
                </svg>

                {/* Inner black circle */}
                <div className="absolute top-1/2 left-1/2 w-[75%] h-[75%] -translate-x-1/2 -translate-y-1/2 bg-black rounded-full flex flex-col items-center justify-center text-white z-10">
                    <p className="text-sm text-gray-400 mb-1">Time log</p>
                    <h1 className="text-4xl font-bold">80%</h1>
                    <p className="text-green-400 text-sm mt-1">+23% ↑</p>
                </div>
            </div>
        </div>
    );
};

export default WavyRingCard;
