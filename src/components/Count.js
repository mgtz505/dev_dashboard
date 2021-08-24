import React from 'react';

const Count = ({ count }) => {
    return (
        <div className="count-container">
            {count ? 
            (count === 1 ? <h3>{count} task remaining</h3> : <h3>{count} tasks remaining</h3> )
            : <h1>No Tasks Remaining!</h1>}
        </div>
    )
}

export default Count;