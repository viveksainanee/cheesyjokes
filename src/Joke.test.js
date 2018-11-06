import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Joke from './Joke';

it('renders shallowly without crashing', function() {
  shallow(<Joke text="Knock knock" id="2" up={0} down={0} />);
});

it('passes snapshot test', function() {
  let wrapper = shallow(<Joke text="Knock knock" id="2" up={0} down={0} />);
  let serialized = toJSON(wrapper);
  expect(serialized).toMatchSnapshot();
});
