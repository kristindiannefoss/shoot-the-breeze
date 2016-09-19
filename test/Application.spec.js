import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';
import Application from '../lib/components/Application';
import MessageList from '../lib/components/Application';

describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });

  it('allows us to set props in the messagelist', () => {
    const wrapper = mount(<MessageList messages='test' />)
    assert.equal(wrapper.props().messages, 'test')
  })

  it()

});
