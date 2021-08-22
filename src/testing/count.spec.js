import React from "react";
import renderer from 'react-test-renderer';
import expect from "expect";
import Count from "../components/Count";

describe("The Count Component", () => {

    it("Component should render an integer count", () => {

        const component = renderer.create(

            <Count count={5}/>
        );
        console.log(component);
    })
})
