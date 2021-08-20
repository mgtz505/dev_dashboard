import React from 'react';

const Count = ({ count }) => {
    return (
        <div className="count-container">
            {count ? 
            (count === 1 ? <h4>{count} task remaining</h4> : <h4>{count} tasks remaining</h4> )
            : <h4>No Tasks Remaining</h4>}
        </div>
    )
}

export default Count;