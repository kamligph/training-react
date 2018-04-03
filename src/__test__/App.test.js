import React from 'react'; 
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import App from './../App'; 

describe('Web Application', () => {
  it('Renders without crashing', () => {

    const component = renderer.create(
      <App />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
