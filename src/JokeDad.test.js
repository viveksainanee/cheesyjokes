import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import JokeDad from './JokeDad';

it('renders shallowly without crashing', function() {
  shallow(<JokeDad />);
});

it('passes snapshot test', function() {
  let wrapper = shallow(<JokeDad />);
  let serialized = toJSON(wrapper);
  expect(serialized).toMatchSnapshot();
});

// it('can be event tested', function(){
//   let wrapper = shallow(<JokeDad )
// }
