/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

'use strict';

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import renderer from 'react-test-renderer';

import Form from '../../../components/form/form';

Enzyme.configure({ adapter: new Adapter() });

describe('<Form />', () => {
  it('form renders', () => {
    const formShallow = shallow(<Form />);
    expect(formShallow.find('form')).toBeTruthy();
  });

  it('form submit increments counter', () => {});

  it('form onChange changes name', () => {});

  it('snapshot', () => {});
});
