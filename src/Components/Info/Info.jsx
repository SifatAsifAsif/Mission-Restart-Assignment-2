import React, { use } from 'react';
import Data from '../Data/Data';

const Info = ({ dataPromise, setClicked, clicked, inProgress, setInprogress }) => {

    const allData = use(dataPromise)
    return (
        <div className="w-full lg:w-2/3">
            <h2 className="text-xl font-bold mb-4">Customer Tickets</h2>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {
                    allData.map(data => <Data inProgress={inProgress} setInprogress={setInprogress}  clicked={clicked} setClicked={setClicked} data={data}></Data>)
               } 
            </div>
        </div>
    );
};

export default Info;