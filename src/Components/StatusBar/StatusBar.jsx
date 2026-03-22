import React, { use } from 'react';

const StatusBar = ({ clicked, dataPromise }) => {
    const allData = use(dataPromise);

    // filter matched items
    const selectedTasks = allData.filter(data =>
        clicked.includes(data.id)
    );

    return (
        <div className="w-full lg:w-1/3 bg-base-200 p-4 rounded">
            <div className="flex flex-col p-3">

                <div className='mb-4'>
                    {
                        selectedTasks.length > 0 ? (
                            selectedTasks.map(data => (
                                <div key={data.id} className="mb-2">
                                    <h2 className="font-semibold ">{data.title}</h2>
                                    <button onClick={} className="btn btn-success w-full text-sm">
                                        Complete
                                    </button>
                                </div>
                            ))
                        ) : (
                            <>
                                <h2 className="font-semibold">Task Status</h2>
                                <p className="text-sm text-gray-500">
                                    Select a ticket to add to Task Status
                                </p>
                            </>
                        )
                    }
                </div>

                <div>
                    <h2 className="font-semibold">Resolved Task</h2>
                    <p className="text-sm text-gray-500">
                        No resolved tasks yet.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default StatusBar;