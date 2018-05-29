import React from 'react'; 
import axios from 'axios';
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

  it('Show form elements', () => {
    const app = mount(
      <App />
    );

    const form = app.find('form');
    expect(form.length).toBe(1);
    expect(form.find('input[type|="text"]').length).toBe(1);
    expect(form.find('select').length).toBe(1);
    expect(form.find('input[type|="submit"]').length).toBe(1);
  });

  it('Shows 3 projects', async() => {
    const wrapper = shallow(
      <App />
    );

    await wrapper.instance().componentDidMount();
    expect(wrapper.state('projects').length).toBe(3);
  });

  it('Get promised todos', async() => {    
    await axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        expect(response.data.length).toBe(200);
      })
  });
});
