import React, { use } from 'react';

const StatusBar = ({ clicked, dataPromise, resolved, setResoved }) => {
    const allData = use(dataPromise);

    
    const selectedTasks = allData.filter(data =>
        clicked.includes(data.id)
    );

    
    const activeTasks = selectedTasks.filter(data =>
        !resolved.includes(data.id)
    );

    const resolvedTasks = allData.filter(data =>
        resolved.includes(data.id)
    );

    const handleResolved = (id) => {
        setResoved(prev =>
            prev.includes(id) ? prev : [...prev, id]
        );
    };

    return (
        <div className="w-full lg:w-1/3 bg-base-200 p-4 rounded">
            <div className="flex flex-col p-3">

               
                <div className='mb-4'>
                    {
                        activeTasks.length > 0 ? (
                            activeTasks.map(data => (
                                <div key={data.id} className="mb-2">
                                    <h2 className="font-semibold">
                                        {data.title}
                                    </h2>
                                    <button
                                        onClick={() => handleResolved(data.id)}
                                        className="btn btn-success w-full text-sm"
                                    >
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

                    {
                        resolvedTasks.length > 0 ? (
                            resolvedTasks.map(data => (
                                <p key={data.id} className="text-sm text-gray-500">
                                    {data.title}
                                </p>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500">
                                No resolved tasks yet.
                            </p>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default StatusBar;