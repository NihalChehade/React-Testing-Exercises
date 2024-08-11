import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

//smoke test
it('should render without crashing', ()=>{
  render(<Carousel photos={TEST_IMAGES}
    title="images for testing"/>)
});

//snapshot test
test("if matches snapshot", ()=>{
  const {asFragment} = render(<Carousel photos={TEST_IMAGES}
    title="images for testing"/>);
  expect(asFragment).toMatchSnapshot();
});

test('if clicking left arrow will move me to the previous image', ()=>{
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the second image to show, but not the first
 
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();

});

test("if the left arrow is missing on the first image and right arrow missing in the last image", ()=>{
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // expect that the left arrow is missing when we're on the first image
  expect(
    container.querySelector('i[class="bi bi-arrow-left-circle"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // expect that the right arrow is missing when we're on the last image
  expect(
    container.querySelector('i[class="bi bi-arrow-right-circle"]')
  ).not.toBeInTheDocument();

  
})