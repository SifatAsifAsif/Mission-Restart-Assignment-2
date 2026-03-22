import React from 'react';
import Info from '../Info/Info';
import StatusBar from '../StatusBar/StatusBar';

const DataContainer = ({ dataPromise, setClicked, clicked, resolved, setResoved, inProgress, setInprogress }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 p-3">

            <Info inProgress={inProgress} setInprogress={setInprogress}  clicked={clicked} setClicked={setClicked} dataPromise={dataPromise}> </Info>
            <StatusBar resolved={resolved} setResoved={setResoved} clicked={clicked} dataPromise={dataPromise} > </StatusBar>

        </div>
    );
};

export default DataContainer;