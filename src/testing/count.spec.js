import React from "react";
import TestUtils from "react-addons-test-utils";
import expect from "expect";
// import Count from "../components/Count";

const Count = ({ count }) => {
    return (
        <div className="count-container">
            {count ? 
            (count === 1 ? <h4>{count} task remaining</h4> : <h4>{count} tasks remaining</h4> )
            : <h4>No Tasks Remaining</h4>}
        </div>
    )
}

describe("The Count Component", () => {

    it("Component should render an integer count", () => {

        const renderer = TestUtils.createRenderer();
        renderer.render(<Count count={5}/>);
        const output = renderer.getRenderOutput();
        console.log(output);
    })
})
