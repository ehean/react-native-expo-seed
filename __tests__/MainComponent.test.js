import React from 'react';
import { View, Text, Image } from 'react-native';
import { shallow } from 'enzyme';

import MainComponent from '../components/MainComponent';

afterAll(() => {
  console.log('All tests finished');
});

afterEach(() => { /* do something */ });
beforeAll(() => { /* do something */ });
beforeEach(() => { /* do something */ });

describe('<MainComponent>', () => {
  const wrapper = shallow(<MainComponent />);

  it('should have a View component wrapper', () => {
    expect(wrapper.type()).toEqual(View);
  });

  it('should have flex equal to 1', () => {
    expect(wrapper.props().style.flex).toEqual(1);
  });

  it('should have an Image child component', () => {
    expect(wrapper.childAt(0).type()).toBe(Image);
  });

  it('should have a Text child component', () => {
    expect(wrapper.childAt(1).type()).toBe(Text);
  });
});
