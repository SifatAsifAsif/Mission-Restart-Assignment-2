import React from 'react';
import y from '../../assets/y.png';
import g from '../../assets/g.png';
import dateIcon from '../../assets/dateIcon.png';

const Data = ({ data, setClicked, clicked, inProgress, setInprogress }) => {
    return (
        <div
            onClick={() => {
                setClicked(prev => [...prev, data.id])
                setInprogress(inProgress+1)
            }
            }
            className="bg-base-200 p-4 mb-3 rounded-lg shadow"
    >

          
            <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold">{data.title}</h2>

              
                <button
                    className="btn btn-sm flex items-center gap-2 text-black rounded-full"
                    style={{
                        backgroundColor: data.status === "Open" ? "#B9F8CF" : "#F8F3B9",
                    }}
                >
                    <img
                        className="w-4 h-4"
                        src={data.status === "Open" ? g : y}
                        alt="status"
                    />
                    {data.status}
                </button>
            </div>


            <div className="mb-3">
                <p className="text-sm text-gray-500">
                    {data.description}
                </p>
            </div>

  
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <h3 className="font-medium">#{data.id}</h3>
                    <h3 className="font-medium">{data.priority}</h3>
                </div>

                <div className="flex gap-4 items-center">
                    <h3 className="font-medium">{data.customer}</h3>

                   
                    <div className="flex items-center gap-1">
                        <img className="w-4 h-4" src={dateIcon} alt="date" />
                        <span className="text-sm">{data.createdAt}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;