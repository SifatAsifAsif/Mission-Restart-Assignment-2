import React from 'react';
import vectorImg from '../../assets/vector1.png';

const Progress = ({ inProgress, resolved }) => {
    return (
        <div className="flex gap-6 bg-base-100 shadow-md p-4 rounded-xl">

            
            <div className="flex-1 relative text-center text-white h-50 flex flex-col justify-center rounded-xl overflow-hidden bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                <img
                    src={vectorImg}
                    className="absolute left-0 top-0 h-full  object-cover  pointer-events-none"
                    style={{ transform: 'scaleX(-1)' }}
                    alt=""
                />
                <img
                    src={vectorImg}
                    className="absolute right-0 top-0 h-full  object-cover  pointer-events-none"
                    alt=""
                />
                <p className="text-xl font-bold opacity-80 relative z-10">In Progress</p>
                <h1 className="text-3xl font-bold relative z-10">{inProgress}</h1>
            </div>

            
            <div className="flex-1 relative text-center text-white h-50 flex flex-col justify-center rounded-xl overflow-hidden bg-gradient-to-r from-[#54CF68] to-[#00827A]">
                <img
                    src={vectorImg}
                    className="absolute left-0 top-0 h-full  object-cover  pointer-events-none"
                    style={{ transform: 'scaleX(-1)' }}
                    alt=""
                />
                <img
                    src={vectorImg}
                    className="absolute right-0 top-0 h-full  object-cover  pointer-events-none"
                    alt=""
                />
                <p className="text-xl font-bold opacity-80 relative z-10">Resolved</p>
                <h1 className="text-3xl font-bold relative z-10">{resolved}</h1>
            </div>
        </div>
    );
};

export default Progress;