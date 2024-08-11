import React from 'react'
import { render} from "@testing-library/react";
import TEST_IMAGES from "./_testCommon.js";
import Card from "./Card";

//smoke test
test('if it renders without crashing', ()=>{
    render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum= {1} totalNum={3}/>)
});

//snapshot test
test("if matches snapshot", ()=>{
   const {asFragment} = render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum= {1} totalNum={3}/>);
   expect(asFragment).toMatchSnapshot();
})