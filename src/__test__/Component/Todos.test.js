import React from 'react';
import axios from 'axios';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import Todos from './../../Component/Todos'; 

describe('[Todo.js]', () => {
  it('Renders without crashing', () => {
    const component = renderer.create(
      <Todos />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('Get promised todos v1', async() => {    
  //   expect.assertions(1);
  //   await axios.get('https://jsonplaceholder.typicode.com/todos')
  //     .then((response) => {
  //       expect(response.data.length).toBe(200);
  //     })
  // });

  it('Check proptypes', async() => {    
    // let todos;
    // await axios.get('https://jsonplaceholder.typicode.com/todos')
    //   .then((response) => {
    //     todos = response.data
    //   })
    
    // const wrapper = shallow(
    //   <Todos todos={todos} />
    // );

    // expect(wrapper.state('todos').length).toBe(5)

  });
});
