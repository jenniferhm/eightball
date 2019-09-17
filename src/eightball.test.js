import React from "react";
import { shallow, mount} from "enzyme";
import Eightball from "./eightball";

it("renders without crashing", function() {
  shallow(<Eightball />);
});

it("renders initial message", function() {
  let wrapper = mount(<Eightball />);

  expect(wrapper.html()).toContain("Think of a Question");  
});

it("renders correct message", function() {
  let wrapper = mount(<Eightball />);

  wrapper.setState({msg: "Most likely.", color: "green"});
  expect(wrapper.html()).toContain("Most likely.");
});

it("changes default message on click", function() {
  let wrapper = mount(<Eightball />);

  wrapper.simulate("click");
  expect(wrapper.state().msg).not.toEqual("Think of a Question");
});

it("generates random messages", function() {
  let wrapper = mount(<Eightball />);

  wrapper.simulate("click");
  expect(Eightball.defaultProps.messages).toContainEqual(wrapper.state());  
});